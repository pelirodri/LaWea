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

#include "la_weá_interpreter.h"

#include <stdlib.h>
#include <string.h>
#include <locale.h>
#include <errno.h>

const int32_t command_names[16][8 * sizeof(int32_t)] = { 
	L"maricón",
	L"maraco",
	L"weón",
	L"aweonao",
	L"maraca",
	L"chucha",
	L"puta",
	L"pichula",
	L"tula",
	L"pico",
	L"ctm",
	L"quéweá",
	L"chúpala",
	L"brígido",
	L"perkin",
	L"mierda"
};

const int32_t valid_chars[] = L"abcdeghiklmnopqrtuwáéíóú";

int loop_starts_length = 0, loop_ends_length = 0;

int main(int argc, char **argv) {
	setlocale(LC_CTYPE, "");

	if (argc != 2) {
		exit_interpreter("Tenís q pasar un argumento, con la ruta del archivo con el código, po, aweonao qlo");
	}

	interpret_la_weá(argv[1]);

	return 0;
}

void interpret_la_weá(const char *file_path) {
	size_t code_length = 0;
	int32_t *code = get_code(file_path, &code_length);

	if (!code) {
		exit_interpreter("Código no encontrado");
	}

	int commands_length = 0;
	command_t *commands = parse_code(code, code_length, &commands_length);

	free(code);

	if (!commands) {
		exit_interpreter("Comandos no encontrados");
	}

	run_commands(commands, commands_length);

	free(commands);
}

int32_t *get_code(const char *file_path, size_t *code_length) {
	const char *extension = strrchr(file_path, '.');

	if (!extension || strcmp(extension + 1, "lw")) {
		exit_interpreter("El archivo qlo tiene q tener la extensión .lw");
	}

	FILE *fp = fopen(file_path, "r");

	if (!fp) {
		char msg[26];

		if (errno == ENOENT) {
			strcpy(msg, "No existe la weá, po, wn");
		}

		exit_interpreter(msg);
	}

	fseek(fp, 0, SEEK_END);
	size_t code_size = ((size_t)(ftell(fp) / 1.25) * sizeof(int32_t)) + (2 * sizeof(int32_t));
	fseek(fp, 0, SEEK_SET);

	int32_t *code = (int32_t *)malloc(code_size);

	if (!code) {
		fclose(fp);
		exit_interpreter("");
	}

	wmemset(code, L'\0', code_size / sizeof(int32_t));

	long i = 0;

	int32_t wc;

	while (wc != WEOF) {
		wc = fgetwc(fp);

		if ((i * sizeof(int32_t)) == (code_size - (2 * sizeof(int32_t)))) {
			int32_t *tmp = (int32_t *)realloc(code, (code_size *= 2));

			if (!tmp) {
				free(code);
				fclose(fp);

				exit_interpreter("");
			}

			code = tmp;
		}

		code[i++] = wc;	
	}

	fclose(fp);

	*code_length = i;

	return code;
}

command_t *parse_code(const int32_t *code, size_t code_length, int *commands_length) {
	size_t commands_size = (size_t)(code_length / 7) * sizeof(command_t);
	command_t *commands = (command_t *)malloc(commands_size);

	if (!commands) {
		exit_interpreter("");
	}

	int32_t cmd_name[8 * sizeof(int32_t)] = {L'\0'};

	int i = 0, j = -1;
	long row = 0, column = 0;

	bool is_comment = false;

	for (long k = 0; k < code_length; k++) {
		if (code[k] == L'#') {
			is_comment = true;
		}

		int len1 = row ? snprintf(NULL, 0, "%ld", row) : 0;
		int len2 = column ? snprintf(NULL, 0, "%ld", column - (long)wcslen(cmd_name)) : 0;

		if (code[k] == L' ' || code[k] == L'\n' || code[k] == L'\t' || code[k] == WEOF || code[k] == L'#') {
			if (j > -1) {		
				command_t cmd = parse_command(cmd_name, i, row, column - (long)wcslen(cmd_name));

				if ((int)cmd == -1) {
					free(commands);

					char msg[68 + wcslen(cmd_name) + len1 + len2];
					char sub_msg[] = " no es un comando válido, po, saco de weas (línea: ";
					sprintf(msg, "'%ls'%s%ld, columna: %ld)", cmd_name, sub_msg, row, column - (long)wcslen(cmd_name));

					exit_interpreter(msg);
				}

				if ((i * sizeof(command_t)) == commands_size) {
					command_t *tmp = (command_t *)realloc(commands, (commands_size *= 2));

					if (!tmp) {
						free(commands);
						exit_interpreter("");
					}

					commands = tmp;
				}

				commands[i++] = (command_t)cmd;

				wmemset(cmd_name, L'\0', 7);
				j = -1;
			}
		} else {
			if (!is_comment) {
				if (!validate_char(code[k])) {
					free(commands);

					int len3 = column ? snprintf(NULL, 0, "%ld", column) : 0;

					char msg[59 + sizeof(int32_t) + len1 + len3];
					sprintf(msg, "'%lc' no es parte de La Weá, tonto qlo (línea: %ld, columna: %ld)", code[k], row, column);

					exit_interpreter(msg);
				}

				if (++j == 7) {
					free(commands);

					char msg[79 + len1 + len2];
					char sub_msg[] = "Voh creís q yo soy weón, ctm? Te gustan largos, parece (línea: ";
					sprintf(msg, "%s%ld, columna: %ld)", sub_msg, row, column - (long)wcslen(cmd_name));

					exit_interpreter(msg);
				}

				cmd_name[j] = code[k];
			}
		}

		if (code[k] == L'\n') {
			row++;
			column = 0;

			if (is_comment) {
				is_comment = false;
			}
		} else {
			column++;
		}
	}

	if (loop_starts_length != loop_ends_length) {
		free(commands);
		exit_interpreter("O te sobran pichulas o te faltan tulas");
	}

	*commands_length = i;

	return commands;
}

