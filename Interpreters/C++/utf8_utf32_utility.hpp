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

#ifndef UTF8_UTF32_UTILITY_HPP
#define UTF8_UTF32_UTILITY_HPP

#include <string>

class utf8_utf32_utility {
	public:
		static size_t utf8_byte_utf8_code_point_len(char8_t);
		static size_t utf32_char_utf8_code_point_len(char32_t);

		static char32_t utf8_char_to_utf32(const std::u8string &);
		static std::u8string utf32_char_to_utf8(char32_t);
		static std::u32string utf8_str_to_utf32(const std::u8string &);
		static std::u8string utf32_str_to_utf8(const std::u32string &);
};

#endif
