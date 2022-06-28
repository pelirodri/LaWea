//
// Copyright © 2022 Rodrigo Pelissier. All rights reserved.
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

#ifndef UTF_UTILS_HPP
#define UTF_UTILS_HPP
	#include <string>

	class utf_utils {
		public:
			static size_t utf8_byte_utf8_code_point_len(char8_t);
			static size_t utf16_surrogate_utf16_code_point_len(char16_t);

			static size_t utf8_char_utf16_code_point_len(const std::u8string &);
			static size_t utf16_char_utf8_code_point_len(const std::u16string &);
			static size_t utf32_char_utf8_code_point_len(char32_t);
			static size_t utf32_char_utf16_code_point_len(char32_t);

			static size_t utf8_strlen(const std::u8string &);
			static size_t utf16_strlen(const std::u16string &);

			static std::u16string utf8_char_to_utf16(const std::u8string &);
			static char32_t utf8_char_to_utf32(const std::u8string &);
			static std::u8string utf16_char_to_utf8(const std::u16string &);
			static char32_t utf16_char_to_utf32(const std::u16string &);
			static std::u8string utf32_char_to_utf8(char32_t);
			static std::u16string utf32_char_to_utf16(char32_t);

			static std::u16string utf8_str_to_utf16(const std::u8string &);
			static std::u32string utf8_str_to_utf32(const std::u8string &);
			static std::u8string utf16_str_to_utf8(const std::u16string &);
			static std::u32string utf16_str_to_utf32(const std::u16string &);
			static std::u8string utf32_str_to_utf8(const std::u32string &);
			static std::u16string utf32_str_to_utf16(const std::u32string &);
		private:
			utf_utils();
	};
#endif
