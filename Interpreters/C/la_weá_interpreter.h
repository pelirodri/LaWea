//
// Copyright © 2020 Rodrigo Pelissier. All rights reserved.
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

#include <stdio.h>
#include <stdint.h>
#include <stdbool.h>

/// All the valid commands.
typedef enum command_t {
	/// Decrements current cell value by 1.
	maricón,

	/// Decrements current cell value by 2.
	maraco,

	/// Increments current cell value by 1.
	weón,

	/// Increments current cell value by 2.
	aweonao,

	/// Sets current cell value to 0.
	maraca,

	/// Moves back one cell.
	chucha,

	/// Moves forward one cell.
	puta,

	/// If current cell value is 0, moves the instruction pointer after the matching tula command.
	pichula,

	/// If current cell value is not 0, moves the instruction pointer after the matching pichula command.
	tula,

	/// Moves the instruction pointer after the closest tula command, regardless of the current cell value.
	pico,

	/// Prints current cell value to STDOUT as an ASCII character.
	ctm,

	/// Reads ASCII character from STDIN and stores it in the current cell.
	quéweá,

	/// Prints current cell value to STDOUT as an integer.
	chúpala,

	/// Reads integer from STDIN and stores it in the current cell.
	brígido,

	/// Copies current cell value if there is no copy; otherwise, pastes the copied value and resets the copy.
	perkin,

	/// Terminates program.
	mierda
} command_t;

/**
 * The entry point for interpreting the code.
 * @param file_path the path to the file with the code
 * @note The file must have the .lw extension.
 */
void interpret_la_weá(const char *file_path);

/**
 * Checks the validity of the code and retrieves the commands.
 * @param code the code to parse
 * @param commands_count a pointer to store the number of commands found
 * @return The commands found
 */
command_t *get_commands(const uint_least32_t *code, int *commands_count);

/**
 * Runs the code by interpreting the commands.
 * @param commands the commands to run
 * @param commands_count the number of commands to run
 */
void run_commands(const command_t *commands, int commands_count);

/**
 * A utility function that prints an error message and exits the program abnormally.
 * @param err_msg the error message to print
 */
void exit_interpreter(const char *err_msg);

#endif
