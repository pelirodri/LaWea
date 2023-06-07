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

#ifndef EXCEPTIONS_HPP
#define EXCEPTIONS_HPP
#include "exception.hpp"
#include "utfutils/utf_utils.hpp"

namespace la_weá {
	class invalid_command_exception: public exception {
		public:
			invalid_command_exception(const std::string &cmd_name, long line, long col)
				: exception (get_err_msg(cmd_name, line, col)) {}
		private:
			std::string get_err_msg(const std::string &cmd_name, long line, long col) {
				return std::string (
					"'" +
					cmd_name +
					"' no es un comando válido, pos, saco de weas (línea: " +
					std::to_string(line) +
					", columna: " +
					std::to_string(col) +
					")"
				);
			}
	};

	class unmatched_tula_exception: public exception {
		public:
			unmatched_tula_exception(long line, long col) : exception (get_err_msg(line, col)) {}
		private:
			std::string get_err_msg(long line, long col) {
				return std::string (
					"Se encontró una tula sin su respectiva pichula en la línea " +
					std::to_string(line) +
					", columna " +
					std::to_string(col)
				);
			}
	};

	class misplaced_pico_exception: public exception {
		public:
			misplaced_pico_exception(long line, long col) : exception (get_err_msg(line, col)) {}
		private:
			std::string get_err_msg(long line, long col) {
				return std::string (
					"No debiste meter ese pico en la línea " +
					std::to_string(line) +
					", columna " +
					std::to_string(col)
				);
			}
	};

	class invalid_character_exception: public exception {
		public:
			invalid_character_exception(char32_t character, long line, long col)
				: exception (get_err_msg(character, line, col)) {}
		private:
			std::string get_err_msg(char32_t character, long line, long col) {
				return std::string (
					"'" +
					std::string((const char *)utf_utils::utf32_char_to_utf8(character).data()) +
					"' no es parte de La Weá, tonto qlo (línea: " +
					std::to_string(line) +
					", columna: " +
					std::to_string(col) +
					")"
				);
			}
	};

	class too_long_command_exception: public exception {
		public:
			too_long_command_exception(long line, long col) : exception (get_err_msg(line, col)) {};
		private:
			std::string get_err_msg(long line, long col) {
				return std::string (
					"¿Vos creís que yo soy weón, CTM? Te gustan largos, parece (línea: " +
					std::to_string(line) +
					", columna: " +
					std::to_string(col) +
					")"
				);
			}
	};

	class unmatched_pichulas_exception: public exception {
		public:
			unmatched_pichulas_exception() : exception ("O te sobran pichulas o te faltan tulas") {}
	};

	class out_of_bounds_exception: public exception {
		public:
			out_of_bounds_exception() : exception ("Te saliste pa’ la izquierda, aweona’o") {}
	};
}
#endif
