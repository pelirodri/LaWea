#include "exceptions.hpp"
#include "utf_utils.hpp"

invalid_command_exception::invalid_command_exception(const std::string &cmd_name, long line, long col) :
	la_weá_exception("") {
	std::string err_msg = "'" +
		cmd_name +
		"' no es un comando válido, pos, saco de weas (línea: " +
		std::to_string(line) +
		", columna: " +
		std::to_string(col) +
		")";

	static_cast<la_weá_exception &>(*this) = la_weá_exception (err_msg);
}

unmatched_tula_exception::unmatched_tula_exception(long line, long col) : la_weá_exception("") {
	std::string err_msg = "Se encontró una tula sin su respectiva pichula en la línea " +
		std::to_string(line) +
		", columna " +
		std::to_string(col);

	static_cast<la_weá_exception &>(*this) = la_weá_exception (err_msg);
}

misplaced_pico_exception::misplaced_pico_exception(long line, long col) : la_weá_exception("") {
	std::string err_msg = "No debiste meter ese pico en la línea " +
		std::to_string(line) +
		", columna " +
		std::to_string(col);

	static_cast<la_weá_exception &>(*this) = la_weá_exception (err_msg);
}

invalid_character_exception::invalid_character_exception(char32_t invalid_char, long line, long col) :
	la_weá_exception("") {
	std::string err_msg = "'" +
		std::string((const char *)utf_utils::utf32_char_to_utf8(invalid_char).data()) +
		"' no es parte de La Weá, tonto qlo (línea: " +
		std::to_string(line) +
		", columna: " +
		std::to_string(col) +
		")";

	static_cast<la_weá_exception &>(*this) = la_weá_exception (err_msg);
}

too_long_command_exception::too_long_command_exception(long line, long col) : la_weá_exception("") {
	std::string err_msg = "¿Vos creís que yo soy weón, CTM? Te gustan largos, parece (línea: " +
		std::to_string(line) +
		", columna: " +
		std::to_string(col) +
		")";

	static_cast<la_weá_exception &>(*this) = la_weá_exception (err_msg);
}

unmatched_pichulas_exception::unmatched_pichulas_exception() :
	la_weá_exception("O te sobran pichulas o te faltan tulas") {}

out_of_bounds_exception::out_of_bounds_exception() : la_weá_exception ("Te saliste pa’ la izquierda, aweona’o") {}
