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

#include "exceptions.hpp"
#include "utf_utils.hpp"

la_weá::invalid_command_exception::invalid_command_exception(const std::string &cmd_name, long line, long col) :
	exception(get_err_msg(cmd_name, line, col)) {}

inline std::string la_weá::invalid_command_exception::get_err_msg(const std::string &cmd_name, long line, long col) {
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

la_weá::unmatched_tula_exception::unmatched_tula_exception(long line, long col) : exception(get_err_msg(line, col)) {}

inline std::string la_weá::unmatched_tula_exception::get_err_msg(long line, long col) {
	return std::string (
		"Se encontró una tula sin su respectiva pichula en la línea " +
		std::to_string(line) +
		", columna " +
		std::to_string(col)
	);
}

la_weá::misplaced_pico_exception::misplaced_pico_exception(long line, long col) : exception(get_err_msg(line, col)) {}

inline std::string la_weá::misplaced_pico_exception::get_err_msg(long line, long col) {
	return std::string (
		"No debiste meter ese pico en la línea " +
		std::to_string(line) +
		", columna " +
		std::to_string(col)
	);
}

la_weá::invalid_character_exception::invalid_character_exception(char32_t character, long line, long col) :
	exception(get_err_msg(character, line, col)) {}

inline std::string la_weá::invalid_character_exception::get_err_msg(char32_t character, long line, long col) {
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

la_weá::too_long_command_exception::too_long_command_exception(long line, long col) :
	exception(get_err_msg(line, col)) {}

inline std::string la_weá::too_long_command_exception::get_err_msg(long line, long col) {
	return std::string (
		"¿Vos creís que yo soy weón, CTM? Te gustan largos, parece (línea: " +
		std::to_string(line) +
		", columna: " +
		std::to_string(col) +
		")"
	);
}

la_weá::unmatched_pichulas_exception::unmatched_pichulas_exception() :
	exception("O te sobran pichulas o te faltan tulas") {}

la_weá::out_of_bounds_exception::out_of_bounds_exception() : exception ("Te saliste pa’ la izquierda, aweona’o") {}
