//
// Copyright © 2018 Rodrigo Pelissier. All rights reserved.
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

#include "la_weá_interpreter.hpp"

#include <iostream>
#include <fstream>
#include <codecvt>

const std::vector<std::u32string> la_weá_interpreter::command_names = {
	U"maricón",
	U"maraco",
	U"weón",
	U"aweonao",
	U"maraca",
	U"chucha",
	U"puta",
	U"pichula",
	U"tula",
	U"pico",
	U"ctm",
	U"quéweá",
	U"chúpala",
	U"brígido",
	U"perkin",
	U"mierda"
};

const std::u32string la_weá_interpreter::valid_chars = U"abcdeghiklmnopqrtuwáéíóú";

static std::wstring_convert<std::codecvt_utf8<char32_t>, char32_t> cvt;

int main(int argc, char **argv) {
	std::locale::global(std::locale(""));

	la_weá_interpreter interpreter;

	if (argc != 2) {
		interpreter.exit_interpreter(u8"Tenís q pasar un argumento, con la ruta del archivo con el código, po, aweonao qlo");
	}

	interpreter.interpret(argv[1]);

	return 0;
}

void la_weá_interpreter::interpret(const char *file_path) {
	std::u32string code = get_code(file_path);

	if (!code.length()) {
		return;
	}

	std::vector<command_t> commands = parse_code(code);
	run_commands(commands);
}

std::u32string la_weá_interpreter::get_code(const char *file_path) {
	const char *extension = strchr(file_path, '.');

	if (!extension || strcmp(extension + 1, "lw")) {
		exit_interpreter(u8"El archivo qlo tiene q tener la extensión .lw");
	}

	std::ifstream is (file_path);

	if (!is) {
		exit_interpreter(u8"No existe la weá, po, wn");
	}

	is.seekg(0, is.end);
	std::streampos code_length = is.tellg();
	is.seekg(0, is.beg);

	std::string code (code_length, ' ');
	is.read(&code[0], code_length);

	return cvt.from_bytes(code);
}

std::vector<la_weá_interpreter::command_t> la_weá_interpreter::parse_code(const std::u32string &code) {
	loop_starts_length = loop_ends_length = 0;

	std::vector<command_t> commands;
	std::u32string cmd_name = U"";

	long row = 0, col = 0;
	bool is_comment = false;

	for (long i = 0; i <= code.length(); i++) {
		if (i < code.length() && code[i] == U'#') {
			is_comment = true;
		}

		if (i == code.length() || isspace(code[i]) || code[i] == U'#') {
			if (cmd_name.length()) {
				command_t cmd = parse_command_name(cmd_name, commands.size() - 1, row, col - cmd_name.length());

				if (static_cast<int>(cmd) == -1) {
					std::string row_str = std::to_string(row), col_str = std::to_string(col - cmd_name.length());
					std::string sub_msg = u8" no es un comando válido, po, saco de weas (línea: ";

					exit_interpreter(cvt.to_bytes(cmd_name) + sub_msg + row_str + u8", columna: " + col_str + u8")");
				}

				commands.push_back(cmd);
				cmd_name = U"";
			}
		} else {
			if (!is_comment) {
				if (valid_chars.find(code[i]) == std::string::npos) {
					std::string utf8_char = cvt.to_bytes(std::u32string (1, code[i]));

					std::string row_str = std::to_string(row), col_str = std::to_string(col);
					std::string sub_msg = u8" no es parte de La Weá, tonto qlo (línea: ";

					exit_interpreter(utf8_char + sub_msg + row_str + u8", columna: " + col_str + u8")");
				}

				if (cmd_name.length() == 7) {
					std::string row_str = std::to_string(row), col_str = std::to_string(col - cmd_name.length());
					std::string sub_msg = u8"Voh creís q yo soy weón, ctm? Te gustan largos, parece (línea: ";

					exit_interpreter(sub_msg + row_str + u8", columna: " + col_str + u8")");
				}

				cmd_name += code[i];
			}
		}

		if (code[i] == U'\n') {
			row++;
			col = 0;

			is_comment = false;
		} else {
			col++;
		}
	}

	if (loop_starts_length != loop_ends_length) {
		exit_interpreter(u8"O te sobran pichulas o te faltan tulas");
	}

	return commands; 
}

