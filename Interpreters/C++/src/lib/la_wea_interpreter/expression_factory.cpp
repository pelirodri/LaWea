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

#include "expression_factory.hpp"
#include "expressions.hpp"

la_weá::expression *la_weá::expression_factory::create_expression_from_cmd_at_idx(
	std::vector<command> commands,
	long cmd_idx
) {
	switch (commands[cmd_idx]) {
		case maricón:
			return new maricón_expression;
		case maraco:
			return new maraco_expression;
		case weón:
			return new weón_expression;
		case aweonao:
			return new aweonao_expression;
		case maraca:
			return new maraca_expression;
		case chucha:
			return new chucha_expression;
		case puta:
			return new puta_expression;
		case pichula:
			return new pichula_expression (expression_factory::find_loop_end(commands, cmd_idx));
		case tula:
			return new tula_expression (expression_factory::find_loop_start(commands, cmd_idx));
		case pico:
			return new pico_expression (expression_factory::find_loop_end(commands, cmd_idx));
		case ctm:
			return new ctm_expression;
		case quéweá:
			return new quéweá_expression;
		case chúpala:
			return new chúpala_expression;
		case brígido:
			return new brígido_expression;
		case perkin:
			return new perkin_expression;
		case mierda:
			return new mierda_expression;
	}
}

long la_weá::expression_factory::find_loop_start(std::vector<command> commands, long cmd_idx) {
	for (long i = cmd_idx - 1, loop_level = 1; i >= 0; i--) [[likely]] {
		if (commands[i] == tula) {
			loop_level++;
		} else if (commands[i] == pichula) {
			loop_level--;
		}

		if (!loop_level) [[likely]] {
			return i;
		}
	}

	return -1;
}

long la_weá::expression_factory::find_loop_end(std::vector<command> commands, long cmd_idx) {
	for (long i = cmd_idx + 1, loop_level = 1; i < commands.size(); i++) [[likely]] {
		if (commands[i] == pichula) {
			loop_level++;
		} else if (commands[i] == tula) {
			loop_level--;
		}

		if (!loop_level) [[likely]] {
			return i;
		}
	}

	return -1;
}
