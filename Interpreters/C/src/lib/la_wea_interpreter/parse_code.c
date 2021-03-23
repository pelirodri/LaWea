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

#include "parse_code.h"
#include "la_weá_interpreter.h"
#include "utf_utils.h"

#include <string.h>
#include <ctype.h>

static long line = 1, col = 1;
static long loop_open_cmds_count, loop_close_cmds_count;

static bool is_command_boundary(uint_least32_t);
static void handle_potential_command(uint_least32_t *, long *);
static void parse_command(const uint_least32_t *);
static command_t get_command_from_name(const uint_least32_t *);
static void found_invalid_command_exit(const uint_least32_t *);
static void handle_loop_balancing(command_t);
static void handle_pichula_command();
static void handle_tula_command();
static void handle_pico_command();
static void double_commands_size();
static void add_char_to_cmd(uint_least32_t *restrict, long *restrict, uint_least32_t);
static void validate_cmd_char(uint_least32_t);
static void validate_cmd_length(const uint_least32_t *, size_t);
static void parsed_code_char(uint_least32_t, bool *);

extern command_t *commands;
extern size_t commands_size, commands_count;

static const uint_least32_t cmd_names[][8 * sizeof(uint_least32_t)] = { 
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

void parse_code_char(uint_least32_t code_char) {
    static bool is_mid_comment;

    if (code_char == U'#') {
        is_mid_comment = true;
    }

    static uint_least32_t cmd_name[8 * sizeof(uint_least32_t)];
    static long cmd_name_idx;

    if (is_command_boundary(code_char)) {
        handle_potential_command(cmd_name, &cmd_name_idx);
    } else if (!is_mid_comment) {
        add_char_to_cmd(cmd_name, &cmd_name_idx, code_char);
    }

    parsed_code_char(code_char, &is_mid_comment);
}

void check_loops_balance() {
    if (loop_open_cmds_count != loop_close_cmds_count) {
        free(commands);
        la_weá_print_and_exit("O te sobran pichulas o te faltan tulas");
    }
}

inline bool is_command_boundary(uint_least32_t code_char) {
    return isspace(code_char) || code_char == U'#' || code_char == U'\0';
}

void handle_potential_command(uint_least32_t *cmd_name, long *cmd_name_idx) {
    if (*cmd_name_idx > 0) {      
        parse_command(cmd_name);

        memset(cmd_name, U'\0', 7 * sizeof(uint_least32_t));
        *cmd_name_idx = 0;
    }
}

void parse_command(const uint_least32_t *cmd_name) {
    command_t cmd = get_command_from_name(cmd_name);

    if ((int)cmd == -1) {
        found_invalid_command_exit(cmd_name);
    }

    handle_loop_balancing(cmd);

    if ((commands_count * sizeof(command_t)) == commands_size) {
        double_commands_size();
    }

    commands[commands_count++] = cmd;
}

command_t get_command_from_name(const uint_least32_t *cmd_name) {
    size_t cmd_names_len = sizeof(cmd_names) / sizeof(*cmd_names);

    for (int cmd = 0; cmd < cmd_names_len; cmd++) {
        if (utf32_strcmp(cmd_name, cmd_names[cmd]) == 0) {
            return (command_t)cmd;
        }
    }

    return (command_t)-1;
}

void found_invalid_command_exit(const uint_least32_t *cmd_name) {
    free(commands);

    int line_len = snprintf(NULL, 0, "%ld", line);
    int col_len = snprintf(NULL, 0, "%ld", col - (long)utf32_strlen(cmd_name));

    const char msg_template[] = "'%s' no es un comando válido, pos, saco de weas (línea: %ld, columna: %ld)";
    char msg[sizeof(msg_template) + (long)utf32_strlen(cmd_name) + line_len + col_len];

    unsigned char *utf8_cmd_name = utf32_str_to_utf8(cmd_name);

    if (!utf8_cmd_name) {
        la_weá_print_and_exit(NULL);
    }

    sprintf(msg, msg_template, utf8_cmd_name, line, col - (long)utf32_strlen(cmd_name));

    free(utf8_cmd_name);
    la_weá_print_and_exit(msg);
}

void handle_loop_balancing(command_t cmd) {
    if ((command_t)cmd == pichula) {
        handle_pichula_command();  
    } else if ((command_t)cmd == tula) {
        handle_tula_command();
    } else if ((command_t)cmd == pico) {
        handle_pico_command();
    }
}

inline void handle_pichula_command() {
    loop_open_cmds_count++;  
}

void handle_tula_command() {
    if (loop_close_cmds_count == loop_open_cmds_count) {
        int line_len = snprintf(NULL, 0, "%ld", line);
        int col_len = snprintf(NULL, 0, "%ld", col - (long)utf32_strlen(U"tula"));

        const char msg_template[] = "Se encontró una tula sin su respectiva pichula en la línea %ld, columna %ld";
        char msg[sizeof(msg_template) + line_len + col_len];

        sprintf(msg, msg_template, line, col - (long)utf32_strlen(U"tula"));

        la_weá_print_and_exit(msg);
    }

    loop_close_cmds_count++;
}

void handle_pico_command() {
    if (loop_open_cmds_count == loop_close_cmds_count) {
        int line_len = snprintf(NULL, 0, "%ld", line);
        int col_len = snprintf(NULL, 0, "%ld", col - (long)utf32_strlen(U"pico"));

        const char msg_template[] = "No debiste meter ese pico en la línea %ld, columna %ld";
        char msg[sizeof(msg_template) + line_len + col_len];

        sprintf(msg, msg_template, line, col - (long)utf32_strlen(U"pico"));

        la_weá_print_and_exit(msg);
    }
}

void double_commands_size() {
    command_t *tmp = (command_t *)realloc(commands, (commands_size *= 2));

    if (!tmp) {
        free(commands);
        la_weá_print_and_exit(NULL);
    }

    commands = tmp;
}

void add_char_to_cmd(uint_least32_t *restrict cmd_name, long *restrict cmd_name_idx, uint_least32_t code_char) {
    validate_cmd_char(code_char);
    validate_cmd_length(cmd_name, *cmd_name_idx + 1);

    cmd_name[(*cmd_name_idx)++] = code_char;
}

void validate_cmd_char(uint_least32_t cmd_char) {
    if (!utf32_strchr(U"abcdeghiklmnopqrtuwáéíóú", cmd_char)) {
        free(commands);

        int line_len = snprintf(NULL, 0, "%ld", line), col_len = snprintf(NULL, 0, "%ld", col);

        const char msg_template[] = "'%s' no es parte de La Weá, tonto qlo (línea: %ld, columna: %ld)";
        char msg[sizeof(msg_template) + sizeof(uint_least32_t) + line_len + col_len];

        unsigned char *utf8_char = utf32_char_to_utf8(cmd_char);

        if (!utf8_char) {
            la_weá_print_and_exit(NULL);
        }

        sprintf(msg,msg_template, utf8_char,line, col);

        free(utf8_char);
        la_weá_print_and_exit(msg);
    }
}

void validate_cmd_length(const uint_least32_t *cmd_name, size_t cmd_name_len) {
    if (cmd_name_len >= 8) {
        free(commands);

        int line_len = snprintf(NULL, 0, "%ld", line);
        int col_len = snprintf(NULL, 0, "%ld", col - (long)utf32_strlen(cmd_name));

        const char msg_template[] = 
            "¿Vos creís que yo soy weón, CTM? Te gustan largos, parece (línea: %ld, columna: %ld)";
        char msg[sizeof(msg_template) + line_len + col_len];

        sprintf(msg, msg_template, line, col - (long)utf32_strlen(cmd_name));

        la_weá_print_and_exit(msg);
    }
}

void parsed_code_char(uint_least32_t code_char, bool *is_mid_comment) {
    if (code_char == U'\n') {
        line++;
        col = 1;

        *is_mid_comment = false;
    } else {
        col++;
    }
}
