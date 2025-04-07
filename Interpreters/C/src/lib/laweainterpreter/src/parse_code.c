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

#include "parse_code.h"

#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <stdbool.h>

static const la_weá_error_t *parse_code_char(char32_t, la_weá_commands_sequence_t *);
static bool is_cmd_boundary(char32_t);

static const la_weá_error_t *handle_potential_cmd(
    char32_t *restrict,
    size_t *restrict,
    la_weá_commands_sequence_t *restrict
);

static const la_weá_error_t *parse_cmd(const char32_t *restrict, la_weá_commands_sequence_t *restrict);
static la_weá_command_t get_cmd_from_name(const char32_t *);
static const la_weá_error_t *handle_loop_balancing(la_weá_command_t);
static void handle_pichula_cmd();
static const la_weá_error_t *handle_tula_cmd();
static const la_weá_error_t *handle_pico_cmd();
static const la_weá_error_t *add_char_to_cmd_name(char32_t *restrict, size_t *restrict, char32_t);
static const la_weá_error_t *validate_cmd_char(char32_t);
static const la_weá_error_t *validate_cmd_name_length(const char32_t *, size_t);
static void parsed_code_char(char32_t, bool *);

static const la_weá_error_t *check_loops_balance();

static size_t line = 1;
static size_t col = 1;

static size_t loop_open_commands_count;
static size_t loop_close_commands_count;

static const char32_t cmd_names[][8 * sizeof(char32_t)] = { 
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

const la_weá_result_t *parse_code(const char32_t *restrict code, la_weá_commands_sequence_t *restrict cmd_sequence) {
    const la_weá_error_t *error = NULL;

    for (size_t i = 0, code_len = utf32_strlen(code); i <= code_len; i++) {
        if ((error = parse_code_char(code[i], cmd_sequence))) {
            return create_failure_result(error);
        }
    }

    if ((error = check_loops_balance())) {
        return create_failure_result(error);
    }

    return create_success_result();
}

const la_weá_error_t *parse_code_char(char32_t code_char, la_weá_commands_sequence_t *cmd_sequence) {
    static bool is_mid_comment;

    if (code_char == U'#') {
        is_mid_comment = true;
    }

    static char32_t cmd_name[8 * sizeof(char32_t)];
    static size_t cmd_name_idx;

    const la_weá_error_t *error = NULL;

    if (is_cmd_boundary(code_char)) {
        if ((error = handle_potential_cmd(cmd_name, &cmd_name_idx, cmd_sequence))) {
            return error;
        }
    } else if (!is_mid_comment) {
        if ((error = add_char_to_cmd_name(cmd_name, &cmd_name_idx, code_char))) {
            return error;
        }
    }

    parsed_code_char(code_char, &is_mid_comment);

    return NULL;
}

inline bool is_cmd_boundary(char32_t code_char) {
    return isspace(code_char) || code_char == U'#' || code_char == U'\0';
}

const la_weá_error_t *handle_potential_cmd(
	char32_t *restrict cmd_name,
	size_t *restrict cmd_name_idx,
	la_weá_commands_sequence_t *restrict cmd_sequence
) {
    if (*cmd_name_idx > 0) {   
        const la_weá_error_t *error = parse_cmd(cmd_name, cmd_sequence);

        if (error) {
            return error;
        }

        memset(cmd_name, U'\0', 7 * sizeof(char32_t));
        *cmd_name_idx = 0;
    }

    return NULL;
}

const la_weá_error_t *parse_cmd(const char32_t *restrict cmd_name, la_weá_commands_sequence_t *restrict cmd_sequence) {
    la_weá_command_t cmd = get_cmd_from_name(cmd_name);

    if ((int)cmd == -1) {
        return create_invalid_command_error(cmd_name, line, col - utf32_strlen(cmd_name));
    }

    const la_weá_error_t *error = handle_loop_balancing(cmd);

    if (error) {
        return error;
    }

    if ((cmd_sequence->commands_count * sizeof(la_weá_command_t)) == cmd_sequence->commands_size) {
        cmd_sequence->commands = realloc(cmd_sequence->commands, (cmd_sequence->commands_size *= 2));

        if (!cmd_sequence->commands) {
            return create_internal_error();
        }
    }

    cmd_sequence->commands[cmd_sequence->commands_count++] = cmd;

    return NULL;
}

la_weá_command_t get_cmd_from_name(const char32_t *cmd_name) {
    size_t cmd_names_count = sizeof(cmd_names) / sizeof(*cmd_names);

    for (size_t cmd = 0; cmd < cmd_names_count; cmd++) {
        if (utf32_strcmp(cmd_name, cmd_names[cmd]) == 0) {
            return (la_weá_command_t)cmd;
        }
    }

    return (la_weá_command_t)-1;
}

const la_weá_error_t *handle_loop_balancing(la_weá_command_t cmd) {
    if (cmd == pichula) {
        handle_pichula_cmd();  
    } else if (cmd == tula) {
        return handle_tula_cmd();
    } else if (cmd == pico) {
        return handle_pico_cmd();
    }

    return NULL;
}

inline void handle_pichula_cmd() {
    loop_open_commands_count++;
}

const la_weá_error_t *handle_tula_cmd() {
    if (loop_close_commands_count == loop_open_commands_count) {
        return create_unmatched_tula_error(line, col - utf32_strlen(U"tula"));
    }

    loop_close_commands_count++;

    return NULL;
}

const la_weá_error_t *handle_pico_cmd() {
    if (loop_open_commands_count == loop_close_commands_count) {
        return create_misplaced_pico_error(line, col - utf32_strlen(U"pico"));
    }

    return NULL;
}

const la_weá_error_t *add_char_to_cmd_name(
    char32_t *restrict cmd_name,
    size_t *restrict cmd_name_idx,
    char32_t code_char
) {
    const la_weá_error_t *error = NULL;

    if ((error = validate_cmd_char(code_char)) || (error = validate_cmd_name_length(cmd_name, *cmd_name_idx + 1))) {
        return error;
    }

    cmd_name[(*cmd_name_idx)++] = code_char;

    return NULL;
}

const la_weá_error_t *validate_cmd_char(char32_t cmd_char) {
    if (!utf32_strchr(U"abcdeghiklmnopqrtuwáéíóú", cmd_char)) {
        return create_invalid_character_error(cmd_char, line, col);
    }

    return NULL;
}

const la_weá_error_t *validate_cmd_name_length(const char32_t *cmd_name, size_t cmd_name_len) {
    if (cmd_name_len >= 8) {
        return create_too_long_command_error(line, col - utf32_strlen(cmd_name));
    }

    return NULL;
}

void parsed_code_char(char32_t code_char, bool *is_mid_comment) {
    if (code_char == U'\n') {
        line++;
        col = 1;

        *is_mid_comment = false;
    } else {
        col++;
    }
}

const la_weá_error_t *check_loops_balance() {
    if (loop_open_commands_count != loop_close_commands_count) {
        return create_unmatched_pichulas_error();
    }

    return NULL;
}
