//
// Copyright © 2018 Rodrigo Pelissier. All rights reserved.
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
#include <wchar.h>

/**
 * All the valid commands.
 */
typedef enum {
	maricón,
	maraco,
	weón,
	aweonao,
	maraca,
	chucha,
	puta,
	pichula,
	tula,
	pico,
	ctm,
	quéweá,
	chúpala,
	brígido,
	perkin,
	mierda
} command_t;

/**
 * The names of all valid commands.
 */
extern const int32_t command_names[16][8 * sizeof(int32_t)];

/**
 * All the characters a command may be composed of.
 */
extern const int32_t valid_chars[];

/**
 * Keeps track of the length of loop starting commands.
 */
extern int loop_starts_length;

/**
 * Keeps track of the length of loop ending commands.
 */
extern int loop_ends_length;

/**
 * The starting point for interpreting the code.
 * @param file_path the path to the file with the code
 * @note The file must have the .lw extension.
 */
void interpret_la_weá(const char *);

/**
 * A utility function that retrieves the code.
 * @param file_path the path to the file with the code
 * @param code_length a pointer to store the length of the code
 * @return The code as a wide char string
 */
int32_t *get_code(const char *, size_t *);

/**
 * Checks the validity of the code and retrieves the commands.
 * @param code the code to parse
 * @param code_length the length of the code
 * @param commands_length a pointer to store the number of commands found
 * @return The commands found
 */
command_t *parse_code(const int32_t *, size_t, int *);

/**
 * Gets command_t from name and lengths the loops.
 * @param cmd_name the name of the command
 * @param cmd_idx the index of the command
 * @param row the row the command was found at
 * @param column the column the command was found at
 * @return The command if found
 */
command_t parse_command(const int32_t *, int, long, long);

/**
 * Checks if any command can contain the character.
 * @param wc the character to check
 * @return Whether the character was valid
 */
bool validate_char(int32_t);

/**
 * Runs the code by interpreting the commands.
 * @param commands the commands to run
 * @param commands_length the number of commands to run
 */
void run_commands(const command_t *, int);

/**
 * A utility function to find the appropriate loop starting command.
 * @param commands the array of commands to search in
 * @param commands_length the number of commands in the array
 * @param i the index to start searching at
 * @return The index of the loop starting command or -1 if not found
 */
int find_loop_start(const command_t *, int, int);

/**
 * A utility function to find the appropriate loop ending command.
 * @param commands the array of commands to search in
 * @param commands_length the number of commands in the array
 * @param i the index to start searching at
 * @return The index of the loop ending command or -1 if not found
 */
int find_loop_end(const command_t *, int, int);

/**
 * A utility function that prints an error message and exits the program abnormally.
 * @param err_msg the error message to print
 */
void exit_interpreter(const char *err_msg);

#endif
