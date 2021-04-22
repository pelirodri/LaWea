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

#ifndef INTERPRETER_HPP
#define INTERPRETER_HPP
	#include <vector>
	#include <string>
	#include <memory>

	namespace la_weá {
		class expression;

		/// An interpreter for La Weá.
		class interpreter {
			public:
				interpreter();
				~interpreter();

				/**
				 * The entry point for interpreting the code.
				 * @param file_path the path to the file with the code
				 * @note The file must have the .lw extension.
				 */
				void interpret(const char *file_path);

				/**
				 * Retrieves the interpretable expressions made from the code.
				 * @param code the code to parse
				 * @return A composite expression
				 */
				std::unique_ptr<expression> parse_code(const std::u32string &code);

				/**
				 * Interprets an expression.
				 * @param the expression to run
				 */
				void run(std::unique_ptr<expression> expression);

				/**
				 * A utility function that prints an error message and exits the program abnormally.
				 * @param err_msg the error message to print
				 */
				void exit_with_error_message(const std::string &err_msg) const;
			private:
				std::u32string get_code(const char *) const;
				void file_open_error_exit() const;

				void print_error_in_red(const std::string &) const;
		};
	}
#endif
