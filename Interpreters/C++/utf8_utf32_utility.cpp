//
// Copyright © 2020 Rodrigo Pelissier. All rights reserved.
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

#include "utf8_utf32_utility.hpp"

size_t utf8_utf32_utility::utf8_byte_utf8_code_point_len(char8_t utf8_byte) {
	if ((utf8_byte & 0x80) == 0x0) {
		return 1;
	} else if ((utf8_byte & 0xE0) == 0xC0) {
		return 2;
	} else if ((utf8_byte & 0xF0) == 0xE0) {
		return 3;
	} else if ((utf8_byte & 0xF8) == 0xF0){
		return 4;
	} else {
		return 0;
	}
}

size_t utf8_utf32_utility::utf32_char_utf8_code_point_len(char32_t utf32_char) {
	if (utf32_char <= 0x7F) {
		return 1;
	} else if (utf32_char <= 0x7FF) {
		return 2;
	} else if (utf32_char <= 0xFFFF) {
		return 3;
	} else if (utf32_char <= 0x10FFFF) {
		return 4;
	} else {
		return 0;
	}
}

char32_t utf8_utf32_utility::utf8_char_to_utf32(const std::u8string &utf8_char) {
	switch (utf8_utf32_utility::utf8_byte_utf8_code_point_len(utf8_char[0])) {
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
		default:
			return U'\0';
	}
}

std::u8string utf8_utf32_utility::utf32_char_to_utf8(char32_t utf32_char) {
	std::u8string utf8_char;

	switch (utf8_utf32_utility::utf32_char_utf8_code_point_len(utf32_char)) {
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
		default:
			return u8"";
	}

	return utf8_char;
}

std::u32string utf8_utf32_utility::utf8_str_to_utf32(const std::u8string &utf8_str) {
	std::u32string utf32_str;

	int i = 0;

	while (utf8_str[i]) {
		size_t utf8_code_point_len = utf8_utf32_utility::utf8_byte_utf8_code_point_len(utf8_str[i]);

		if (!utf8_code_point_len) {
			return U"";
		}

		utf32_str += utf8_utf32_utility::utf8_char_to_utf32(utf8_str.substr(i));
		i += utf8_code_point_len;
	}

	return utf32_str;
}

std::u8string utf8_utf32_utility::utf32_str_to_utf8(const std::u32string &utf32_str) {
	std::u8string utf8_str;

	for (int i = 0; utf32_str[i]; i++) {
		std::u8string utf8_char = utf8_utf32_utility::utf32_char_to_utf8(utf32_str[i]);

		switch (utf8_utf32_utility::utf32_char_utf8_code_point_len(utf32_str[i])) {
			case 1:
				utf8_str += utf8_char[0];
				break;
			case 2:
				utf8_str += utf8_char[0];
				utf8_str += utf8_char[1];

				break;
			case 3:
				utf8_str += utf8_char[0];
				utf8_str += utf8_char[1];
				utf8_str += utf8_char[2];

				break;
			case 4:
				utf8_str += utf8_char[0];
				utf8_str += utf8_char[1];
				utf8_str += utf8_char[2];
				utf8_str += utf8_char[3];

				break;
			default:
				return u8"";
		}
	}

	return utf8_str;
}
