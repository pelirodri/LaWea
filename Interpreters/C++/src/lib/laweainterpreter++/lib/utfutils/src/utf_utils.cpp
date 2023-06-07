//
// Copyright © 2023 Rodrigo Pelissier. All rights reserved.
//
// This file is part of La Weá Interpreter (C++)
//
// La Weá Interpreter (C++) is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <http://www.gnu.org/licenses/>.
//

#include "utf_utils.hpp"

size_t utf_utils::utf8_byte_utf8_code_point_len(char8_t utf8_byte) {
	if ((utf8_byte & 0x80) == 0x0) {
		return 1;
	} else if ((utf8_byte & 0xE0) == 0xC0) {
		return 2;
	} else if ((utf8_byte & 0xF0) == 0xE0) {
		return 3;
	} else if ((utf8_byte & 0xF8) == 0xF0){
		return 4;
	} else [[unlikely]] {
		return 0;
	}
}

size_t utf_utils::utf16_surrogate_utf16_code_point_len(char16_t utf16_surrogate) {
	if (utf16_surrogate <= 0xD7FF || utf16_surrogate >= 0xE000) {
		return 1;
	} else if (utf16_surrogate >= 0xD800 && utf16_surrogate <= 0xDBFF) {
		return 2;
	} else [[unlikely]] {
		return 0;
	}
}

size_t utf_utils::utf8_char_utf16_code_point_len(const std::u8string &utf8_char) {
	return utf16_surrogate_utf16_code_point_len(utf8_char_to_utf16(utf8_char)[0]);
}

size_t utf_utils::utf16_char_utf8_code_point_len(const std::u16string &utf16_char) {
	if (utf16_strlen(utf16_char) != 1) [[unlikely]] {
		return 0;
	}

	return utf32_char_utf8_code_point_len(utf16_char_to_utf32(utf16_char));
}

size_t utf_utils::utf32_char_utf8_code_point_len(char32_t utf32_char) {
	if (utf32_char <= 0x7F) {
		return 1;
	} else if (utf32_char <= 0x7FF) {
		return 2;
	} else if (utf32_char <= 0xFFFF) {
		return 3;
	} else if (utf32_char <= 0x10FFFF) {
		return 4;
	} else [[unlikely]] {
		return 0;
	}
}

size_t utf_utils::utf32_char_utf16_code_point_len(char32_t utf32_char) {
	if (utf32_char < 0x10000) {
		return 1;
	} else if (utf32_char <= 0x10FFFF) {
		return 2;
	} else [[unlikely]] {
		return 0;
	}
}

size_t utf_utils::utf8_strlen(const std::u8string &utf8_str) {
	size_t str_len = 0;

	for (long i = 0; utf8_str[i];) [[likely]] {
		size_t utf8_code_point_len = utf8_byte_utf8_code_point_len(utf8_str[i]);

		if (utf8_code_point_len == 0) [[unlikely]] {
			return 0;
		}

		str_len++;
		i += utf8_code_point_len;
	}

	return str_len;
}

size_t utf_utils::utf16_strlen(const std::u16string &utf16_str) {
	size_t str_len = 0;

	for (long i = 0; utf16_str[i];) [[likely]] {
		size_t utf16_code_point_len = utf16_surrogate_utf16_code_point_len(utf16_str[i]);

		if (utf16_code_point_len == 0) [[unlikely]] {
			return 0;
		}

		str_len++;
		i += utf16_code_point_len;
	}

	return str_len;
}

std::u16string utf_utils::utf8_char_to_utf16(const std::u8string &utf8_char) {
	return utf32_char_to_utf16(utf8_char_to_utf32(utf8_char));
}

char32_t utf_utils::utf8_char_to_utf32(const std::u8string &utf8_char) {
	if (utf8_strlen(utf8_char) != 1) [[unlikely]] {
		return U'\0';
	}

	switch (utf8_byte_utf8_code_point_len(utf8_char[0])) {
		case 1:
			return utf8_char[0]; 
		case 2:
			return ((utf8_char[0] ^ 0xC0) << 6) | (utf8_char[1] ^ 0x80);
		case 3:
			return ((utf8_char[0] ^ 0xE0) << 12) | ((utf8_char[1] ^ 0x80) << 6) | (utf8_char[2] ^ 0x80);
		case 4: {
			char32_t first_half = ((utf8_char[0] ^ 0xF0) << 18) | ((utf8_char[1] ^ 0x80) << 12);
			char32_t second_half = ((utf8_char[2] ^ 0x80) << 6) | (utf8_char[3] ^ 0x80);
			
			return first_half | second_half;
		}
		[[unlikely]] default:
			return U'\0';
	}
}

std::u8string utf_utils::utf16_char_to_utf8(const std::u16string &utf16_char) {
	return utf32_char_to_utf8(utf16_char_to_utf32(utf16_char));
}

