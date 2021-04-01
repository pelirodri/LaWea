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

#include "la_weá_interpreter.h"
#include "utf_utils.h"
#include "get_code.h"
#include "parse_code.h"
#include "execute_commands.h"

#include <stdlib.h>
#include <string.h>

#if defined(_WIN64)
    #include <windows.h>

    static void print_error_windows(const char *);
#endif

command_t *restrict commands;
size_t commands_size, commands_count;

void la_weá_interpret(const char *file_path) {
    const uint_least32_t *code = get_code(file_path);

    la_weá_parse_code(code);
    free((void *)code);

    la_weá_run();
    free(commands);
}

void la_weá_parse_code(const uint_least32_t *code) {
    size_t code_len = utf32_strlen(code);

    commands_size = (size_t)(code_len / 3) * sizeof(command_t);
    commands = (command_t *)malloc(commands_size);

    if (!commands) {
        la_weá_exit_with_error(NULL);
    }

    for (long i = 0; i <= code_len; i++) {
        parse_code_char(code[i]);
    }

    check_loops_balance();
}

void la_weá_run() {
    execute_commands();
}

void la_weá_exit_with_error(const char *err_msg) {
    if (!err_msg || strlen(err_msg) == 0) {
        err_msg = "Error interno";
    }

    #if !defined(_WIN64)
        fprintf(stderr, "\x1b[1;31m%s\x1b[0m\n", err_msg);
    #else
        print_error_windows(err_msg);
    #endif

    exit(EXIT_FAILURE);
}

#if defined(_WIN64)
    void print_error_windows(const char *err_msg) {
        WCHAR utf16_buffer[(utf8_strlen((const unsigned char *)err_msg) + 1)];

        int utf16_buffer_len = MultiByteToWideChar(
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
    }
#endif
