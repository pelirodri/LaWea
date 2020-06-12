#ifndef UTF8_UTF32_H
#define UTF8_UTF32_H

#include <stdlib.h>
#include <uchar.h>

size_t utf8_byte_utf8_code_point_len(unsigned char);
size_t utf32_char_utf8_code_point_len(char32_t);

size_t utf8_strlen(const unsigned char *);
size_t utf32_strlen(const char32_t *);
size_t utf32_str_utf8_strlen(const char32_t *);


int utf32_strcmp(const char32_t *, const char32_t *);
char32_t *utf32_strchr(const char32_t *, char32_t);

char32_t utf8_char_to_utf32(const unsigned char *);
unsigned char *utf32_char_to_utf8(char32_t);
char32_t *utf8_str_to_utf32(const unsigned char *);
unsigned char *utf32_str_to_utf8(const char32_t *);

#endif
