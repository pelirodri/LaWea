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

#include "expression_factory.hpp"
#include "expressions.hpp"

la_weá_expression *expression_factory::create_expression_from_cmd_at_idx(
	std::vector<la_weá_command> commands,
	long cmd_idx
) {
	switch (commands[cmd_idx]) {
		case maricón:
			return new maricón_expression;
			break;
		case maraco:
			return new maraco_expression;
			break;
		case weón:
			return new weón_expression;
			break;
		case aweonao:
			return new aweonao_expression;
			break;
		case maraca:
			return new maraca_expression;
			break;
		case chucha:
			return new chucha_expression;
			break;
		case puta:
			return new puta_expression;
			break;
		case pichula:
			return new pichula_expression (expression_factory::find_loop_end(commands, cmd_idx));
			break;
		case tula:
			return new tula_expression (expression_factory::find_loop_start(commands, cmd_idx));
			break;
		case pico:
			return new pico_expression (expression_factory::find_loop_end(commands, cmd_idx));
			break;
		case ctm:
			return new ctm_expression;
			break;
		case quéweá:
			return new quéweá_expression;
			break;
		case chúpala:
			return new chúpala_expression;
			break;
		case brígido:
			return new brígido_expression;
			break;
		case perkin:
			return new perkin_expression;
			break;
		case mierda:
			return new mierda_expression;
			break;
	}
}

long expression_factory::find_loop_start(std::vector<la_weá_command> commands, long cmd_idx) {
	for (long i = cmd_idx - 1, loop_level = 1; i >= 0; i--) {
		if (commands[i] == tula) {
			loop_level++;
		} else if (commands[i] == pichula) {
			loop_level--;
		}

		if (!loop_level) {
			return i;
		}
	}

	return -1;
}

long expression_factory::find_loop_end(std::vector<la_weá_command> commands, long cmd_idx) {
	for (long i = cmd_idx + 1, loop_level = 1; i < commands.size(); i++) {
		if (commands[i] == pichula) {
			loop_level++;
		} else if (commands[i] == tula) {
			loop_level--;
		}

		if (!loop_level) {
			return i;
		}
	}

	return -1;
}
