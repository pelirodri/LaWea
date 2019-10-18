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

#if defined(_WIN64)
	#include <windows.h>

	std::locale::id std::codecvt<char32_t, char, std::mbstate_t>::id;
#endif

static std::wstring_convert<std::codecvt_utf8<char32_t>, char32_t> cvt;

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

void la_weá_interpreter::interpret(const char *file_path) {
	run_commands(get_commands(get_code(file_path)));
}

std::u32string la_weá_interpreter::get_code(const char *file_path) {
	const char *extension = strrchr(file_path, '.');

	if (!extension || strcmp(extension + 1, "lw")) {
		exit_interpreter(u8"El archivo qlo tiene q tener la extensión .lw");
	}

	std::ifstream is (file_path);

	if (!is) {
		exit_interpreter(u8"No existe la weá, po, wn");
	}

	is.seekg(0, is.end);
	std::streampos code_len = is.tellg();
	is.seekg(0, is.beg);

	std::string code (code_len, ' ');
	is.read(&code[0], code_len);

	return cvt.from_bytes(code);
}

std::vector<la_weá_interpreter::command_t> la_weá_interpreter::get_commands(const std::u32string &code) {
	std::vector<command_t> commands;
	std::u32string cmd_name = U"";

	size_t line = 1, col = 1;
	bool is_comment = false;

	for (long i = 0; i <= code.length(); i++) {
		if (i < code.length() && code[i] == U'#') {
			is_comment = true;
		}

		if (i == code.length() || isspace(code[i]) || code[i] == U'#') {
			if (!cmd_name.empty()) {
				command_t cmd = get_command(cmd_name, line, col - cmd_name.length());

				if (static_cast<int>(cmd) == -1) {
					exit_interpreter(
						u8"'" +
						cvt.to_bytes(cmd_name) +
						u8"' no es un comando válido, po, saco de weas (línea: " +
						std::to_string(line) +
						u8", columna: " +
						std::to_string(col - cmd_name.length()) +
						u8")"
					);
				}

				commands.push_back(cmd);
				cmd_name = U"";
			}
		} else {
			if (!is_comment) {
				if (std::u32string (U"abcdeghiklmnopqrtuwáéíóú").find(code[i]) == std::string::npos) {
					exit_interpreter(
						u8"'" +
						cvt.to_bytes(std::u32string (1, code[i])) +
						u8"'" +
						u8" no es parte de La Weá, tonto qlo (línea: " +
						std::to_string(line) +
						u8", columna: " +
						std::to_string(col) +
						u8")"
					);
				}

				if (cmd_name.length() == 7) {
					exit_interpreter(
						u8"Voh creís q yo soy weón, ctm? Te gustan largos, parece (línea: " +
						std::to_string(line) +
						u8", columna: " +
						std::to_string(col - cmd_name.length()) +
						u8")"
					);
				}

				cmd_name += code[i];
			}
		}

		if (code[i] == U'\n') {
			line++;
			col = 0;

			is_comment = false;
		} else {
			col++;
		}
	}

	if (loop_starts_count != loop_ends_count) {
		exit_interpreter(u8"O te sobran pichulas o te faltan tulas");
	}

	return commands; 
}

