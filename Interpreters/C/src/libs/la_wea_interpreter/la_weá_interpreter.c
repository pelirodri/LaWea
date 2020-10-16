//
// Copyright © 2020 Rodrigo Pelissier. All rights reserved.
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

#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <errno.h>
#include <math.h>

#if defined(__unix__) || (defined(__APPLE__) && defined(__MACH__)) || defined(__CYGWIN__) || defined(_WIN64)
    #include <fcntl.h>

    #if !defined(_WIN64)
        #include <unistd.h>
    #else
        #include <windows.h>
        #include <io.h>
        #include <wchar.h>
    #endif
#endif

static long long loop_starts_count = 0, loop_ends_count = 0;

static const uint_least32_t command_names[][8 * sizeof(uint_least32_t)] = { 
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

static uint_least32_t *get_code(const char *);
static void file_not_found_exit();

static command_t get_command(const uint_least32_t *, long long, long long);

static long long find_loop_start(const command_t *, long long);
static long long find_loop_end(const command_t *, size_t, long long);

void interpret_la_weá(const char *file_path) {
    uint_least32_t *code = get_code(file_path);

    size_t commands_count = 0;
    command_t *commands = get_commands(code, &commands_count);

    free(code);

    run_commands(commands, commands_count);
    free(commands);
}

command_t *get_commands(const uint_least32_t *code, size_t *commands_count) {
    size_t code_len = utf32_strlen(code);

    size_t commands_size = (size_t)(code_len / 3) * sizeof(command_t);
    command_t *commands = (command_t *)malloc(commands_size);

    if (!commands) {
        exit_interpreter("");
    }

    uint_least32_t cmd_name[8 * sizeof(uint_least32_t)] = {U'\0'};

    long long i = 0, j = -1;
    long long line = 1, col = 1;

    bool is_comment = false;

    for (long long k = 0; k <= code_len; k++) {
        if (code[k] == U'#') {
            is_comment = true;
        }

        if (isspace(code[k]) || code[k] == U'#' || code[k] == U'\0') {
            if (j != -1) {      
                command_t cmd = get_command(cmd_name, line, col - utf32_strlen(cmd_name));

                if ((int)cmd == -1) {
                    free(commands);

                    size_t col_len = log10(col - utf32_strlen(cmd_name)) + 1;
                    char msg[68 + (int)utf32_strlen(cmd_name) + (int)(log10(line) + 1) + col_len];

                    unsigned char *utf8_cmd_name = utf32_str_to_utf8(cmd_name);

                    if (!utf8_cmd_name) {
                        exit_interpreter("");
                    }

                    sprintf(
                        msg,
                        "'%s' no es un comando válido, poh, saco de weas (línea: %lld, columna: %lld)",
                        utf8_cmd_name,
                        line,
                        col - utf32_strlen(cmd_name)
                    );

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
        } else if (!is_comment) {
            if (!utf32_strchr(U"abcdeghiklmnopqrtuwáéíóú", code[k])) {
                free(commands);

                char msg[59 + sizeof(uint_least32_t) + (int)(log10(line) + 1) + (int)(log10(col) + 1)];

                unsigned char *utf8_char = utf32_char_to_utf8(code[k]);

                if (!utf8_char) {
                    exit_interpreter("");
                }

                sprintf(
                    msg,
                    "'%s' no es parte de La Weá, tonto qlo (línea: %lld, columna: %lld)",
                    utf8_char,
                    line,
                    col
                );

                free(utf8_char);

                exit_interpreter(msg);
            }

            if (++j == 7) {
                free(commands);

                char msg[79 + (int)(log10(line) + 1) + (int)(log10(col - utf32_strlen(cmd_name)) + 1)];

                sprintf(
                    msg,
                    "¿Voh creís que yo soy weón, CTM? Te gustan largos, parece (línea: %lld, columna: %lld)",
                    line,
                    col - utf32_strlen(cmd_name)
                );

                exit_interpreter(msg);
            }

            cmd_name[j] = code[k];
        }

        if (code[k] == U'\n') {
            line++;
            col = 1;

            is_comment = false;
        } else {
            col++;
        }
    }

    if (loop_starts_count != loop_ends_count) {
        free(commands);
        exit_interpreter("O te sobran pichulas o te faltan tulas");
    }

    *commands_count = i;

    return commands;
}

void run_commands(const command_t *commands, size_t commands_count) {
    #if !defined(_WIN64)
        setbuf(stdout, NULL);
    #else
        setvbuf(stdout, NULL, _IONBF, 0);
    #endif
    
    size_t cells_size = 8 * sizeof(int64_t);
    int64_t *cells = (int64_t *)calloc(8, sizeof(int64_t));    

    if (!cells) {
        exit_interpreter("");
    }

    long long cur_cell = 0;

    bool copy_set = false;
    int64_t cell_value_copy;

    #if !defined(_WIN64)
        unsigned char utf8_input[6] = {'\0'};
    #else
        WCHAR utf16_buffer[5] = {u'\0'};
    #endif

    char char_input[22] = {0};

    for (long long i = 0; i < commands_count; i++) {
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
                    free(cells);
                    exit_interpreter("Te saliste pa’ la izquierda, aweona’o");
                }

                cur_cell--;

                break;
            case puta:
                if (cur_cell == (cells_size / sizeof(int64_t)) - 1) {
                    int64_t *tmp = (int64_t *)realloc(cells, (cells_size *= 2));

                    if (!tmp) {
                        free(cells);
                        exit_interpreter("");
                    }

                    cells = tmp;
                    memset(cells + (cur_cell + 1), 0, cells_size / 2);
                }

                cur_cell++;

                break;
            case pichula:
                if (!cells[cur_cell]) {
                    i = find_loop_end(commands, commands_count, i);
                }

                break;
            case tula:
                if (cells[cur_cell]) {
                    i = find_loop_start(commands, i);
                }

                break;
            case pico:
                i = find_loop_end(commands, commands_count, i);
                break;
            case ctm:
                if (cells[cur_cell] >= 0 && cells[cur_cell] <= 0x10FFFF) {
                    #if !defined(_WIN64)
                        unsigned char *utf8_output = utf32_char_to_utf8(cells[cur_cell]);
                        printf("%s", (const char *)utf8_output);
                        free(utf8_output);
                    #else
                        wmemset(utf16_buffer, L'\0', 2);

                        if (cells[cur_cell] < 0x10000) {
                            utf16_buffer[0] = cells[cur_cell];
                        } else {
                            uint_least32_t tmp_char = cells[cur_cell] - 0x10000;

                            utf16_buffer[0] = (tmp_char >> 10) + 0xD800;
                            utf16_buffer[1] = (tmp_char & 0x3FF) + 0xDC00;
                        }

                        short utf16_buffer_len = cells[cur_cell] < 0x10000 ? 1 : 2;
                        WriteConsoleW(GetStdHandle(STD_OUTPUT_HANDLE), utf16_buffer, utf16_buffer_len, NULL, NULL);
                    #endif
                } else {
                    printf("%s", "\uFFFD");
                }

                break;
            case quéweá:
                #if !defined(_WIN64)
                    memset(utf8_input, '\0', 5);

                    if (fgets((char *)utf8_input, 6, stdin)[strlen((const char *)utf8_input) - 1] != '\n') {
                        while (getchar() != '\n') {}
                        cells[cur_cell] = U'\0';
                    } else {
                        if (utf8_strlen(utf8_input) == 2) {
                            uint_least32_t *utf32_input = utf8_str_to_utf32(utf8_input);

                            if (!utf32_input) {
                                free(cells);
                                exit_interpreter("");
                            }

                            cells[cur_cell] = utf32_input[0];
                            free(utf32_input);
                        } else {
                            cells[cur_cell] = U'\0';
                        }
                    }
                #else
                    wmemset(utf16_buffer, L'\0', 4);

                    ULONG read_char_count;
                    ReadConsoleW(GetStdHandle(STD_INPUT_HANDLE), utf16_buffer, 5, &read_char_count, NULL);

                    if (utf16_buffer[wcslen(utf16_buffer) - 1] != L'\n') {
                        while (getchar() != '\n') {}
                        cells[cur_cell] = U'\0';
                    } else {
                        if (read_char_count == 3) {
                            cells[cur_cell] = utf16_buffer[0];
                        } else if (read_char_count == 4) {
                            utf16_buffer[0] = (utf16_buffer[0] - 0xD800) * 0x400;
                            utf16_buffer[1] -= 0xDC00;

                            cells[cur_cell] = (utf16_buffer[0] + utf16_buffer[1]) + 0x10000;
                        } else {
                            cells[cur_cell] = U'\0';
                        }
                    }
                #endif
                
                break;
            case chúpala:
                printf("%lld", cells[cur_cell]);
                break;
            case brígido:
                memset(char_input, 0, 21);

                if (fgets(char_input, 22, stdin)[strlen(char_input) - 1] == '\n') {
                    for (short j = 0; j < strlen(char_input) - 1; j++) {
                        if (!isdigit(char_input[j]) && !(!j && char_input[j] == '-')) {
                            char_input[0] = '\0';
                            break;
                        }
                    }

                    cells[cur_cell] = strtoll(char_input, NULL, 10);

                    if (errno == ERANGE) {
                        cells[cur_cell] = 0;
                    }
                } else {
                    while (getchar() != '\n') {}
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
                free(cells);
                exit(EXIT_SUCCESS);
        }
    }

    free(cells);
}

void exit_interpreter(const char *err_msg) {
    if (!strlen(err_msg)) {
        fprintf(stderr, "\x1b[1;31mError interno\x1b[0m\n");
    } else {
        #if !defined(_WIN64)
            fprintf(stderr, "\x1b[1;31m%s\x1b[0m\n", err_msg);
        #else
            WCHAR utf16_buffer[(utf8_strlen((const unsigned char *)err_msg) + 1)];

            short utf16_buffer_len = MultiByteToWideChar(
                CP_UTF8,
                0,
                err_msg,
                strlen(err_msg),
                utf16_buffer,
                sizeof(utf16_buffer)
            );

            utf16_buffer[utf16_buffer_len] = L'\n';

            HANDLE error_handle = GetStdHandle(STD_ERROR_HANDLE);

            CONSOLE_SCREEN_BUFFER_INFO console_info;
            GetConsoleScreenBufferInfo(error_handle, &console_info);

            WORD saved_attributes = console_info.wAttributes;

            SetConsoleTextAttribute(error_handle, FOREGROUND_INTENSITY | FOREGROUND_RED);
            WriteConsoleW(error_handle, utf16_buffer, utf16_buffer_len + 1, NULL, NULL);
            SetConsoleTextAttribute(error_handle, saved_attributes);
        #endif
    }

    exit(EXIT_FAILURE);
}

uint_least32_t *get_code(const char *file_path) {
    size_t utf8_code_len;

    int fd;
    FILE *fp;

    #if defined(__unix__) || (defined(__APPLE__) && defined(__MACH__)) || defined(__CYGWIN__) || defined(_WIN64)
        #if !defined(_WIN64)
            fd = open(file_path, O_RDONLY);
        #else
            errno = _sopen_s(&fd, file_path, _O_BINARY | _O_RDONLY, _SH_DENYWR, _S_IREAD);
        #endif

        if (fd == -1) {
            file_not_found_exit();
        }

        #if !defined(_WIN64)
            utf8_code_len = lseek(fd, 0, SEEK_END);
            lseek(fd, 0, SEEK_SET);
        #else
            utf8_code_len = _lseek(fd, 0, SEEK_END);
            _lseek(fd, 0, SEEK_SET);
        #endif
    #else
        fp = fopen(file_path, "r");

        if (!fp) {
            file_not_found_exit();
        }

        fseek(fp, 0, SEEK_END);
        utf8_code_len = (size_t)ftell(fp);
        fseek(fp, 0, SEEK_SET);
    #endif

    char *utf8_code = (char *)calloc(utf8_code_len + 1, sizeof(char));

    if (!utf8_code) {
        #if defined(__unix__) || (defined(__APPLE__) && defined(__MACH__)) || defined(__CYGWIN__)
            close(fd);
        #elif defined(_WIN64)
            _close(fd);
        #else
            fclose(fp);
        #endif

        exit_interpreter("");
    }

    #if defined(__unix__) || (defined(__APPLE__) && defined(__MACH__)) || defined(__CYGWIN__)
        read(fd, utf8_code, utf8_code_len);
        close(fd);
    #elif defined(_WIN64)
        _read(fd, utf8_code, utf8_code_len);
        _close(fd);
    #else
        fread(utf8_code, sizeof(char), utf8_code_len, fp);
        fclose(fp);
    #endif

    uint_least32_t *utf32_code = utf8_str_to_utf32((unsigned char *)utf8_code);
    free(utf8_code);

    if (!utf32_code) {
        exit_interpreter("");
    }

    return utf32_code;
}

void file_not_found_exit() {
    char msg[27];

    if (errno == ENOENT) {
        char src[] = "No existe la weá, poh, wn";

        #if !defined(_WIN64)
            strcpy(msg, src);
        #else
            strcpy_s(msg, 27, src);
        #endif
    }

    exit_interpreter(msg);
}

command_t get_command(const uint_least32_t *cmd_name, long long line, long long col) {
    size_t command_names_len = sizeof(command_names) / sizeof(*command_names);

    for (long long cmd = 0; cmd < command_names_len; cmd++) {
        if (!utf32_strcmp(cmd_name, command_names[cmd])) {
            if ((command_t)cmd == pichula) {
                loop_starts_count++;               
            } else if ((command_t)cmd == tula) {
                if (loop_ends_count == loop_starts_count) {
                    char msg[72 + (int)(log10(line) + 1) + (int)(log10(col) + 1)];

                    sprintf(
                        msg,
                        "Se encontró una tula sin su respectiva pichula en la línea %lld, columna %lld",
                        line,
                        col
                    );

                    exit_interpreter(msg);
                }

                loop_ends_count++;
            } else if ((command_t)cmd == pico) {
                if (loop_starts_count == loop_ends_count) {
                    char msg[50 + (int)(log10(line) + 1) + (int)(log10(col) + 1)];
                    sprintf(msg, "No debiste meter ese pico en la línea %lld, columna %lld", line, col);

                    exit_interpreter(msg);
                }
            }

            return (command_t)cmd;
        }
    }

    return (command_t)-1;
}

long long find_loop_start(const command_t *commands, long long i) {
    for (long long j = i - 1, loop_level = 1; j >= 0; j--) {
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

long long find_loop_end(const command_t *commands, size_t commands_count, long long i) {
    for (long long j = i + 1, loop_level = 1; j < commands_count; j++) {
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
