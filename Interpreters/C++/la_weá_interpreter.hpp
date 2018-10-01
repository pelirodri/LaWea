//
// Copyright © 2018 Rodrigo Pelissier. All rights reserved.
//
// This file is part of La Weá Interpreter (C++)
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

#include <vector>
#include <string>

/**
 * The class with all the La Weá interpreting behavior and properties.
 */
class la_weá_interpreter {
	public:
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
		static const std::vector<std::u32string> command_names;

		/**
		 * All the characters a command may be composed of.
		 */
		static const std::u32string valid_chars;		

		/**
		 * Keeps track of the length of loop starting commands.
		 */
		int loop_starts_length;

		/**
		 * Keeps track of the length of loop ending commands.
		 */
		int loop_ends_length;

		/**
		 * The starting point for interpreting the code.
		 * @param file_path the path to the file with the code
		 * @note The file must have the .lw extension.
		 */
		void interpret(const char *);

		/**
		 * A utility function that retrieves the code.
		 * @param file_path the path to the file with the code
		 * @return The code, encoded in UTF-32
		 */
		std::u32string get_code(const char *);

		/**
		 * Checks the validity of the code and retrieves the commands.
		 * @param code the code to parse
		 * @return The commands found
		 */
		std::vector<command_t> parse_code(const std::u32string &);

		/**
		 * Gets command_t from name and performs some validation.
		 * @param cmd_name the name of the command
		 * @param cmd_idx the index of the command
		 * @param row the row the command was found at
		 * @param col the column the command was found at
		 * @return The command if found
		 */
		command_t parse_command(const std::u32string &, int, long, long);

		/**
		 * Runs the code by interpreting the commands.
		 * @param commands the commands to run
		 */
		void run_commands(const std::vector<command_t> &);

		/**
		 * A utility function to find the appropriate loop starting command.
		 * @param commands the array of commands to search in
		 * @param i the index to start searching at
		 * @return The index of the loop starting command or -1 if not found
		 */
		int find_loop_start(const std::vector<command_t> &, int);

		/**
		 * A utility function to find the appropriate loop ending command.
		 * @param commands the array of commands to search in
		 * @param i the index to start searching at
		 * @return The index of the loop ending command or -1 if not found
		 */
		int find_loop_end(const std::vector<command_t> &, int);

		/**
		 * A utility function that prints an error message and exits the program abnormally.
		 * @param err_msg the error message to print
		 */
		void exit_interpreter(const std::string &);
};
