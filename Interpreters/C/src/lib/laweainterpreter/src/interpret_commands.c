//
// Copyright © 2023 Rodrigo Pelissier. All rights reserved.
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

#include "interpret_commands.h"
#include "utfutils/utf_utils.h"

#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <inttypes.h>
#include <errno.h>
#include <stdbool.h>

#if defined(_WIN64)
#include <windows.h>
#endif

static const la_weá_error_t *interpret_cmd_at_idx(size_t *restrict, const la_weá_commands_sequence_t *restrict);

static void interpret_maricón();
static void interpret_maraco();
static void interpret_weón();
static void interpret_aweonao();
static void interpret_maraca();
static const la_weá_error_t *interpret_chucha();
static const la_weá_error_t *interpret_puta();
static void interpret_pichula(const la_weá_commands_sequence_t *restrict, size_t *restrict);
static void interpret_tula(const la_weá_commands_sequence_t *restrict, size_t *restrict);
static void interpret_pico(const la_weá_commands_sequence_t *restrict, size_t *restrict);
static void interpret_ctm();
static void interpret_quéweá();
static void interpret_chúpala();
static void interpret_brígido();
static void interpret_perkin();
static void interpret_mierda();

static size_t find_loop_end(const la_weá_commands_sequence_t *, size_t);
static size_t find_loop_start(const la_weá_commands_sequence_t *, size_t);

static bool is_value_in_unicode_range(int64_t);
static void print_char();
static void read_char();

static void handle_partial_line_input();
static void handle_full_line_num(char *);
static bool is_valid_num_input(const char *);

static size_t cells_size = 8 * sizeof(int64_t);
static int64_t *cells;
static size_t cur_cell;

const la_weá_result_t *interpret_commands(const la_weá_commands_sequence_t *cmd_sequence) {
    setvbuf(stdout, NULL, _IONBF, 0);
    
    cells = calloc(8, sizeof(int64_t));    

    if (!cells) {
        return create_failure_result(NULL);
    }

    const la_weá_error_t *error = NULL;  

    for (size_t i = 0; i < cmd_sequence->commands_count; i++) {  
        if ((error = interpret_cmd_at_idx(&i, cmd_sequence))) {
            free(cells);
            return create_failure_result(error);
        }
    }

    free(cells);

    return create_success_result();
}

const la_weá_error_t *interpret_cmd_at_idx(
    size_t *restrict cmd_idx,
    const la_weá_commands_sequence_t *restrict cmd_sequence
) {
    const la_weá_error_t *error = NULL;

	switch (cmd_sequence->commands[*cmd_idx]) {
        case maricón:
            interpret_maricón();
            break;
        case maraco:
            interpret_maraco();
            break;
        case weón:
            interpret_weón();
            break;
        case aweonao:
            interpret_aweonao();
            break;
        case maraca:
            interpret_maraca();
            break;
        case chucha:
            error = interpret_chucha();
            break;
        case puta:
            error = interpret_puta();
            break;
        case pichula:
            interpret_pichula(cmd_sequence, cmd_idx);
            break;
        case tula:
            interpret_tula(cmd_sequence, cmd_idx);
            break;
        case pico:
            interpret_pico(cmd_sequence, cmd_idx);
            break;
        case ctm:
            interpret_ctm();
            break;
        case quéweá:
           	interpret_quéweá();
            break;
        case chúpala:
            interpret_chúpala();
            break;
        case brígido:
            interpret_brígido();
            break;
        case perkin:
           	interpret_perkin();
            break;
        case mierda:
            interpret_mierda();
            break;
    }

    return error;
}

inline void interpret_maricón() {
	cells[cur_cell]--;
}

inline void interpret_maraco() {
	cells[cur_cell] -= 2;
}

inline void interpret_weón() {
	cells[cur_cell]++;
}

inline void interpret_aweonao() {
	cells[cur_cell] += 2;
}

inline void interpret_maraca() {
	cells[cur_cell] = 0;
}

const la_weá_error_t *interpret_chucha() {
	if (cur_cell == 0) {
        return create_out_of_bounds_error();
    }

    cur_cell--;

    return NULL;
}

