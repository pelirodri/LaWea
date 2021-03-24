//
// Copyright © 2021 Rodrigo Pelissier. All rights reserved.
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

#include "execute_commands.h"
#include "la_weá_interpreter.h"
#include "utf_utils.h"

#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <inttypes.h>
#include <errno.h>

#if defined(_WIN64)
    #include <windows.h>
#endif

static void execute_command(command_t, long *);
static void execute_maricón();
static void execute_maraco();
static void execute_weón();
static void execute_aweonao();
static void execute_maraca();
static void execute_chucha();
static void execute_puta();
static void double_cells_size();
static void execute_pichula(long *);
static long find_loop_end(long);
static void execute_tula(long *);
static long find_loop_start(long);
static void execute_pico(long *);
static void execute_ctm();
static bool is_value_in_unicode_range(int64_t);
static void print_char();
static void execute_quéweá();
static void read_char();
static void handle_partial_line_input();
static void execute_chúpala();
static void execute_brígido();
static void handle_full_line_num(char *);
static bool is_valid_num_input(const char *);
static void execute_perkin();
static void execute_mierda();

extern command_t *commands;
extern size_t commands_count;

static size_t cells_size = 8 * sizeof(int64_t);
static int64_t *cells;
static long cur_cell;

void execute_commands() {
    setvbuf(stdout, NULL, _IONBF, 0);
    
    cells = (int64_t *)calloc(8, sizeof(int64_t));    

    if (!cells) {
        la_weá_print_and_exit(NULL);
    }

    for (long i = 0; i < commands_count; i++) {
        execute_command(commands[i], &i);
    }

    free(cells);
}

void execute_command(command_t command, long *cmd_idx) {
	switch (command) {
        case maricón:
            execute_maricón();
            break;
        case maraco:
            execute_maraco();
            break;
        case weón:
            execute_weón();
            break;
        case aweonao:
            execute_aweonao();
            break;
        case maraca:
            execute_maraca();
            break;
        case chucha:
            execute_chucha();
            break;
        case puta:
            execute_puta();
            break;
        case pichula:
            execute_pichula(cmd_idx);
            break;
        case tula:
            execute_tula(cmd_idx);
            break;
        case pico:
            execute_pico(cmd_idx);
            break;
        case ctm:
            execute_ctm();
            break;
        case quéweá:
           	execute_quéweá();
            break;
        case chúpala:
            execute_chúpala();
            break;
        case brígido:
            execute_brígido();
            break;
        case perkin:
           	execute_perkin();
            break;
        case mierda:
            execute_mierda();
            break;
    }
}

inline void execute_maricón() {
	cells[cur_cell]--;
}

inline void execute_maraco() {
	cells[cur_cell] -= 2;
}

inline void execute_weón() {
	cells[cur_cell]++;
}

inline void execute_aweonao() {
	cells[cur_cell] += 2;
}

inline void execute_maraca() {
	cells[cur_cell] = 0;
}

void execute_chucha() {
	if (cur_cell == 0) {
        free(cells);
        la_weá_print_and_exit("Te saliste pa’ la izquierda, aweona’o");
    }

    cur_cell--;
}

void execute_puta() {
	if (cur_cell == (cells_size / sizeof(int64_t)) - 1) {
        double_cells_size();
        memset(cells + (cur_cell + 1), 0, cells_size / 2);
    }

    cur_cell++;
}

void double_cells_size() {
	int64_t *tmp = (int64_t *)realloc(cells, (cells_size *= 2));

    if (!tmp) {
        free(cells);
        la_weá_print_and_exit(NULL);
    }

    cells = tmp;
}

void execute_pichula(long *cmd_idx) {
	if (cells[cur_cell] == 0) {
        *cmd_idx = find_loop_end(*cmd_idx);
    }
}

long find_loop_end(long cmd_idx) {
    for (long i = cmd_idx + 1, loop_level = 1; i < commands_count; i++) {
        if (commands[i] == pichula) {
            loop_level++;
        } else if (commands[i] == tula) {
            loop_level--;
        }

        if (loop_level == 0) {
            return i;
        }
    }

    return -1;
}