char32_t utf_utils::utf16_char_to_utf32(const std::u16string &utf16_char) {
	if (utf16_strlen(utf16_char) != 1) [[unlikely]] {
		return 0;
	}

	switch (utf16_surrogate_utf16_code_point_len(utf16_char[0])) {
		case 1:
			return utf16_char[0];
		case 2: {
			std::u16string tmp_char = utf16_char;

			tmp_char[0] = (tmp_char[0] - 0xD800) * 0x400;
            tmp_char[1] -= 0xDC00;

            return (tmp_char[0] + tmp_char[1]) + 0x10000;
        }
		[[unlikely]] default:
			return u'\0';
	}
}

std::u8string utf_utils::utf32_char_to_utf8(char32_t utf32_char) {
	std::u8string utf8_char;

	switch (utf32_char_utf8_code_point_len(utf32_char)) {
		case 1:
			utf8_char += utf32_char;
			break;
		case 2:
			utf8_char += 0xC0 | (utf32_char >> 6);
			utf8_char += 0x80 | (utf32_char & 0x3F);

			break;
		case 3:
			utf8_char += 0xE0 | (utf32_char >> 12);
			utf8_char += 0x80 | ((utf32_char >> 6) & 0x3F);
			utf8_char += 0x80 | (utf32_char & 0x3F);

			break;
		case 4:
			utf8_char += 0xF0 | (utf32_char >> 18);
			utf8_char += 0x80 | ((utf32_char >> 12) & 0x3F);
			utf8_char += 0x80 | ((utf32_char >> 6) & 0x3F);
			utf8_char += 0x80 | (utf32_char & 0x3F);

			break;
		[[unlikely]] default:
			return u8"";
	}

	return utf8_char;
}

std::u16string utf_utils::utf32_char_to_utf16(char32_t utf32_char) {
	std::u16string utf16_char;

	switch (utf32_char_utf16_code_point_len(utf32_char)) {
		case 1:
			utf16_char += utf32_char;
			break;
		case 2: {
			char32_t tmp_char = utf32_char - 0x10000;

	        utf16_char += (tmp_char >> 10) + 0xD800;
	        utf16_char += (tmp_char & 0x3FF) + 0xDC00;

	        break;
	    }
	    [[unlikely]] default:
	    	return u"";
	}

	return utf16_char;
}

std::u16string utf_utils::utf8_str_to_utf16(const std::u8string &utf8_str) {
	return utf32_str_to_utf16(utf8_str_to_utf32(utf8_str));
}

std::u32string utf_utils::utf8_str_to_utf32(const std::u8string &utf8_str) {
	std::u32string utf32_str;

	for (long i = 0; utf8_str[i];) [[likely]] {
		size_t utf8_code_point_len = utf8_byte_utf8_code_point_len(utf8_str[i]);

		if (!utf8_code_point_len) [[unlikely]] {
			return U"";
		}

		utf32_str += utf8_char_to_utf32(utf8_str.substr(i, utf8_code_point_len));
		i += utf8_code_point_len;
	}

	return utf32_str;
}

std::u8string utf_utils::utf16_str_to_utf8(const std::u16string &utf16_str) {
	return utf32_str_to_utf8(utf16_str_to_utf32(utf16_str));
}

std::u32string utf_utils::utf16_str_to_utf32(const std::u16string &utf16_str) {
	std::u32string utf32_str;

	for (long i = 0; utf16_str[i];) [[likely]] {
		size_t utf16_code_point_len = utf16_surrogate_utf16_code_point_len(utf16_str[i]);

		if (utf16_code_point_len == 0) [[unlikely]] {
			return U"";
		}

		utf32_str += utf16_char_to_utf32(utf16_str.substr(i, utf16_code_point_len));
		i += utf16_code_point_len;
	}

	return utf32_str;
}

std::u8string utf_utils::utf32_str_to_utf8(const std::u32string &utf32_str) {
	std::u8string utf8_str;

	for (long i = 0; utf32_str[i]; i++) [[likely]] {
		if (utf32_char_utf8_code_point_len(utf32_str[i]) == 0) [[unlikely]] {
			return u8"";
		}

		utf8_str += utf32_char_to_utf8(utf32_str[i]);
	}

	return utf8_str;
}

std::u16string utf_utils::utf32_str_to_utf16(const std::u32string &utf32_str) {
	std::u16string utf16_str;

	for (long i = 0; utf32_str[i]; i++) [[likely]] {
		if (utf32_char_utf16_code_point_len(utf32_str[i]) == 0) [[unlikely]] {
			return u"";
		}

		utf16_str += utf32_char_to_utf16(utf32_str[i]);
	}

	return utf16_str;
}