const la_weá_error_t *interpret_puta() {
	if (cur_cell == (cells_size / sizeof(int64_t)) - 1) {
        cells = realloc(cells, (cells_size *= 2));

        if (!cells) {
            return create_internal_error();
        }

        memset(cells + (cur_cell + 1), 0, cells_size / 2);
    }

    cur_cell++;

    return NULL;
}

void interpret_pichula(const la_weá_commands_sequence_t *cmd_sequence, size_t *cmd_idx) {
	if (cells[cur_cell] == 0) {
        *cmd_idx = find_loop_end(cmd_sequence, *cmd_idx);
    }
}

void interpret_tula(const la_weá_commands_sequence_t *cmd_sequence, size_t *cmd_idx) {
	if (cells[cur_cell] != 0) {
        *cmd_idx = find_loop_start(cmd_sequence, *cmd_idx);
    }
}

void interpret_pico(const la_weá_commands_sequence_t *cmd_sequence, size_t *cmd_idx) {
	*cmd_idx = find_loop_end(cmd_sequence, *cmd_idx);
}

void interpret_quéweá() {
	read_char();
}

inline bool is_value_in_unicode_range(int64_t value) {
	return value >= 0 && value <= 0x10FFFF;
}

void interpret_ctm() {
	if (is_value_in_unicode_range(cells[cur_cell])) {
        print_char();
    } else {
        printf("%s", "\uFFFD");
    }
}

inline void interpret_chúpala() {
	printf("%" PRId64, cells[cur_cell]);
}

void interpret_brígido() {
	char num_input[23] = {'\0'};

    if (fgets(num_input, 23, stdin)[strlen(num_input) - 1] == '\n') {
        handle_full_line_num(num_input);
    } else {
        handle_partial_line_input();
    }
}

void interpret_perkin() {
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

void interpret_mierda() {
	free(cells);
    exit(EXIT_SUCCESS);
}

size_t find_loop_end(const la_weá_commands_sequence_t *cmd_sequence, size_t cmd_idx) {
    for (size_t i = cmd_idx + 1, loop_level = 1; i < cmd_sequence->commands_count; i++) {
        if (cmd_sequence->commands[i] == pichula) {
            loop_level++;
        } else if (cmd_sequence->commands[i] == tula) {
            loop_level--;
        }

        if (loop_level == 0) {
            return i;
        }
    }

    return -1;
}

size_t find_loop_start(const la_weá_commands_sequence_t *cmd_sequence, size_t cmd_idx) {
    for (size_t i = cmd_idx - 1, loop_level = 1; i >= 0; i--) {
        if (cmd_sequence->commands[i] == tula) {
            loop_level++;
        } else if (cmd_sequence->commands[i] == pichula) {
            loop_level--;
        }

        if (loop_level == 0) {
            return i;
        }
    }

    return -1;
}

#if !defined(_WIN64)
void print_char() {
    const char8_t *utf8_output = utf32_char_to_utf8(cells[cur_cell]);
    printf("%s", (const char *)utf8_output);
    free((char8_t *)utf8_output);
}
#else
void print_char() {
    const char16_t *utf16_char = utf32_char_to_utf16(cells[cur_cell]);
    WriteConsoleW(GetStdHandle(STD_OUTPUT_HANDLE), utf16_char, utf16_strlen(utf16_char), NULL, NULL);
    free((char16_t *)utf16_char);
}
#endif

#if !defined(_WIN64)
void read_char() {
    char utf8_input[6] = {'\0'};

    if (fgets(utf8_input, sizeof(utf8_input), stdin)[strlen(utf8_input) - 1] == '\n') {
        utf8_input[strcspn(utf8_input, "\n")] = '\0';
        cells[cur_cell] = utf8_char_to_utf32((char8_t *)utf8_input);
    } else {
        handle_partial_line_input();
    }
}
#else
void read_char() {
    char16_t utf16_input[5] = {u'\0'};

    ULONG read_char_count;
    ReadConsoleW(GetStdHandle(STD_INPUT_HANDLE), utf16_input, 5, &read_char_count, NULL);

    if (utf16_input[read_char_count - 1] == u'\n') {
        utf16_input[(int)(utf16_strchr(utf16_input, u"\r") - utf16_input)] = u'\0';
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
	for (size_t i = 0; i < strlen(num_input) - 1; i++) {
        if (!isdigit(num_input[i]) && !(i == 0 && num_input[i] == '-')) {
            return false;
        }
    }

    return true;
}
