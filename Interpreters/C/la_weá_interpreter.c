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
#include "utf8_utf32.h"

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <locale.h>
#include <errno.h>

#if defined(__unix__) || (defined(__APPLE__) && defined(__MACH__)) || defined(__CYGWsmcIN__) || defined(_WIN64) || (_WIN32)
    #include <fcntl.h>

    #if !defined(_WIN64) && !defined(_WIN32)
        #include <unistd.h>
    #else
        #include <windows.h>
        #include <io.h>
        #include <wchar.h>
    #endif
#endif

const uint_least32_t command_names[16][8 * sizeof(uint_least32_t)] = { 
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

const uint_least32_t valid_chars[] = U"abcdeghiklmnopqrtuwáéíóú";

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
    uint_least32_t *code = get_code(file_path, &code_length);

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

uint_least32_t *get_code(const char *file_path, size_t *code_length) {
    const char *extension = strrchr(file_path, '.');

    if (!extension || strcmp(extension + 1, "lw")) {
        exit_interpreter("El archivo qlo tiene q tener la extensión .lw");
    }

    size_t utf8_code_length;

    int fd;
    FILE *fp;

    #if defined(__unix__) || (defined(__APPLE__) && defined(__MACH__)) || defined(__CYGWIN__) || defined(_WIN64) || defined(_WIN32)
        #if !defined(_WIN64) && !defined(_WIN32)
            fd = open(file_path, O_RDONLY);
        #else
            errno = _sopen_s(&fd, file_path, _O_RDONLY, _SH_DENYWR, 0);
        #endif

        if (fd == -1) {
            file_not_found_exit();
        }

        #if !defined(_WIN64) && !defined(_WIN32)
            utf8_code_length = lseek(fd, 0, SEEK_END);
            lseek(fd, 0, SEEK_SET);
        #else
            utf8_code_length = _lseek(fd, 0, SEEK_END);
            _lseek(fd, 0, SEEK_SET);
        #endif
    #else
        fp = fopen(file_path, "r");

        if (!fp) {
            file_not_found_exit();
        }

        fseek(fp, 0, SEEK_END);
        utf8_code_length = (size_t)ftell(fp);
        fseek(fp, 0, SEEK_SET);
    #endif

    if (utf8_code_length) {
	    char *utf8_code = (char *)calloc(utf8_code_length + 1, sizeof(char));

	    if (!utf8_code) {
	        #if defined(__unix__) || (defined(__APPLE__) && defined(__MACH__)) || defined(__CYGWIN__)
	            close(fd);
	        #elif defined(_WIN64) || defined(_WIN32)
	            _close(fd);
	        #else
	            fclose(fp);
	        #endif

	        exit_interpreter("");
	    }

	    #if defined(__unix__) || (defined(__APPLE__) && defined(__MACH__)) || defined(__CYGWIN__)
	        read(fd, utf8_code, utf8_code_length);
	        close(fd);
	    #elif defined(_WIN64) || defined(_WIN32)
	        _read(fd, utf8_code, utf8_code_length);
	        _close(fd);
	    #else
	        fread(utf8_code, sizeof(char), utf8_code_length + 1, fp);
	        fclose(fp);
	    #endif

	    *code_length = utf8_strlen((uint_least8_t *)utf8_code);

	    uint_least32_t *utf32_code = utf8_str_to_utf32((uint_least8_t *)utf8_code);
	    free(utf8_code);

	    return utf32_code;
	}

	return NULL;
}

void file_not_found_exit() {
    char msg[26];

    if (errno == ENOENT) {
        char src[] = "No existe la weá, po, wn";

        #if !defined(_WIN64) && !defined(_WIN32)
            strcpy(msg, src);
        #else
            strcpy_s(msg, 26, src);
        #endif
    }

    exit_interpreter(msg);
}

command_t *parse_code(const uint_least32_t *code, size_t code_length, int *commands_length) {
    size_t commands_size = (size_t)(code_length / 7) * sizeof(command_t);
    command_t *commands = (command_t *)malloc(commands_size);

    if (!commands) {
        exit_interpreter("");
    }

    uint_least32_t cmd_name[8 * sizeof(uint_least32_t)] = {'\0'};

    int i = 0, j = -1;
    long row = 0, col = 0;

    bool is_comment = false;

    for (long k = 0; k <= code_length; k++) {
        if (code[k] == U'#') {
            is_comment = true;
        }

        int len1 = row ? snprintf(NULL, 0, "%ld", row) : 0;
        int len2 = col ? snprintf(NULL, 0, "%ld", col - (long)utf32_strlen(cmd_name)) : 0;

        if (isspace(code[k]) || code[k] == U'#' || code[k] == U'\0') {
            if (j != -1) {      
                command_t cmd = parse_command(cmd_name, i, row, col - (long)utf32_strlen(cmd_name));

                if ((int)cmd == -1) {
                    free(commands);

                    uint_least8_t *utf8_cmd_name = utf32_str_to_utf8(cmd_name);

                    char msg[68 + (int)utf32_strlen(cmd_name) + len1 + len2];
                    char sub_msg[] = " no es un comando válido, po, saco de weas (línea: ";
                    sprintf(msg, "'%s'%s%ld, columna: %ld)", utf8_cmd_name, sub_msg, row, col - (long)utf32_strlen(cmd_name));

                    free(utf8_cmd_name);

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

                commands[i++] = cmd;

                memset(cmd_name, U'\0', 7 * sizeof(uint_least32_t));
                j = -1;
            }
        } else {
            if (!is_comment) {
                if (!validate_char(code[k])) {
                    free(commands);

                    int len3 = col ? snprintf(NULL, 0, "%ld", col) : 0;

                    uint_least8_t *utf8_char = utf32_char_to_utf8(code[k]);

                    char msg[59 + sizeof(uint_least32_t) + len1 + len3];
                    sprintf(msg, "'%s' no es parte de La Weá, tonto qlo (línea: %ld, columna: %ld)", utf8_char, row, col);

                    free(utf8_char);

                    exit_interpreter(msg);
                }

                if (++j == 7) {
                    free(commands);

                    char msg[79 + len1 + len2];
                    char sub_msg[] = "Voh creís q yo soy weón, ctm? Te gustan largos, parece (línea: ";
                    sprintf(msg, "%s%ld, columna: %ld)", sub_msg, row, col - (long)utf32_strlen(cmd_name));

                    exit_interpreter(msg);
                }

                cmd_name[j] = code[k];
            }
        }

        if (code[k] == U'\n') {
            row++;
            col = 0;

            is_comment = false;
        } else {
            col++;
        }
    }

    if (loop_starts_length != loop_ends_length) {
        free(commands);
        exit_interpreter("O te sobran pichulas o te faltan tulas");
    }

    *commands_length = i;

    return commands;
}

command_t parse_command(const uint_least32_t *cmd_name, int cmd_idx, long row, long col) {
    size_t command_names_length = sizeof(command_names) / sizeof(*command_names);

    int len1 = row ? snprintf(NULL, 0, "%ld", row) : 0;
    int len2 = col ? snprintf(NULL, 0, "%ld", col) : 0;

    for (int i = 0; i < command_names_length; i++) {
        if (!utf32_strcmp(cmd_name, command_names[i])) {
            if (!utf32_strcmp(cmd_name, U"pichula")) {
                loop_starts_length++;               
            } else if (!utf32_strcmp(cmd_name, U"tula")) {
                if (loop_ends_length == loop_starts_length) {
                    char msg[74 + len1 + len2];
                    sprintf(msg, "Se encontró una tula sin su respectiva pichula en la línea: %ld, columna: %ld", row, col);

                    exit_interpreter(msg);
                }

                loop_ends_length++;
            } else if (!utf32_strcmp(cmd_name, U"pico")) {
                if (loop_starts_length == loop_ends_length) {
                    char msg[52 + len1 + len2];
                    sprintf(msg, "No debiste meter ese pico en la línea: %ld, columna: %ld", row, col);

                    exit_interpreter(msg);
                }
            }

            return (command_t)i;
        }
    }

    return -1;
}

bool validate_char(uint_least32_t c) {
    size_t valid_chars_length = sizeof(valid_chars) / sizeof(*valid_chars);

    for (int i = 0; i < valid_chars_length; i++) {
        if (c == valid_chars[i]) {
            return true;
        }
    }

    return false;
}

void run_commands(const command_t *commands, int commands_length) {
    size_t cells_size = 8 * sizeof(uint_least32_t);
    uint_least32_t *cells = (uint_least32_t *)calloc(8, sizeof(uint_least32_t));

    if (!cells) {
        exit_interpreter("");
    }

    uint_least32_t *cur_cell = cells;

    bool copy_set = false;
    uint_least32_t cell_value_copy;

    #if !defined(_WIN64) && !defined(_WIN32)
    	uint_least8_t utf8_char_input[4];
    #else
    	wchar_t utf16_char_input[3];
    #endif

    size_t char_buf_size;
    char *char_buf;

    int c, i;

    for (int j = 0; j < commands_length; j++) {
        switch (commands[j]) {
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
                if (cur_cell == cells) {
                    free(cells);
                    exit_interpreter("Te saliste pa la izquierda, aweonao");
                }

                cur_cell--;

                break;
            case puta:
                if (cur_cell == cells + ((cells_size / sizeof(uint_least32_t)) - 1)) {
                    uint_least32_t *tmp = (uint_least32_t *)realloc(cells, (cells_size *= 2));

                    if (!tmp) {
                        free(cells);
                        exit_interpreter("");
                    }

                    ptrdiff_t cell_diff = cur_cell - cells;

                    cells = tmp;

                    cur_cell = cells + cell_diff;
                    memset(cur_cell + 1, 0, cells_size / 2);
                }

                cur_cell++;

                break;
            case pichula:
                if (!*cur_cell) {
                    j = find_loop_end(commands, commands_length, j);
                }

                break;
            case tula:
                if (*cur_cell) {
                    j = find_loop_start(commands, commands_length, j);
                }

                break;
            case pico:
                j = find_loop_end(commands, commands_length, j);
                break;
            case ctm:
                #if !defined(_WIN64) && !defined(_WIN32)
                    printf("%s", utf32_char_to_utf8(*cur_cell));
                #else
                    putchar(*cur_cell);
                #endif

                break;
            case quéweá:
                #if !defined(_WIN64) && !defined(_WIN32)
                    memset(utf8_char_input, '\0', 4);

                    if (fgets((char *)utf8_char_input, 4, stdin)[strlen((const char *)utf8_char_input) - 1] != '\n') {
                        while ((getchar()) != '\n') {}
                    }

                    *cur_cell = utf8_strlen(utf8_char_input) >= 2 ? utf8_str_to_utf32(utf8_char_input)[0] : U'\0';
                #else
                    wmemset(utf16_char_input, L'\0', 3);

                    unsigned long r;
                    ReadConsoleW(GetStdHandle(STD_INPUT_HANDLE), utf16_char_input, 3, &r, NULL);

                    if (utf16_char_input[wcslen(utf16_char_input) - 1] != '\n') {
                        while ((getchar()) != '\n') {}
                    }

                    *cur_cell = r == 3 ? (uint_least32_t)utf16_char_input[0] : U'\0';
                #endif
                
                break;
            case chúpala:
                printf("%d", *cur_cell);
                break;
            case brígido:
                char_buf_size = 13 * sizeof(char);
                char_buf = (char *)calloc(13, sizeof(char));

                if (!char_buf) {
                    free(cells);
                    exit_interpreter("");
                }

                i = 0;

                while ((c = getchar()) != '\n') {
                    if (i == char_buf_size - 1) {
                        char *tmp = (char *)realloc(char_buf, (char_buf_size *= 2));

                        if (!tmp) {
                            free(char_buf);
                            free(cells);

                            exit_interpreter("");
                        }

                        char_buf = tmp;
                        memset(char_buf + (i + 1), 0, char_buf_size / 2);
                    }

                    char_buf[i++] = c;
                }

                *cur_cell = (uint_least32_t)strtol(char_buf, NULL, 10);

                free(char_buf);

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
    if (!strlen(err_msg)) {
        fprintf(stderr, "Error interno\n");
    } else {
        #if !defined (_WIN64) && !defined(_WIN32)
            fprintf(stderr, "%s\n", err_msg);
        #else
            wchar_t wchar_buf[(utf8_strlen((const uint_least8_t *)err_msg) + 1) * sizeof(wchar_t)];

            int utf16_str_length = MultiByteToWideChar(CP_UTF8, 0, err_msg, strlen(err_msg), wchar_buf, sizeof(wchar_buf));
            wchar_buf[utf16_str_length] = L'\n';

            WriteConsoleW(GetStdHandle(STD_ERROR_HANDLE), wchar_buf, utf16_str_length + 1, NULL, NULL);
        #endif
    }

    exit(EXIT_FAILURE);
}
