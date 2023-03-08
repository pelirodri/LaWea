//
// Copyright © 2023 Rodrigo Pelissier. All rights reserved.
//
// This file is part of La Weá Interpreter (C)
//
// La Weá Interpreter (C) is free software: you can redistribute it and/or modify
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

#ifndef UTF_UTILS_H
#define UTF_UTILS_H
	#include <stdlib.h>
	#include <uchar.h>

	size_t utf8_byte_utf8_code_point_len(unsigned char);
	size_t utf16_surrogate_utf16_code_point_len(char16_t);

	size_t utf8_char_utf16_code_point_len(const unsigned char *);
	size_t utf16_char_utf8_code_point_len(const char16_t *);
	size_t utf32_char_utf8_code_point_len(char32_t);
	size_t utf32_char_utf16_code_point_len(char32_t);

	size_t utf8_str_utf16_size(const unsigned char *);
	size_t utf16_str_utf8_size(const char16_t *);
	size_t utf32_str_utf8_size(const char32_t *);
	size_t utf32_str_utf16_size(const char32_t *);

	size_t utf8_strlen(const unsigned char *);
	size_t utf16_strlen(const char16_t *);
	size_t utf32_strlen(const char32_t *);

	int utf8_strcmp(const unsigned char *, const unsigned char *);
	int utf16_strcmp(const char16_t *, const char16_t *);
	int utf32_strcmp(const char32_t *, const char32_t *);

	unsigned char *utf8_strchr(const unsigned char *, const unsigned char *);
	char16_t *utf16_strchr(const char16_t *, const char16_t *);
	char32_t *utf32_strchr(const char32_t *, char32_t);

	char16_t *utf8_char_to_utf16(const unsigned char *);
	char32_t utf8_char_to_utf32(const unsigned char *);
	unsigned char *utf16_char_to_utf8(const char16_t *);
	char32_t utf16_char_to_utf32(const char16_t *);
	unsigned char *utf32_char_to_utf8(char32_t);
	char16_t *utf32_char_to_utf16(char32_t);

	char16_t *utf8_str_to_utf16(const unsigned char *);
	char32_t *utf8_str_to_utf32(const unsigned char *);
	unsigned char *utf16_str_to_utf8(const char16_t *);
	char32_t *utf16_str_to_utf32(const char16_t *);
	unsigned char *utf32_str_to_utf8(const char32_t *);
	char16_t *utf32_str_to_utf16(const char32_t *);
#endif
