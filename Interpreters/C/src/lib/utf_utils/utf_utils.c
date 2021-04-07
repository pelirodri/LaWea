//
// Copyright © 2021 Rodrigo Pelissier. All rights reserved.
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

#include "utf_utils.h"

#include <string.h>

size_t utf8_byte_utf8_code_point_len(unsigned char utf8_byte) {
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

size_t utf16_surrogate_utf16_code_point_len(uint_least16_t utf16_surrogate) {
	if (utf16_surrogate <= 0xD7FF || utf16_surrogate >= 0xE000) {
		return 1;
	} else if (utf16_surrogate >= 0xD800 && utf16_surrogate <= 0xDBFF) {
		return 2;
	} else {
		return 0;
	}
}

inline size_t utf8_char_utf16_code_point_len(const unsigned char *utf8_char) {
	return utf16_surrogate_utf16_code_point_len(utf8_char_to_utf16(utf8_char)[0]);
}

size_t utf16_char_utf8_code_point_len(const uint_least16_t *utf16_char) {
	if (utf16_strlen(utf16_char) != 1) {
		return 0;
	}

	return utf32_char_utf8_code_point_len(utf16_char_to_utf32(utf16_char));
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

size_t utf32_char_utf16_code_point_len(uint_least32_t utf32_char) {
	if (utf32_char < 0x10000) {
		return 1;
	} else if (utf32_char <= 0x10FFFF) {
		return 2;
	} else {
		return 0;
	}
}

inline size_t utf8_str_utf16_size(const unsigned char *utf8_str) {
	return utf32_str_utf16_size(utf8_str_to_utf32(utf8_str));
}

inline size_t utf16_str_utf8_size(const uint_least16_t *utf16_str) {
	return utf32_str_utf8_size(utf16_str_to_utf32(utf16_str));
}

size_t utf32_str_utf8_size(const uint_least32_t *utf32_str) {
	size_t str_size = 0;

	for (long i = 0; utf32_str[i]; i++) {
		str_size += utf32_char_utf8_code_point_len(utf32_str[i]);
	}

	return str_size;
}

size_t utf32_str_utf16_size(const uint_least32_t *utf32_str) {
	size_t str_size = 0;

	for (long i = 0; i < utf32_str[i]; i++) {
		str_size += utf32_char_utf16_code_point_len(utf32_str[i]);
	}

	return str_size;
}

size_t utf8_strlen(const unsigned char *utf8_str) {
	size_t str_len = 0;

	for (long i = 0; utf8_str[i];) {
		size_t utf8_code_point_len = utf8_byte_utf8_code_point_len(utf8_str[i]);

		if (utf8_code_point_len == 0) {
			return 0;
		}

		str_len++;
		i += utf8_code_point_len;
	}

	return str_len;
}

size_t utf16_strlen(const uint_least16_t *utf16_str) {
	size_t str_len = 0;

	for (long i = 0; utf16_str[i];) {
		size_t utf16_code_point_len = utf16_surrogate_utf16_code_point_len(utf16_str[i]);

		if (utf16_code_point_len == 0) {
			return 0;
		}

		str_len++;
		i += utf16_code_point_len;
	}

	return str_len;
}

size_t utf32_strlen(const uint_least32_t *utf32_str) {
	size_t str_len = 0;

	for (long i = 0; utf32_str[i]; i++) {
		str_len++;
	}

	return str_len;
}

inline int utf8_strcmp(const unsigned char *utf8_str1, const unsigned char *utf8_str2) {
	return utf32_strcmp(utf8_str_to_utf32(utf8_str1), utf8_str_to_utf32(utf8_str2));
}

inline int utf16_strcmp(const uint_least16_t *utf16_str1, const uint_least16_t *utf16_str2) {
	return utf32_strcmp(utf16_str_to_utf32(utf16_str1), utf16_str_to_utf32(utf16_str2));
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

unsigned char *utf8_strchr(const unsigned char *utf8_str, const unsigned char *utf8_char) {
	if (utf8_strlen(utf8_char) != 1) {
		return NULL;
	}

	size_t utf8_char_code_point_len = utf8_byte_utf8_code_point_len(utf8_char[0]);

	if (utf8_char_code_point_len == 0) {
		return NULL;
	}

	for (long i = 0; utf8_str[i];) {
		size_t utf8_str_code_point_len = utf8_byte_utf8_code_point_len(utf8_str[i]);

		if (utf8_str_code_point_len == 0) {
			return NULL;
		}

		unsigned char tmp_str[5] = {'\0'};
		memcpy(tmp_str, &utf8_str[i], utf8_char_code_point_len);

		if (utf8_strcmp(utf8_char, tmp_str) == 0) {
			return (unsigned char *)&utf8_str[i];
		}

		i += utf8_str_code_point_len;
	}

	return NULL;
}

uint_least16_t *utf16_strchr(const uint_least16_t *utf16_str, const uint_least16_t *utf16_char) {
	if (utf16_strlen(utf16_char) != 1) {
		return NULL;
	}

	size_t utf16_char_code_point_len = utf16_surrogate_utf16_code_point_len(utf16_char[0]);

	if (utf16_char_code_point_len == 0) {
		return NULL;
	}

	for (long i = 0; utf16_str[i];) {
		size_t utf16_str_code_point_len = utf16_surrogate_utf16_code_point_len(utf16_str[i]);

		if (utf16_str_code_point_len == 0) {
			return NULL;
		}

		uint_least16_t tmp_str[3] = {u'\0'};
		memcpy(tmp_str, &utf16_str[i], utf16_char_code_point_len);

		if (utf16_strcmp(utf16_char, tmp_str) == 0) {
			return (uint_least16_t *)&utf16_str[i];
		}

		i += utf16_str_code_point_len;
	}

	return NULL;
}

uint_least32_t *utf32_strchr(const uint_least32_t *utf32_str, uint_least32_t utf32_char) {
	while (*utf32_str != utf32_char) {
		if (!*utf32_str++) {
			return NULL;
		}
	}

	return (uint_least32_t *)utf32_str;
}

inline uint_least16_t *utf8_char_to_utf16(const unsigned char *utf8_char) {
	return utf32_char_to_utf16(utf8_char_to_utf32(utf8_char));
}

uint_least32_t utf8_char_to_utf32(const unsigned char *utf8_char) {
	if (utf8_strlen(utf8_char) != 1) {
		return 0;
	}

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

inline unsigned char *utf16_char_to_utf8(const uint_least16_t *utf16_char) {
	return utf32_char_to_utf8(utf16_char_to_utf32(utf16_char));
}

uint_least32_t utf16_char_to_utf32(const uint_least16_t *utf16_char) {
	if (utf16_strlen(utf16_char) != 1) {
		return 0;
	}

	switch (utf16_surrogate_utf16_code_point_len(utf16_char[0])) {
		case 1:
			return utf16_char[0];
		case 2: {
			uint_least16_t tmp_char[3] = {u'\0'};
			memcpy(tmp_char, utf16_char, 2);

			tmp_char[0] = (tmp_char[0] - 0xD800) * 0x400;
            tmp_char[1] -= 0xDC00;

            return (tmp_char[0] + tmp_char[1]) + 0x10000;
        }
		default:
			return u'\0';
	}
}

unsigned char *utf32_char_to_utf8(uint_least32_t utf32_char) {
	size_t utf8_code_point_len = utf32_char_utf8_code_point_len(utf32_char);

	if (utf8_code_point_len == 0) {
		return NULL;
	}

	unsigned char *utf8_char = (unsigned char *)malloc((utf8_code_point_len + 1) * sizeof(unsigned char));

	if (!utf8_char) {
		return NULL;
	}

	int i = 0;

	switch (utf8_code_point_len) {
		case 1:
			utf8_char[i++] = utf32_char;
			break;
		case 2:
			utf8_char[i++] = 0xC0 | (utf32_char >> 6);
			utf8_char[i++] = 0x80 | (utf32_char & 0x3F);

			break;
		case 3:
			utf8_char[i++] = 0xE0 | (utf32_char >> 12);
			utf8_char[i++] = 0x80 | ((utf32_char >> 6) & 0x3F);
			utf8_char[i++] = 0x80 | (utf32_char & 0x3F);

			break;
		case 4:
			utf8_char[i++] = 0xF0 | (utf32_char >> 18);
			utf8_char[i++] = 0x80 | ((utf32_char >> 12) & 0x3F);
			utf8_char[i++] = 0x80 | ((utf32_char >> 6) & 0x3F);
			utf8_char[i++] = 0x80 | (utf32_char & 0x3F);

			break;
	}

	utf8_char[i] = '\0';

	return utf8_char;
}

uint_least16_t *utf32_char_to_utf16(uint_least32_t utf32_char) {
	size_t utf16_code_point_len = utf32_char_utf16_code_point_len(utf32_char);

	if (utf16_code_point_len == 0) {
		return NULL;
	}

	uint_least16_t *utf16_char = (uint_least16_t *)malloc((utf16_code_point_len + 1) * sizeof(uint_least16_t));

	if (!utf16_char) {
		return NULL;
	}

	int i = 0;

	switch (utf16_code_point_len) {
		case 1:
			utf16_char[i++] = utf32_char;
			break;
		case 2: {
			uint_least32_t tmp_char = utf32_char - 0x10000;

	        utf16_char[i++] = (tmp_char >> 10) + 0xD800;
	        utf16_char[i++] = (tmp_char & 0x3FF) + 0xDC00;

	        break;
	    }
	}

	utf16_char[i] = u'\0';

	return utf16_char;
}

inline uint_least16_t *utf8_str_to_utf16(const unsigned char *utf8_str) {
	return utf32_str_to_utf16(utf8_str_to_utf32(utf8_str));
}

uint_least32_t *utf8_str_to_utf32(const unsigned char *utf8_str) {
	uint_least32_t *utf32_str = (uint_least32_t *)malloc((utf8_strlen(utf8_str) + 1) * sizeof(uint_least32_t));

	if (!utf32_str) {
		return NULL;
	}

	long i = 0, j = 0;

	while (utf8_str[i]) {
		size_t utf8_code_point_len = utf8_byte_utf8_code_point_len(utf8_str[i]);

		if (utf8_code_point_len == 0) {
			return NULL;
		}

		unsigned char utf8_char[5] = {'\0'};
		memcpy(utf8_char, &utf8_str[i], utf8_code_point_len);

		utf32_str[j++] = utf8_char_to_utf32(utf8_char);
		i += utf8_code_point_len;
	}

	utf32_str[j] = U'\0';

	return utf32_str;
}

inline unsigned char *utf16_str_to_utf8(const uint_least16_t *utf16_str) {
	return utf32_str_to_utf8(utf16_str_to_utf32(utf16_str));
}

uint_least32_t *utf16_str_to_utf32(const uint_least16_t *utf16_str) {
	uint_least32_t *utf32_str = (uint_least32_t *)malloc((utf16_strlen(utf16_str) + 1) * sizeof(uint_least32_t));

	if (!utf32_str) {
		return NULL;
	}

	long i = 0;

	for (long j = 0; utf16_str[j];) {
		size_t utf16_code_point_len = utf16_surrogate_utf16_code_point_len(utf16_str[j]);

		if (utf16_code_point_len == 0) {
			return NULL;
		}

		uint_least16_t utf16_char[3] = {u'\0'};
		memcpy(utf16_char, &utf16_str[i], utf16_code_point_len);

		utf32_str[i++] = utf16_char_to_utf32(utf16_char);
		j += utf16_code_point_len;
	}

	utf32_str[i] = U'\0';

	return utf32_str;
}

unsigned char *utf32_str_to_utf8(const uint_least32_t *utf32_str) {
	unsigned char *utf8_str = (unsigned char *)malloc((utf32_str_utf8_size(utf32_str) + 1) * sizeof(unsigned char));

	if (!utf8_str) {
		return NULL;
	}

	long i = 0;

	for (long j = 0; utf32_str[j]; j++) {
		unsigned char *utf8_char = utf32_char_to_utf8(utf32_str[j]);
		size_t utf8_code_point_len = utf32_char_utf8_code_point_len(utf32_str[j]);

		if (utf8_code_point_len == 0) {
			return NULL;
		}

		for (int k = 0; k < utf8_code_point_len; k++) {
			utf8_str[i++] = utf8_char[k];
		}

		free(utf8_char);
	}

	utf8_str[i] = '\0';

	return utf8_str;
}

uint_least16_t *utf32_str_to_utf16(const uint_least32_t *utf32_str) {
	uint_least16_t *utf16_str = (uint_least16_t *)malloc(
		(utf32_str_utf16_size(utf32_str) + 1) * sizeof(uint_least16_t)
	);

	if (!utf16_str) {
		return NULL;
	}

	long i = 0;

	for (long j = 0; utf32_str[j]; j++) {
		uint_least16_t *utf16_char = utf32_char_to_utf16(utf32_str[j]);
		size_t utf16_code_point_len = utf32_char_utf16_code_point_len(utf32_str[j]);

		if (utf16_code_point_len == 0) {
			return NULL;
		}

		for (int k = 0; k < utf16_code_point_len; k++) {
			utf16_str[i++] = utf16_char[k];
		}

		free(utf16_char);
	}

	utf16_str[i] = '\0';

	return utf16_str;
}
