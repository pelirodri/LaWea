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

#include "exceptions.hpp"
#include "utf_utils.hpp"

la_weá::invalid_command_exception::invalid_command_exception(const std::string &cmd_name, long line, long col) :
	exception("") {
	std::string err_msg = "'" +
		cmd_name +
		"' no es un comando válido, pos, saco de weas (línea: " +
		std::to_string(line) +
		", columna: " +
		std::to_string(col) +
		")";

	static_cast<exception &>(*this) = exception (err_msg);
}

la_weá::unmatched_tula_exception::unmatched_tula_exception(long line, long col) : exception("") {
	std::string err_msg = "Se encontró una tula sin su respectiva pichula en la línea " +
		std::to_string(line) +
		", columna " +
		std::to_string(col);

	static_cast<exception &>(*this) = exception (err_msg);
}

la_weá::misplaced_pico_exception::misplaced_pico_exception(long line, long col) : exception("") {
	std::string err_msg = "No debiste meter ese pico en la línea " +
		std::to_string(line) +
		", columna " +
		std::to_string(col);

	static_cast<exception &>(*this) = exception (err_msg);
}

la_weá::invalid_character_exception::invalid_character_exception(char32_t invalid_char, long line, long col) :
	exception("") {
	std::string err_msg = "'" +
		std::string((const char *)utf_utils::utf32_char_to_utf8(invalid_char).data()) +
		"' no es parte de La Weá, tonto qlo (línea: " +
		std::to_string(line) +
		", columna: " +
		std::to_string(col) +
		")";

	static_cast<exception &>(*this) = exception (err_msg);
}

la_weá::too_long_command_exception::too_long_command_exception(long line, long col) : exception("") {
	std::string err_msg = "¿Vos creís que yo soy weón, CTM? Te gustan largos, parece (línea: " +
		std::to_string(line) +
		", columna: " +
		std::to_string(col) +
		")";

	static_cast<exception &>(*this) = exception (err_msg);
}

la_weá::unmatched_pichulas_exception::unmatched_pichulas_exception() :
	exception("O te sobran pichulas o te faltan tulas") {}

la_weá::out_of_bounds_exception::out_of_bounds_exception() : exception ("Te saliste pa’ la izquierda, aweona’o") {}
