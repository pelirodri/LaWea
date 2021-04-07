//
// Copyright © 2021 Rodrigo Pelissier. All rights reserved.
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
#include "la_weá_context.hpp"
#include "utf_utils.hpp"

#include <iostream>

void maricón_expression::interpret(la_weá_context *ctx) {
	ctx->decrease_cell();
	ctx->increase_expr_idx();
}

void maraco_expression::interpret(la_weá_context *ctx) {
	ctx->decrease_cell(2);
	ctx->increase_expr_idx();
}

void weón_expression::interpret(la_weá_context *ctx) {
	ctx->increase_cell();
	ctx->increase_expr_idx();
}

void aweonao_expression::interpret(la_weá_context *ctx) {
	ctx->increase_cell(2);
	ctx->increase_expr_idx();
}

void maraca_expression::interpret(la_weá_context *ctx) {
	ctx->reset_cell_value();
	ctx->increase_expr_idx();
}

void chucha_expression::interpret(la_weá_context *ctx) {
	ctx->shift_cell_left();
	ctx->increase_expr_idx();
}

void puta_expression::interpret(la_weá_context *ctx) {
	ctx->shift_cell_right();
	ctx->increase_expr_idx();
}

pichula_expression::pichula_expression(long tula_idx) : tula_idx(tula_idx) {}

void pichula_expression::interpret(la_weá_context *ctx) {
	if (ctx->get_cell_value() == 0) {
		ctx->set_expr_idx(tula_idx + 1);
	} else {
		ctx->increase_expr_idx();
	}
}

tula_expression::tula_expression(long pichula_idx) : pichula_idx(pichula_idx) {}

void tula_expression::interpret(la_weá_context *ctx) {
	if (ctx->get_cell_value() != 0) {
		ctx->set_expr_idx(pichula_idx + 1);
	} else {
		ctx->increase_expr_idx();
	}
}

pico_expression::pico_expression(long tula_idx) : tula_idx(tula_idx) {}

void pico_expression::interpret(la_weá_context *ctx) {
	ctx->set_expr_idx(tula_idx + 1);
}

void ctm_expression::interpret(la_weá_context *ctx) {
	int64_t cell_value = ctx->get_cell_value();

	if (cell_value >= 0x0 && cell_value <= 0x10FFFF) {
		#if !defined(_WIN64)
			std::cout << (const char *)utf_utils::utf32_str_to_utf8(std::u32string (1, cell_value)).c_str();
		#else
			const uint_least16_t *utf16_char = utf32_char_to_utf16(cell_value);
	    	WriteConsoleW(GetStdHandle(STD_OUTPUT_HANDLE), utf16_char, utf16_strlen(utf16_char), NULL, NULL);
		#endif
	} else {
		std::cout << "\uFFFD";
	}

	ctx->increase_expr_idx();
}

#if !defined(_WIN64)
	void quéweá_expression::interpret(la_weá_context *ctx) {
		std::string utf8_input = "";
		std::getline(std::cin, utf8_input);

		ctx->set_cell_value((int64_t)utf_utils::utf8_char_to_utf32(std::u8string((const char8_t *)utf8_input.data())));

		ctx->increase_expr_idx();
	}
#else
	void quéweá_expression::interpret(la_weá_context *ctx) {
		WCHAR utf16_input[5] = {L'\0'};

        ULONG read_char_count;
        ReadConsoleW(GetStdHandle(STD_INPUT_HANDLE), utf16_input, sizeof(utf16_input) / 2, &read_char_count, NULL);

        if (utf16_input[read_char_count - 1] == L'\n') {
            utf16_input[wcscspn(utf16_input, L"\r")] = L'\0';
            ctx->set_cell_value(utf16_char_to_utf32(utf16_input));
        } else {
            while (getchar() != '\n') {}
    		ctx->set_cell_value(0);
        }

        ctx->increase_expr_idx();
	}	
#endif

void chúpala_expression::interpret(la_weá_context *ctx) {
	std::cout << ctx->get_cell_value();
	ctx->increase_expr_idx();
}

void brígido_expression::interpret(la_weá_context *ctx) {
	std::string num_input = get_num_input();

	if (!is_valid_num_input(num_input)) {
		num_input.clear();
	}

    try {
    	ctx->set_cell_value((int64_t)std::stoll(num_input, nullptr, 10));
    } catch (...) {
    	ctx->set_cell_value((int64_t)0);
    }

    ctx->increase_expr_idx();
}

std::string brígido_expression::get_num_input() const {
	std::string num_input = "";
	std::getline(std::cin, num_input);

	if (num_input.back() == '\r') {
		num_input.pop_back();
	}

	return num_input;
}

bool brígido_expression::is_valid_num_input(const std::string &num_input) const {
	if (num_input.length() > 20) {
		return false;
	}

	for (int i = 0; i < num_input.length(); i++) {
        if (!std::isdigit(num_input[i]) && !(i == 0 && num_input[i] == '-')) {
            return false;
        }
    }

    return true;
}

void perkin_expression::interpret(la_weá_context *ctx) {
	ctx->copy_cell_value();
	ctx->increase_expr_idx();
}

void mierda_expression::interpret(la_weá_context *ctx) {
	std::exit(EXIT_SUCCESS);
}
