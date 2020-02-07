//
// Copyright © 2020 Rodrigo Pelissier. All rights reserved.
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

#include "utf8_utf32.h"

size_t utf8_byte_utf8_code_point_len(uint_least8_t utf8_byte) {
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

size_t utf32_char_utf8_code_point_len(uint_least32_t utf32_char) {
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

size_t utf8_strlen(const uint_least8_t *utf8_str) {
	size_t str_len = 0;

	for (int i = 0; utf8_str[i]; i += utf8_byte_utf8_code_point_len(utf8_str[i])) {
		str_len++;
	}

	return str_len;
}

size_t utf32_strlen(const uint_least32_t *utf32_str) {
	size_t str_len = 0;

	for (int i = 0; utf32_str[i]; i++) {
		str_len++;
	}

	return str_len;
}

size_t utf32_str_utf8_strlen(const uint_least32_t *utf32_str) {
	size_t str_len = 0;

	for (int i = 0; utf32_str[i]; i++) {
		str_len += utf32_char_utf8_code_point_len(utf32_str[i]);
	}

	return str_len;
}

int utf32_strcmp(const uint_least32_t *utf32_str1, const uint_least32_t *utf32_str2) {
	while (*utf32_str1) {
		if (*utf32_str1 != *utf32_str2) {
			break;
		}

		utf32_str1++;
		utf32_str2++;
	}

	return (int)(*utf32_str1 - *utf32_str2);
}

uint_least32_t *utf32_strchr(const uint_least32_t *str, uint_least32_t c) {
	while (*str != c) {
		if (!*str++) {
			return NULL;
		}
	}

	return (uint_least32_t *)str;
}

uint_least32_t utf8_char_to_utf32(const uint_least8_t *utf8_char) {
	switch (utf8_byte_utf8_code_point_len(utf8_char[0])) {
		case 1:
			return utf8_char[0]; 
		case 2:
			return ((utf8_char[0] ^ 0xC0) << 6) | (utf8_char[1] ^ 0x80);
		case 3:
			return ((utf8_char[0] ^ 0xE0) << 12) | ((utf8_char[1] ^ 0x80) << 6) | (utf8_char[2] ^ 0x80);
		case 4: {
			uint_least32_t first_half = ((utf8_char[0] ^ 0xF0) << 18) | ((utf8_char[1] ^ 0x80) << 12);
			uint_least32_t second_half = ((utf8_char[2] ^ 0x80) << 6) | (utf8_char[3] ^ 0x80);
			
			return first_half | second_half;
		}
		default:
			return U'\0';
	}
}

uint_least8_t *utf32_char_to_utf8(uint_least32_t utf32_char) {
	size_t code_point_len = utf32_char_utf8_code_point_len(utf32_char);
	uint_least8_t *utf8_char = (uint_least8_t *)malloc((code_point_len + 1) * sizeof(uint_least8_t));

	if (!utf8_char) {
		return NULL;
	}

	int j = 0;

	switch (code_point_len) {
		case 1:
			utf8_char[j++] = utf32_char;
			break;
		case 2:
			utf8_char[j++] = 0xC0 | (utf32_char >> 6);
			utf8_char[j++] = 0x80 | (utf32_char & 0x3F);

			break;
		case 3:
			utf8_char[j++] = 0xE0 | (utf32_char >> 12);
			utf8_char[j++] = 0x80 | ((utf32_char >> 6) & 0x3F);
			utf8_char[j++] = 0x80 | (utf32_char & 0x3F);

			break;
		case 4:
			utf8_char[j++] = 0xF0 | (utf32_char >> 18);
			utf8_char[j++] = 0x80 | ((utf32_char >> 12) & 0x3F);
			utf8_char[j++] = 0x80 | ((utf32_char >> 6) & 0x3F);
			utf8_char[j++] = 0x80 | (utf32_char & 0x3F);

			break;
	}

	utf8_char[j] = '\0';

	return utf8_char;
}

uint_least32_t *utf8_str_to_utf32(const uint_least8_t *utf8_str) {
	uint_least32_t *utf32_str = (uint_least32_t *)malloc((utf8_strlen(utf8_str) + 1) * sizeof(uint_least32_t));

	if (!utf32_str) {
		return NULL;
	}

	int i = 0, j = 0;

	while (utf8_str[i]) {
		utf32_str[j++] = utf8_char_to_utf32(utf8_str + i);
		i += utf8_byte_utf8_code_point_len(utf8_str[i]);
	}

	utf32_str[j] = U'\0';

	return utf32_str;
}

uint_least8_t *utf32_str_to_utf8(const uint_least32_t *utf32_str) {
	uint_least8_t *utf8_str = (uint_least8_t *)malloc((utf32_str_utf8_strlen(utf32_str) + 1) * sizeof(uint_least8_t));

	if (!utf8_str) {
		return NULL;
	}

	int j = 0;

	for (int i = 0; utf32_str[i]; i++) {
		uint_least8_t *utf8_char = utf32_char_to_utf8(utf32_str[i]);

		switch (utf32_char_utf8_code_point_len(utf32_str[i])) {
			case 1:
				utf8_str[j++] = utf8_char[0];
				break;
			case 2:
				utf8_str[j++] = utf8_char[0];
				utf8_str[j++] = utf8_char[1];

				break;
			case 3:
				utf8_str[j++] = utf8_char[0];
				utf8_str[j++] = utf8_char[1];
				utf8_str[j++] = utf8_char[2];

				break;
			case 4:
				utf8_str[j++] = utf8_char[0];
				utf8_str[j++] = utf8_char[1];
				utf8_str[j++] = utf8_char[2];
				utf8_str[j++] = utf8_char[3];

				break;
		}

		free(utf8_char);
	}

	utf8_str[j] = '\0';

	return utf8_str;
}