void la_weá_interpreter::run_commands(const std::vector<command_t> &commands) {
	std::cout.setf(std::ios::unitbuf);

	std::vector<int64_t> cells (8);
	int cur_cell = 0;

	bool copy_set = false;
	int64_t cell_value_copy;

	std::string char_input;

	#if defined(_WIN64)
		wchar_t utf16_char_input[5];
	#endif

	for (int i = 0; i < commands.size(); i++) {
		switch (commands[i]) {
			case maricón:
				cells[cur_cell]--;
				break;
			case maraco:
				cells[cur_cell] -= 2;
				break;
			case weón:
				cells[cur_cell]++;
				break;
			case aweonao:
				cells[cur_cell] += 2;
				break;
			case maraca:
				cells[cur_cell] = 0;
				break;
			case chucha:
				if (!cur_cell) {
					exit_interpreter(u8"Te saliste pa la izquierda, aweonao");
				}

				--cur_cell;

				break;
			case puta:
				if (cur_cell == cells.size() - 1) {
					cells.resize(cells.capacity() * 2);
				}

				++cur_cell;

				break;
			case pichula:
				if (!cells[cur_cell]) {
					i = find_loop_end(commands, i);
				}

				break;
			case tula:
				if (cells[cur_cell]) {
					i = find_loop_start(commands, i);
				}

				break;
			case pico:
				i = find_loop_end(commands, i);
				break;
			case ctm:
				#if !defined(_WIN64)
					if (cells[cur_cell] >= 0x0 && cells[cur_cell] <= 0x10FFFF) {
						std::cout << cvt.to_bytes(std::u32string (1, cells[cur_cell]));
					} else {
						putchar(cells[cur_cell]);
					}
				#else
					putchar(cells[cur_cell]);
				#endif

				break;
			case quéweá:
				#if !defined(_WIN64)
					std::getline(std::cin, (char_input = u8""));

					if (char_input.length() >= 1 && char_input.length() <= 4) {
						std::u32string utf32_str = cvt.from_bytes(char_input);
						cells[cur_cell] = utf32_str.length() == 1 ? utf32_str[0] : U'\0';
					} else {
						cells[cur_cell] = U'\0';
					}
				#else
					wmemset(utf16_char_input, L'\0', 5);

                    unsigned long r;
                    ReadConsoleW(GetStdHandle(STD_INPUT_HANDLE), utf16_char_input, 5, &r, NULL);

                    if (utf16_char_input[wcslen(utf16_char_input) - 1] != L'\n') {
                        while (getchar() != '\n') {}
                        cells[cur_cell] = U'\0';
                    } else {
                        if (r == 3) {
                            cells[cur_cell] = utf16_char_input[0];
                        } else if (r == 4) {
                            utf16_char_input[0] = (utf16_char_input[0] - 0xD800) * 0x400;
                            utf16_char_input[1] -= 0xDC00;

                            cells[cur_cell] = (utf16_char_input[0] + utf16_char_input[1]) + 0x10000;
                        } else {
                            cells[cur_cell] = U'\0';
                        }
                    }
				#endif
				
				break;
			case chúpala:
				std::cout << cells[cur_cell];
				break;
			case brígido:
				std::getline(std::cin, (char_input = u8""));

                for (int j = 0; j < char_input.length(); j++) {
                    if (!std::isdigit(char_input[j]) && !(!j && char_input[j] == '-')) {
                        char_input.clear();
                        break;
                    }
                }

				try {
					cells[cur_cell] = std::stoll(char_input);
				} catch (...) {
					cells[cur_cell] = 0;
				}
				
				break;
			case perkin:
				if (copy_set) {
					cells[cur_cell] = cell_value_copy;
					copy_set = false;
				} else {
					cell_value_copy = cells[cur_cell];
					copy_set = true;
				}

				break;
			case mierda:
				std::exit(EXIT_SUCCESS);
				break;
		}
	}
}

void la_weá_interpreter::exit_interpreter(const std::string &err_msg) {
	if (!err_msg.length()) {
		std::cerr << "\x1b[1;31mError interno\x1b[0m\n";
	} else {
		#if !defined(_WIN64)
			std::cerr << "\x1b[1;31m" << err_msg << "\x1b[0m\n";
		#else
			wchar_t wchar_buf[(utf8_strlen((const uint_least8_t *)err_msg) + 1) * sizeof(wchar_t)];

            int str_len = MultiByteToWideChar(CP_UTF8, 0, err_msg, strlen(err_msg), wchar_buf, sizeof(wchar_buf));
            wchar_buf[str_len] = L'\n';

            HANDLE error_handle = GetStdHandle(STD_ERROR_HANDLE);

            CONSOLE_SCREEN_BUFFER_INFO console_info;
            GetConsoleScreenBufferInfo(error_handle, &console_info);

            WORD saved_attributes = console_info.wAttributes;

            SetConsoleTextAttribute(error_handle, FOREGROUND_INTENSITY | FOREGROUND_RED);
            WriteConsoleW(error_handle, wchar_buf, str_len + 1, NULL, NULL);
            SetConsoleTextAttribute(error_handle, saved_attributes);
		#endif
	}
	
	std::exit(EXIT_FAILURE);
}

la_weá_interpreter::command_t la_weá_interpreter::get_command(const std::u32string &cmd_name, size_t line, size_t col) {
	for (int cmd = 0; cmd < command_names.size(); cmd++) {
		if (cmd_name == command_names[cmd]) {
			if (static_cast<command_t>(cmd) == pichula) {
				loop_starts_count++;
			} else if (static_cast<command_t>(cmd) == tula) {
				if (loop_ends_count == loop_starts_count) {
					exit_interpreter(
						u8"Se encontró una tula sin su respectiva pichula en la línea: " +
						std::to_string(line) +
						u8", columna: " +
						std::to_string(col)
					);
				}

				loop_ends_count++;
			} else if (static_cast<command_t>(cmd) == pico) {
				if (loop_starts_count == loop_ends_count) {
					exit_interpreter(
						u8"No debiste meter ese pico en la línea: " +
						std::to_string(line) +
						u8", columna: " +
						std::to_string(col)
					);
				}
			}

			return static_cast<command_t>(cmd);
		}
	}

	return static_cast<command_t>(-1);
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