la_weá_interpreter::command_t la_weá_interpreter::parse_command_name(const std::u32string &cmd_name, int cmd_idx, long row, long col) {
	for (int i = 0; i < command_names.size(); i++) {
		if (cmd_name == command_names[i]) {
			if (cmd_name == U"pichula") {
				loop_starts_length++;
			} else if (cmd_name == U"tula") {
				if (loop_ends_length == loop_starts_length) {
					std::string row_str = std::to_string(row), col_str = std::to_string(col);
					std::string sub_msg = u8"Se encontró una tula sin su respectiva pichula en la línea: ";

					exit_interpreter(sub_msg + row_str + u8", columna: " + col_str);
				}

				loop_ends_length++;
			} else if (cmd_name == U"pico") {
				if (loop_starts_length == loop_ends_length) {
					std::string row_str = std::to_string(row), col_str = std::to_string(col);
					exit_interpreter(u8"No debiste meter ese pico en la línea: " + row_str + u8", columna: " + col_str);
				}
			}

			return static_cast<command_t>(i);
		}
	}

	return static_cast<command_t>(-1);
}

void la_weá_interpreter::run_commands(const std::vector<command_t> &commands) {
	std::vector<char32_t> cells (8);
	std::vector<char32_t>::iterator cur_cell = cells.begin();

	bool copy_set = false;
	char32_t cell_value_copy;

	std::string char_input;

	for (int i = 0; i < commands.size(); i++) {
		switch (commands[i]) {
			case maricón:
				(*cur_cell)--;
				break;
			case maraco:
				*cur_cell -= 2;
				break;
			case weón:
				(*cur_cell)++;
				break;
			case aweonao:
				*cur_cell += 2;
				break;
			case maraca:
				*cur_cell = 0;
				break;
			case chucha:
				if (cur_cell == cells.begin()) {
					exit_interpreter(u8"Te saliste pa la izquierda, aweonao");
				}

				--cur_cell;

				break;
			case puta:
				if (cur_cell == cells.end() - 1) {
					int cell_diff = cur_cell - cells.begin();
					cells.resize(cells.capacity() * 2);
					cur_cell = cells.begin() + cell_diff;
				}

				++cur_cell;

				break;
			case pichula:
				if (!*cur_cell) {
					i = find_loop_end(commands, i);
				}

				break;
			case tula:
				if (*cur_cell) {
					i = find_loop_start(commands, i);
				}

				break;
			case pico:
				i = find_loop_end(commands, i);
				break;
			case ctm:
				std::cout << cvt.to_bytes(std::u32string (1, *cur_cell));
				break;
			case quéweá:
				std::getline(std::cin, (char_input = u8""));
				*cur_cell = char_input.length() ? cvt.from_bytes(char_input)[0] : U'\0';

				break;
			case chúpala:
				std::cout << *cur_cell;
				break;
			case brígido:
				std::getline(std::cin, (char_input = u8""));

				try {
					*cur_cell = std::stoi(char_input);
				} catch (...) {
					*cur_cell = 0;
				}

				*cur_cell = (char32_t)strtol(char_input.c_str(), NULL, 10);

				break;
			case perkin:
				if (copy_set) {
					*cur_cell = cell_value_copy;
					copy_set = false;
				} else {
					cell_value_copy = *cur_cell;
					copy_set = true;
				}

				break;
			case mierda:
				std::exit(EXIT_SUCCESS);
				break;
		}
	}
}

int la_weá_interpreter::find_loop_start(const std::vector<command_t> &commands, int i) {
	for (int j = i - 1, loop_level = 1; j >= 0; j--) {
		if (commands[j] == tula) {
			loop_level++;
		} else if (commands[j] == pichula) {
			loop_level--;
		}

		if (!loop_level) {
			return j;
		}
	}

	return -1;
}

int la_weá_interpreter::find_loop_end(const std::vector<command_t> &commands, int i) {
	for (int j = i + 1, loop_level = 1; j < commands.size(); j++) {
		if (commands[j] == pichula) {
			loop_level++;
		} else if (commands[j] == tula) {
			loop_level--;
		}

		if (!loop_level) {
			return j;
		}
	}

	return -1;
}

void la_weá_interpreter::exit_interpreter(const std::string &err_msg) {
	std::cerr << (err_msg.length() ? err_msg : u8"Error interno") << '\n';
	std::exit(EXIT_FAILURE);
}