void execute_tula(long *cmd_idx) {
	if (cells[cur_cell] != 0) {
        *cmd_idx = find_loop_start(*cmd_idx);
    }
}

long find_loop_start(long cmd_idx) {
    for (long i = cmd_idx - 1, loop_level = 1; i >= 0; i--) {
        if (commands[i] == tula) {
            loop_level++;
        } else if (commands[i] == pichula) {
            loop_level--;
        }

        if (loop_level == 0) {
            return i;
        }
    }

    return -1;
}

inline void execute_pico(long *cmd_idx) {
	*cmd_idx = find_loop_end(*cmd_idx);
}

void execute_ctm() {
	if (is_value_in_unicode_range(cells[cur_cell])) {
        print_char();
    } else {
        printf("%s", "\uFFFD");
    }
}

inline bool is_value_in_unicode_range(int64_t value) {
	return value >= 0 && value <= 0x10FFFF;
}

#if !defined(_WIN64)
	void print_char() {
		unsigned char *utf8_output = utf32_char_to_utf8(cells[cur_cell]);
	    printf("%s", (const char *)utf8_output);
	    free(utf8_output);
	}
#else
	void print_char() {
		const uint_least16_t *utf16_char = utf32_char_to_utf16(cells[cur_cell]);
	    WriteConsoleW(GetStdHandle(STD_OUTPUT_HANDLE), utf16_char, utf16_strlen(utf16_char), NULL, NULL);
	}
#endif

void execute_quéweá() {
	read_char();
}

#if !defined(_WIN64)
	void read_char() {
		char utf8_input[6] = {'\0'};

        if (fgets(utf8_input, sizeof(utf8_input), stdin)[strlen(utf8_input) - 1] == '\n') {
        	utf8_input[strcspn(utf8_input, "\n")] = '\0';
            cells[cur_cell] = utf8_char_to_utf32((unsigned char *)utf8_input);
        } else {
            handle_partial_line_input();
        }
	}
#else
	void read_char() {
		WCHAR utf16_input[5] = {L'\0'};

        ULONG read_char_count;
        ReadConsoleW(GetStdHandle(STD_INPUT_HANDLE), utf16_input, sizeof(utf16_input) / 2, &read_char_count, NULL);

        if (utf16_input[read_char_count - 1] == L'\n') {
            utf16_input[wcscspn(utf16_input, L"\r")] = L'\0';
            cells[cur_cell] = utf16_char_to_utf32(utf16_input);
        } else {
            handle_partial_line_input();
        }
	}
#endif

void handle_partial_line_input() {
	while (getchar() != '\n') {}
    cells[cur_cell] = 0;
}

inline void execute_chúpala() {
	printf("%" PRId64, cells[cur_cell]);
}

void execute_brígido() {
	char num_input[23] = {0};

    if (fgets(num_input, 23, stdin)[strlen(num_input) - 1] == '\n') {
        handle_full_line_num(num_input);
    } else {
        handle_partial_line_input();
    }
}

void handle_full_line_num(char *num_input) {
	if (!is_valid_num_input(num_input)) {
    	num_input[0] = '\0';
    }

    cells[cur_cell] = strtoll(num_input, NULL, 10);

    if (errno == ERANGE) {
        cells[cur_cell] = 0;
    }
}

bool is_valid_num_input(const char *num_input) {
	for (int i = 0; i < strlen(num_input) - 1; i++) {
        if (!isdigit(num_input[i]) && !(i == 0 && num_input[i] == '-')) {
            return false;
        }
    }

    return true;
}

void execute_perkin() {
	static bool is_copy_set = false;
    static int64_t cell_value_copy;

	if (is_copy_set) {
        cells[cur_cell] = cell_value_copy;
        is_copy_set = false;
    } else {
        cell_value_copy = cells[cur_cell];
        is_copy_set = true;
    }
}

void execute_mierda() {
	free(cells);
    exit(EXIT_SUCCESS);
}
