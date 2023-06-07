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

#include "get_code.h"
#include "utfutils/utf_utils.h"

#include <stdio.h>
#include <stdlib.h>
#include <errno.h>

extern void la_weá_exit_with_error_message(const char *);

static const char *get_code_utf8(const char *file_path);
static void file_open_error_exit();
static long get_file_length(FILE *);

const char *get_code(const char *file_path) {
    #if !defined(_WIN64)
    FILE *fp = fopen(file_path, "r");
    #else
    FILE *fp;
    errno = fopen_s(&fp, file_path, "r");
    #endif

    if (!fp) {
        file_open_error_exit();
    }

    long code_len = get_file_length(fp);
    char *code = (char *)calloc(code_len + 1, sizeof(char));

    if (!code) {
        fclose(fp);
        la_weá_exit_with_error_message(NULL);
    }

    fread(code, sizeof(char), code_len, fp);
    fclose(fp);

    return code;
}

void file_open_error_exit() {
    switch (errno) {
        case EACCES:
            la_weá_exit_with_error_message("No tenís permiso pa’ abrir la weá");
        case ENOENT:
            la_weá_exit_with_error_message("No existe la weá, pos, wn");
        default:
            la_weá_exit_with_error_message(NULL);
    }
}

long get_file_length(FILE *fp) {
    fseek(fp, 0, SEEK_END);
    long utf8_code_len = ftell(fp);
    fseek(fp, 0, SEEK_SET);

    return utf8_code_len;
}