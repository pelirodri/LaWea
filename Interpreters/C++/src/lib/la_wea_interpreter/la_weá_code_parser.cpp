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

#include "la_weá_code_parser.hpp"
#include "expression_factory.hpp"
#include "la_weá_program_expression.hpp"
#include "la_weá_expression.hpp"
#include "exceptions.hpp"
#include "utf_utils.hpp"

const std::vector<std::u32string> la_weá_code_parser::cmd_names = {
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

la_weá_code_parser::la_weá_code_parser(const std::u32string &code) :
	code(code), is_mid_comment(false), line(1), col(1), loop_open_commands_count(0), loop_close_commands_count(0) {}

std::unique_ptr<la_weá_expression> la_weá_code_parser::parse() {	
	parse_code();
	check_loops_balance();

	return std::make_unique<la_weá_program_expression>(get_expressions_from_commands());
}

void la_weá_code_parser::parse_code() {
	for (long i = 0; i <= code.length(); i++) {
		parse_char_at_idx(i);
	}
}

void la_weá_code_parser::parse_char_at_idx(long code_idx) {
	if (code[code_idx] == U'#') {
		is_mid_comment = true;
	}

	if (is_cmd_boundary(code_idx)) {
		handle_potential_cmd();
	} else if (!is_mid_comment) {
		add_char_at_idx_to_cmd_name(code_idx);
	}

	parsed_char_at_idx(code_idx);
}

inline bool la_weá_code_parser::is_cmd_boundary(long code_idx) const {
	return isspace(code[code_idx]) || code[code_idx] == U'#' || code_idx == code.length();
}

void la_weá_code_parser::handle_potential_cmd() {
	if (!cmd_name_buffer.empty()) {
		la_weá_command cmd = get_cmd_from_name();

		handle_loop_balancing(cmd);
		commands.push_back(cmd);

		cmd_name_buffer = U"";
	}
}

la_weá_command la_weá_code_parser::get_cmd_from_name() const {
    for (int cmd = 0; cmd < la_weá_code_parser::cmd_names.size(); cmd++) {
        if (cmd_name_buffer == cmd_names[cmd]) {
            return static_cast<la_weá_command>(cmd);
        }
    }

    throw invalid_command_exception(
    	std::string((const char *)utf_utils::utf32_str_to_utf8(cmd_name_buffer).data()),
    	line,
    	col - cmd_name_buffer.length()
    );
}

void la_weá_code_parser::handle_loop_balancing(la_weá_command cmd) {
    if (cmd == pichula) {
        handle_pichula_cmd();  
    } else if (cmd == tula) {
        handle_tula_cmd();
    } else if (cmd == pico) {
        handle_pico_cmd();
    }
}

inline void la_weá_code_parser::handle_pichula_cmd() {
	loop_open_commands_count++;
}

void la_weá_code_parser::handle_tula_cmd() {
	if (loop_close_commands_count == loop_open_commands_count) {
		throw unmatched_tula_exception (line, col - std::u32string(U"tula").length());
    }

    loop_close_commands_count++;
}

void la_weá_code_parser::handle_pico_cmd() const {
	if (loop_open_commands_count == loop_close_commands_count) {
		throw misplaced_pico_exception (line, col - std::u32string(U"pico").length());
	}
}

void la_weá_code_parser::add_char_at_idx_to_cmd_name(long code_idx) {
	validate_cmd_char_at_idx(code_idx);
	validate_cmd_name_length();

	cmd_name_buffer += code[code_idx];
}

void la_weá_code_parser::validate_cmd_char_at_idx(long code_idx) const {
	if (std::u32string (U"abcdeghiklmnopqrtuwáéíóú").find(code[code_idx]) == std::u32string::npos) {
		throw invalid_character_exception (code[code_idx], line, col);
	}
}

void la_weá_code_parser::validate_cmd_name_length() const {
	if (cmd_name_buffer.length() == 7) {
		throw too_long_command_exception (line, col - cmd_name_buffer.length());
	}
}

void la_weá_code_parser::parsed_char_at_idx(long code_idx) {
	if (code[code_idx] == U'\n') {
		line++;
		col = 1;

		is_mid_comment = false;
	} else {
		col++;
	}
}

void la_weá_code_parser::check_loops_balance() const {
    if (loop_open_commands_count != loop_close_commands_count) {
		throw unmatched_pichulas_exception ();
	}
}

std::vector<la_weá_expression *> la_weá_code_parser::get_expressions_from_commands() const {
	std::vector<la_weá_expression *> expressions;

	for (long i = 0; i < commands.size(); i++) {
		expressions.push_back(expression_factory::create_expression_from_cmd_at_idx(commands, i));
	}

	return expressions;
}
