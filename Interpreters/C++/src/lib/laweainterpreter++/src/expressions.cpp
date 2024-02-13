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

#include "expressions.hpp"
#include "utfutils/utf_utils.hpp"

#include <iostream>

#if defined(_WIN64)
#include <windows.h>
#endif

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
		std::u16string utf16_char = utf_utils::utf32_char_to_utf16(cell_value);
		WriteConsoleW(GetStdHandle(STD_OUTPUT_HANDLE), utf16_char.c_str(), 1, NULL, NULL);
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

	ctx.set_cell_value((int64_t)utf_utils::utf8_char_to_utf32(std::u8string((const char8_t *)utf8_input.c_str())));
	ctx.increase_expr_idx();
}
#else
void la_weá::quéweá_expression::interpret(context &ctx) {
	char16_t utf16_input_buffer[5] = {u'\0'};

	ULONG read_char_count;

	ReadConsoleW(
		GetStdHandle(STD_INPUT_HANDLE),
		utf16_input_buffer,
		sizeof(utf16_input_buffer) / sizeof(utf16_input_buffer[0]),
		&read_char_count,
		NULL
	);

	if (utf16_input_buffer[read_char_count - 1] == u'\n') [[likely]] {
		utf16_input_buffer[std::u16string(utf16_input_buffer).find(u'\r')] = u'\0';
		ctx.set_cell_value(utf_utils::utf16_char_to_utf32(utf16_input_buffer));
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
