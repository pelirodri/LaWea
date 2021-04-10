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

#ifndef LA_WEÁ_INTERPRETER_H
#define LA_WEÁ_INTERPRETER_H
	#include "la_weá_command_t.h"

	#include <stdio.h>
	#include <stdint.h>
	#include <stdbool.h>

	/**
	 * The entry point for interpreting the code.
	 * @param file_path the path to the file with the code
	 * @note The file must have the .lw extension.
	 */
	void la_weá_interpret(const char *file_path);

	/**
	 * Retrieves the commands from the code.
	 * @param code the code to parse
	 */
	la_weá_command_t *la_weá_parse_code(const uint_least32_t *code);

	/**
	 * Interprets commands.
	 * @param commands to interpret
	 */
	void la_weá_run(la_weá_command_t *commands);

	/**
	 * A utility function that prints an error message and exits the program abnormally.
	 * @param err_msg the error message to print
	 */
	void la_weá_exit_with_error_message(const char *err_msg);
#endif
