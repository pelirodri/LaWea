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

		utf_utils() = delete;
};
#endif
