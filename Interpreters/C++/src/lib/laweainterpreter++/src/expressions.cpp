#include "expressions.hpp"
#include "utfutils/utf_utils.hpp"

#include <iostream>

void la_weá::pichula_expression::interpret(context &ctx) {
	if (ctx.get_cell_value() == 0) {
		ctx.set_expr_idx(tula_idx + 1);
	} else {
		ctx.increase_expr_idx();
	}
}

void la_weá::tula_expression::interpret(context &ctx) {
	if (ctx.get_cell_value() != 0) {
		ctx.set_expr_idx(pichula_idx + 1);
	} else {
		ctx.increase_expr_idx();
	}
}

void la_weá::ctm_expression::interpret(context &ctx) {
	int64_t cell_value = ctx.get_cell_value();

	if (cell_value >= 0x0 && cell_value <= 0x10FFFF) [[likely]] {
		#if !defined(_WIN64)
		std::cout << (const char *)utf_utils::utf32_str_to_utf8(std::u32string (1, cell_value)).c_str();
		#else
		const uint_least16_t *utf16_char = utf32_char_to_utf16(cell_value);
		WriteConsoleW(GetStdHandle(STD_OUTPUT_HANDLE), utf16_char, utf16_strlen(utf16_char), NULL, NULL);
		#endif
	} else {
		std::cout << "\uFFFD";
	}

	ctx.increase_expr_idx();
}

#if !defined(_WIN64)
void la_weá::quéweá_expression::interpret(context &ctx) {
	std::string utf8_input = "";
	std::getline(std::cin, utf8_input);

	ctx.set_cell_value((int64_t)utf_utils::utf8_char_to_utf32(std::u8string((const char8_t *)utf8_input.data())));

	ctx.increase_expr_idx();
}
#else
void la_weá::quéweá_expression::interpret(context &ctx) {
	WCHAR utf16_input[5] = {L'\0'};

	ULONG read_char_count;
	ReadConsoleW(GetStdHandle(STD_INPUT_HANDLE), utf16_input, sizeof(utf16_input) / 2, &read_char_count, NULL);

	if (utf16_input[read_char_count - 1] == L'\n') [[likely]] {
		utf16_input[wcscspn(utf16_input, L"\r")] = L'\0';
		ctx.set_cell_value(utf16_char_to_utf32(utf16_input));
	} else {
		while (getchar() != '\n') {}
		ctx.reset_cell_value();
	}

	ctx.increase_expr_idx();
}	
#endif

void la_weá::chúpala_expression::interpret(context &ctx) {
	std::cout << ctx.get_cell_value();
	ctx.increase_expr_idx();
}

void la_weá::brígido_expression::interpret(context &ctx) {
	std::string num_input = get_num_input();

	if (!is_valid_num_input(num_input)) [[unlikely]] {
		num_input.clear();
	}

    try {
    	ctx.set_cell_value((int64_t)std::stoll(num_input, nullptr, 10));
    } catch (...) {
    	ctx.reset_cell_value();
    }

    ctx.increase_expr_idx();
}

std::string la_weá::brígido_expression::get_num_input() const {
	std::string num_input = "";
	std::getline(std::cin, num_input);

	if (num_input.back() == '\r') [[unlikely]] {
		num_input.pop_back();
	}

	return num_input;
}

bool la_weá::brígido_expression::is_valid_num_input(const std::string &num_input) const {
	if (num_input.length() > 20) [[unlikely]] {
		return false;
	}

	for (int i = 0; i < num_input.length(); i++) [[likely]] {
        if (!std::isdigit(num_input[i]) && !(i == 0 && num_input[i] == '-')) [[unlikely]] {
            return false;
        }
    }

    return true;
}
