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

#include "la_weá_interpreter.h"
#include "la_weá_result_t.h"
#include "parse_code.h"
#include "interpret_commands.h"
#include "utfutils/utf_utils.h"

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <errno.h>

#if defined(_WIN64)
#include <windows.h>
#endif

static const char *get_code(const char *);
static void exit_with_file_open_error();
static long get_file_length_from_file_pointer(FILE *);

static la_weá_commands_sequence_t *build_commands_sequence_from_code(const char32_t *);

static void print_error_in_red(const char *);

void handle_error(const la_weá_error_t *error) {
    const char *error_msg = get_message_from_error(error);

    if (error) {
        free((la_weá_error_t *)error);
    }

	la_weá_exit_with_error_message(error_msg);
}

void la_weá_interpret(const char *file_path) {
    const char *code = get_code(file_path);

    const la_weá_commands_sequence_t *cmd_sequence = la_weá_parse_code(code);
    free((char *)code);

    la_weá_run(cmd_sequence);

    free(cmd_sequence->commands);
	free((la_weá_commands_sequence_t *)cmd_sequence);
}

const la_weá_commands_sequence_t *la_weá_parse_code(const char *code) {
    const char32_t *utf32_code = utf8_str_to_utf32((char8_t *)code);

    if (!utf32_code) {
        handle_error(NULL);
    }

    la_weá_commands_sequence_t *cmd_sequence = build_commands_sequence_from_code(utf32_code);

    const la_weá_result_t *result = parse_code(utf32_code, cmd_sequence);
    free((char32_t *)utf32_code);

    if (result->status == failure) {
        free(cmd_sequence->commands);
		free(cmd_sequence);

        handle_error(result->error);
    }

    return cmd_sequence;
}

void la_weá_run(const la_weá_commands_sequence_t *cmd_sequence) {
    const la_weá_result_t *result = interpret_commands(cmd_sequence);

    if (result->status == failure) {
        handle_error(result->error);
    }
}

void la_weá_exit_with_error_message(const char *error_msg) {
    print_error_in_red(error_msg && strlen(error_msg) > 0 ? error_msg : "Error interno");
    exit(EXIT_FAILURE);
}

const char *get_code(const char *file_path) {
    #if !defined(_WIN64)
    FILE *fp = fopen(file_path, "r");
    #else
    FILE *fp;
    errno = fopen_s(&fp, file_path, "r");
    #endif

    if (!fp) {
        exit_with_file_open_error();
    }

    long code_len = get_file_length_from_file_pointer(fp);
    char *code = calloc(code_len + 1, sizeof(char));

    if (!code) {
        fclose(fp);
        la_weá_exit_with_error_message(NULL);
    }

    fread(code, sizeof(char), code_len, fp);
    fclose(fp);

    return code;
}

void exit_with_file_open_error() {
    switch (errno) {
        case EACCES:
            la_weá_exit_with_error_message("No tenís permiso pa’ abrir la weá");
        case ENOENT:
            la_weá_exit_with_error_message("No existe la weá, pos, wn");
        default:
            la_weá_exit_with_error_message(NULL);
    }
}

long get_file_length_from_file_pointer(FILE *fp) {
    fseek(fp, 0, SEEK_END);
    long code_len = ftell(fp);
    fseek(fp, 0, SEEK_SET);

    return code_len;
}

la_weá_commands_sequence_t *build_commands_sequence_from_code(const char32_t *code) {
    size_t commands_size = (utf32_strlen(code) / 3) * sizeof(la_weá_command_t);
    la_weá_command_t *commands = malloc(commands_size);

    if (!commands) {
        free((char32_t *)code);
        handle_error(NULL);
    }

	la_weá_commands_sequence_t *cmd_sequence = malloc(sizeof(la_weá_commands_sequence_t));

	if (!cmd_sequence) {
		free((char32_t *)code);
		free(commands);

		handle_error(NULL);
	}

	cmd_sequence->commands = commands;
	cmd_sequence->commands_size = commands_size;
	cmd_sequence->commands_count = 0;

    return cmd_sequence;
}

#if !defined(_WIN64)
inline void print_error_in_red(const char *error_msg) {
    fprintf(stderr, "\x1b[1;31m%s\x1b[0m\n", error_msg);
}
#else
void print_error_in_red(const char *error_msg) {
    WCHAR utf16_buffer[(utf8_strlen((const char8_t *)error_msg) + 1)];

    int utf16_buffer_len = MultiByteToWideChar(
        CP_UTF8,
        0,
        error_msg,
        strlen(error_msg),
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
}
#endif
