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

#ifndef INTERPRETER_HPP
#define INTERPRETER_HPP
#include <iostream>

namespace la_weá {
	class expression;

	/// An interpreter for La Weá.
	class interpreter {
		public:
			interpreter() = default;
			~interpreter() = default;

			interpreter(const interpreter &) = default;
			interpreter &operator=(const interpreter &) = default;

			interpreter(interpreter &&) noexcept = default;
			interpreter &operator=(interpreter &&) noexcept = default;

			/**
			 * The entry point for interpreting the code.
			 * @param file_path the path to the file with the code
			 * @note The file must have the '.lw' extension.
			 */
			void interpret(const std::string &file_path);

			/**
			 * Retrieves the interpretable expressions made from the code.
			 * @param code the code to parse
			 * @return A vector of expressions
			 */
			std::vector<std::unique_ptr<expression>> parse_code(const std::string &code);

			/**
			 * Interprets an expression.
			 * @param the expressions to run
			 */
			void run_expressions(const std::vector<std::unique_ptr<expression>> &expressions);

			/**
			 * A utility function that prints an error message and exits the program abnormally.
			 * @param error_msg the error message to print
			 */
			void exit_with_error_message(const std::string &error_msg) const;
		private:
			std::string get_code(const std::string &) const;
			void exit_with_file_open_error() const;
			long get_file_length_from_stream(std::ifstream &) const;

			#if !defined(_WIN64)
			void print_error_in_red(const std::string &error_msg) const {
				std::cerr << "\x1b[1;31m" << error_msg << "\x1b[0m\n";
			}
			#else
			void print_error_in_red(const std::string &) const;
			#endif
	};
}
#endif