command_t parse_command(const int32_t *cmd_name, int cmd_idx, long row, long column) {
	size_t cnl = sizeof(command_names) / sizeof(*command_names);

	int len1 = row ? snprintf(NULL, 0, "%ld", row) : 0;
	int len2 = column ? snprintf(NULL, 0, "%ld", column) : 0;

	for (int i = 0; i < cnl; i++) {
		if (!wcscmp(cmd_name, command_names[i])) {
			if (!wcscmp(cmd_name, L"pichula")) {
				loop_starts_length++;				
			} else if (!wcscmp(cmd_name, L"tula")) {
				if (loop_ends_length == loop_starts_length) {
					char msg[74 + len1 + len2];
					sprintf(msg, "Se encontró una tula sin su respectiva pichula en la línea: %ld, columna: %ld", row, column);

					exit_interpreter(msg);
				}

				loop_ends_length++;
			} else if (!wcscmp(cmd_name, L"pico")) {
				if (loop_starts_length == loop_ends_length) {
					char msg[52 + len1 + len2];
					sprintf(msg, "No debiste meter ese pico en la línea: %ld, columna: %ld", row, column);

					exit_interpreter(msg);
				}
			}

			return (command_t)i;
		}
	}

	return -1;
}

bool validate_char(int32_t wc) {
	size_t vcl = sizeof(valid_chars) / sizeof(*valid_chars);

	for (int i = 0; i < vcl; i++) {
		if (wc == valid_chars[i]) {
			return true;
		}
	}

	return false;
}

void run_commands(const command_t *commands, int commands_length) {
	size_t cells_size = 8 * sizeof(int32_t);
	int32_t *cells = (int32_t *)calloc(8, sizeof(int32_t));

	if (!cells) {
		exit_interpreter("");
	}

	int32_t *cell = cells;

	bool copy_set = false;
	int32_t cell_value_copy;

	int32_t char_input;

	size_t wc_buf_size;
	int32_t *wc_buf;

	for (int i = 0; i < commands_length; i++) {
		switch (commands[i]) {
			case maricón:
				(*cell)--;
				break;
			case maraco:
				*cell -= 2;
				break;
			case weón:
				(*cell)++;
				break;
			case aweonao:
				*cell += 2;
				break;
			case maraca:
				*cell = 0;
				break;
			case chucha:
				if (cell == cells) {
					free(cells);
					exit_interpreter("Te saliste pa la izquierda, aweonao");
				}

				cell--;

				break;
			case puta:
				if (cell == cells + ((cells_size / sizeof(int32_t)) - 1)) {
					int32_t *tmp = (int32_t *)realloc(cells, (cells_size *= 2));

					if (!tmp) {
						free(cells);
						exit_interpreter("");
					}

					int cell_diff = cell - cells;

					cells = tmp;

					cell = cells + cell_diff;
					wmemset(cell + 1, 0, (cells_size / sizeof(int32_t)) / 2);
				}

				cell++;

				break;
			case pichula:
				if (!*cell) {
					i = find_loop_end(commands, commands_length, i);
				}

				break;
			case tula:
				if (*cell) {
					i = find_loop_start(commands, commands_length, i);
				}

				break;
			case pico:
				i = find_loop_end(commands, commands_length, i);
				break;
			case ctm:
				putwchar(*cell);
				break;
			case quéweá:
				char_input = getwchar();
				while (getwchar() != L'\n') {}

				*cell = char_input;

				break;
			case chúpala:
				printf("%d", *cell);
				break;
			case brígido:
				wc_buf_size = 13 * sizeof(int32_t);
				wc_buf = (int32_t *)malloc(wc_buf_size);

				if (!wc_buf) {
					free(cells);
					exit_interpreter("");
				}

				wmemset(wc_buf, L'\0', wc_buf_size / sizeof(int32_t));

				int j = 0;

				int32_t wc;

				while ((wc = getwchar()) != L'\n') {
					if (j == wc_buf_size - 1) {
						int32_t *tmp = (int32_t *)realloc(wc_buf, (wc_buf_size *= 2));

						if (!tmp) {
							free(wc_buf);
							free(cells);

							exit_interpreter("");
						}

						wc_buf = tmp;
					}

					wc_buf[j++] = wc;
				}

				*cell = (int32_t)wcstol(wc_buf, NULL, 10);

				free(wc_buf);

				break;
			case perkin:
				if (copy_set) {
					*cell = cell_value_copy;
					copy_set = false;
				} else {
					cell_value_copy = *cell;
					copy_set = true;
				}

				break;
			case mierda:
				free(cells);
				exit(EXIT_SUCCESS);
				break;
		}
	}

	free(cells);
}

int find_loop_start(const command_t *commands, int commands_length, int i) {
	for (int j = i - 1, level = 1; j >= 0; j--) {
		if (commands[j] == tula) {
			level++;
		} else if (commands[j] == pichula) {
			level--;
		}

		if (!level) {
			return j;
		}
	}

	return -1;
}

int find_loop_end(const command_t *commands, int commands_length, int i) {
	for (int j = i + 1, level = 1; j < commands_length; j++) {
		if (commands[j] == pichula) {
			level++;
		} else if (commands[j] == tula) {
			level--;
		}

		if (!level) {
			return j;
		}
	}

	return -1;
}

void exit_interpreter(const char *err_msg) {
	fprintf(stderr, "%s\n", strlen(err_msg) ? err_msg : "Error interno");
	exit(EXIT_FAILURE);
}
