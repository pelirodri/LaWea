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

#include "code_parser.hpp"
#include "expression.hpp"
#include "program_expression.hpp"
#include "expression_factory.hpp"
#include "exceptions.hpp"
#include "utfutils/utf_utils.hpp"

#include <experimental/memory_resource>

const std::vector<std::u32string> la_weá::code_parser::cmd_names = {
	U"maricón",
	U"maraco",
	U"weón",
	U"aweonao",
	U"maraca",
	U"chucha",
	U"puta",
	U"pichula",
	U"tula",
	U"pico",
	U"ctm",
	U"quéweá",
	U"chúpala",
	U"brígido",
	U"perkin",
	U"mierda"
};

std::unique_ptr<la_weá::expression> la_weá::code_parser::parse() {	
	parse_code();
	check_loops_balance();

	return std::make_unique<program_expression>(get_expressions_from_commands());
}

void la_weá::code_parser::parse_code() {
	for (long i = 0; i <= code.length(); i++) [[likely]] {
		parse_char_at_idx(i);
		parsed_char_at_idx(i);
	}
}

void la_weá::code_parser::parse_char_at_idx(long code_idx) {
	if (code[code_idx] == U'#') [[unlikely]] {
		is_mid_comment = true;
	}

	if (is_cmd_boundary(code_idx)) {
		handle_potential_cmd();
	} else if (!is_mid_comment) {
		add_char_at_idx_to_cmd_name(code_idx);
	}
}

void la_weá::code_parser::handle_potential_cmd() {
	if (!cmd_name_buffer.empty()) {
		auto cmd = get_cmd_from_name();

		handle_loop_balancing(cmd);
		commands.push_back(cmd);

		cmd_name_buffer.clear();
	}
}

la_weá::command la_weá::code_parser::get_cmd_from_name() const {
    for (int cmd = 0; cmd < code_parser::cmd_names.size(); cmd++) [[likely]] {
        if (cmd_name_buffer == cmd_names[cmd]) {
            return static_cast<command>(cmd);
        }
    }

    throw invalid_command_exception(
    	std::string((const char *)utf_utils::utf32_str_to_utf8(cmd_name_buffer).data()),
    	line,
    	col - cmd_name_buffer.length()
    );
}

void la_weá::code_parser::handle_loop_balancing(command cmd) {
    if (cmd == pichula) {
        handle_pichula_cmd();  
    } else if (cmd == tula) {
        handle_tula_cmd();
    } else if (cmd == pico) {
        handle_pico_cmd();
    }
}

void la_weá::code_parser::handle_tula_cmd() {
	if (loop_close_commands_count == loop_open_commands_count) [[unlikely]] {
		throw unmatched_tula_exception (line, col - std::u32string(U"tula").length());
    }

    loop_close_commands_count++;
}

void la_weá::code_parser::handle_pico_cmd() const {
	if (loop_open_commands_count == loop_close_commands_count) [[unlikely]] {
		throw misplaced_pico_exception (line, col - std::u32string(U"pico").length());
	}
}

void la_weá::code_parser::add_char_at_idx_to_cmd_name(long code_idx) {
	validate_cmd_char_at_idx(code_idx);
	validate_cmd_name_length();

	cmd_name_buffer += code[code_idx];
}

void la_weá::code_parser::validate_cmd_char_at_idx(long code_idx) const {
	if (std::u32string (U"abcdeghiklmnopqrtuwáéíóú").find(code[code_idx]) == std::u32string::npos) [[unlikely]] {
		throw invalid_character_exception (code[code_idx], line, col);
	}
}

void la_weá::code_parser::validate_cmd_name_length() const {
	if (cmd_name_buffer.length() == 7) [[unlikely]] {
		throw too_long_command_exception (line, col - cmd_name_buffer.length());
	}
}

void la_weá::code_parser::parsed_char_at_idx(long code_idx) {
	if (code[code_idx] == U'\n') {
		line++;
		col = 1;

		is_mid_comment = false;
	} else {
		col++;
	}
}

void la_weá::code_parser::check_loops_balance() const {
    if (loop_open_commands_count != loop_close_commands_count) [[unlikely]] {
		throw unmatched_pichulas_exception ();
	}
}

std::vector<std::unique_ptr<la_weá::expression>> la_weá::code_parser::get_expressions_from_commands() const {
	std::vector<std::unique_ptr<expression>> expressions;

	for (long i = 0; i < commands.size(); i++) [[likely]] {
		expressions.push_back(expression_factory::create_expression_from_cmd_at_idx(commands, i));
	}

	return expressions;
}
