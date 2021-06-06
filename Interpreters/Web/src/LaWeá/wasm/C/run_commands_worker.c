#include "run_commands.h"
#include "utf_utils.h"

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <wchar.h>
#include <ctype.h>
#include <errno.h>
#include <emscripten.h>

static void copy_commands_from_data(const void *);
static void init_cells();
static void interpret_commands();
static void interpret_cmd_at_idx(int *);
static void interpret_maricón();
static void interpret_maraco();
static void interpret_weón();
static void interpret_aweonao();
static void interpret_maraca();
static void interpret_chucha();
static void interpret_puta();
static void double_cells_size();
static void interpret_pichula(int *);
static int find_loop_end(const uint8_t *, size_t, int);
static void interpret_tula(int *);
static int find_loop_start(const uint8_t *, int);
static void interpret_pico(int *);
static void interpret_ctm();
static void copy_char_to_response(void *);
static bool is_value_in_unicode_range(int64_t);
static void interpret_quéweá(int);
static void char_was_read();
static void update_cell_from_char();
static void wait_for_char(int);
static void interpret_chúpala();
static void interpret_brígido(int);
static void num_was_read();
static void update_cell_from_num();
static void copy_num_from_request();
static bool is_valid_num_input(const char *);
static void wait_for_num(int);
static void interpret_perkin();
static void interpret_mierda();
static void free_resources();
static void worker_exit_with_optional_error_message(const char *);
static void worker_exit_with_response(char*, size_t);
static void copy_input_from_data(const void *);

static la_weá_request_t request;

static size_t cells_size = 8 * sizeof(int64_t);;
static int64_t *cells;
static int cur_cell;

static bool is_copy_set;
static int64_t cell_value_copy;

static int last_cmd_idx = -1;

EMSCRIPTEN_KEEPALIVE
void worker_run_commands(char *data, int size) {
    copy_commands_from_data((void *)data);
    init_cells();

    errno = 0;

    interpret_commands();
    worker_exit_with_optional_error_message(NULL);
}

EMSCRIPTEN_KEEPALIVE
void worker_received_input(char *data, int size) {
    copy_input_from_data(data);
    interpret_commands();
}

void copy_commands_from_data(const void *data) {
    memcpy(&request.cmd_count, data, sizeof(int));

    request.cmd_ptr = (uint8_t *)malloc(request.cmd_count);
    memcpy((void *)request.cmd_ptr, data + sizeof(int), request.cmd_count);
}

void init_cells() {
    cells = (int64_t *)calloc(8, sizeof(int64_t));

    if (!cells) {
        worker_exit_with_optional_error_message("Error interno");
    }
}

void interpret_commands() {
    for (int i = last_cmd_idx != -1 ? last_cmd_idx : 0; i < request.cmd_count; i++) {
        interpret_cmd_at_idx(&i);
    }
}

void interpret_cmd_at_idx(int *cmd_idx) {
    switch ((la_weá_command_t)*(request.cmd_ptr + *cmd_idx)) {
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
            interpret_chucha();
            break;
        case puta:
            interpret_puta();
            break;
        case pichula:
            interpret_pichula(cmd_idx);
            break;
        case tula:
            interpret_tula(cmd_idx);
            break;
        case pico:
            interpret_pico(cmd_idx);
            break;
        case ctm:
            interpret_ctm();
            break;
        case quéweá:
            interpret_quéweá(*cmd_idx);
            break;
        case chúpala:
            interpret_chúpala();
            break;
        case brígido:
            interpret_brígido(*cmd_idx);
            break;
        case perkin:
            interpret_perkin();
            break;
        case mierda:
            interpret_mierda();
            break;
    }
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

void interpret_chucha() {
    if (cur_cell == 0) {
        worker_exit_with_optional_error_message("Te saliste pa’ la izquierda, aweona’o");
    }

    cur_cell--;
}

void interpret_puta() {
    if (cur_cell == (cells_size / sizeof(int64_t)) - 1) {
        double_cells_size();
        memset(cells + (cur_cell + 1), 0, cells_size / 2);
    }

    cur_cell++;
}

void double_cells_size() {
    int64_t *tmp = (int64_t *)realloc(cells, (cells_size *= 2));

    if (!tmp) {
        worker_exit_with_optional_error_message("Error interno");
    }

    cells = tmp;
}

void interpret_pichula(int *cmd_idx) {
    if (cells[cur_cell] == 0) {
        *cmd_idx = find_loop_end(request.cmd_ptr, request.cmd_count, *cmd_idx);
    }
}

int find_loop_end(const uint8_t *cmd_ptr, size_t cmd_count, int cmd_idx) {
    for (int i = cmd_idx + 1, loop_level = 1; i < cmd_count; i++) {
        if ((la_weá_command_t)*(cmd_ptr + i) == pichula) {
            loop_level++;
        } else if ((la_weá_command_t)*(cmd_ptr + i) == tula) {
            loop_level--;
        }

        if (!loop_level) {
            return i;
        }
    }

    return -1;
}

void interpret_tula(int *cmd_idx) {
    if (cells[cur_cell] != 0) {
        *cmd_idx = find_loop_start(request.cmd_ptr, *cmd_idx);
    }
}

int find_loop_start(const uint8_t *cmd_ptr, int cmd_idx) {
    for (int i = cmd_idx - 1, loop_level = 1; i >= 0; i--) {
        if ((la_weá_command_t)*(cmd_ptr + i) == tula) {
            loop_level++;
        } else if ((la_weá_command_t)*(cmd_ptr + i) == pichula) {
            loop_level--;
        }

        if (!loop_level) {
            return i;
        }
    }

    return -1;
}

inline void interpret_pico(int *cmd_idx) {
    *cmd_idx = find_loop_end(request.cmd_ptr, request.cmd_count, *cmd_idx);
}

void interpret_ctm() {
    size_t response_size = 1 + sizeof(int64_t);
    void *response_data = malloc(response_size);

    memset(response_data, append_char_to_output_op, 1);

    copy_char_to_response(response_data);

    emscripten_worker_respond_provisionally((char *)response_data, response_size);
    free(response_data);
}

void copy_char_to_response(void *response_data) {
    if (is_value_in_unicode_range(cells[cur_cell])) {
        memcpy(response_data + 1, &cells[cur_cell], sizeof(int64_t));
    } else {
        wcscpy(response_data + 1, L"\uFFFD");
    } 
}

inline bool is_value_in_unicode_range(int64_t value) {
    return value >= 0 && value <= 0x10FFFF;
}

void interpret_quéweá(int cmd_idx) {
    if (request.input) {
        char_was_read();
    } else {
        wait_for_char(cmd_idx);
    }
}

void char_was_read() {
    size_t response_size = 1 + sizeof(bool);
    void *response_data = malloc(response_size);

    memset(response_data, set_is_input_disabled_op, 1);
    memset(response_data + 1, true, sizeof(bool));

    emscripten_worker_respond_provisionally((char *)response_data, response_size);
    free(response_data);

    update_cell_from_char();
    request.input = NULL;

    last_cmd_idx = -1;
}

void update_cell_from_char() {
    if (request.input_len == 1) {
        cells[cur_cell] = request.input[0];
    } else {
        cells[cur_cell] = 0;
    }
}

void wait_for_char(int cmd_idx) {
    size_t response_size = 1 + sizeof(bool);
    void *response_data = malloc(response_size);

    memset(response_data, set_is_input_disabled_op, 1);
    memset(response_data + 1, false, sizeof(bool));

    emscripten_worker_respond((char *)response_data, response_size);
    free(response_data);

    last_cmd_idx = cmd_idx;

    emscripten_exit_with_live_runtime();
}

void interpret_chúpala() {
    size_t response_size = 1 + sizeof(int64_t);
    void *response_data = malloc(response_size);

    memset(response_data, append_num_to_output_op, 1);
    memcpy(response_data + 1, &cells[cur_cell], sizeof(int64_t));

    emscripten_worker_respond_provisionally((char *)response_data, response_size);
    free(response_data);
}

void interpret_brígido(int cmd_idx) {
    if (request.input) {
        num_was_read();
    } else {
        wait_for_num(cmd_idx);
    }
}

void num_was_read() {
    size_t response_size = 1 + sizeof(bool);
    void *response_data = malloc(response_size);

    memset(response_data, set_is_input_disabled_op, 1);
    memset(response_data + 1, true, sizeof(bool));

    emscripten_worker_respond_provisionally((char *)response_data, response_size);
    free(response_data);

    update_cell_from_num();
    request.input = NULL;

    last_cmd_idx = -1;
}

void update_cell_from_num() {
    if (request.input_len <= 22) {
        copy_num_from_request();
    } else {
        cells[cur_cell] = 0;
    }
}

void copy_num_from_request() {
    unsigned char *utf8_input = utf32_str_to_utf8(request.input);

    if (!is_valid_num_input((const char *)utf8_input)) {
        utf8_input[0] = '\0';
    }

    cells[cur_cell] = strtoll((const char *)utf8_input, NULL, 10);
    free(utf8_input);

    if (errno == ERANGE) {
        cells[cur_cell] = 0;
    }
}

bool is_valid_num_input(const char *num_input) {
    for (int i = 0; i < strlen(num_input); i++) {
        if (!isdigit(num_input[i]) && !(i == 0 && num_input[i] == '-')) {
            return false;
        }
    }

    return true;
}

void wait_for_num(int cmd_idx) {
    size_t response_size = 1 + sizeof(bool);
    void *response_data = malloc(response_size);

    memset(response_data, set_is_input_disabled_op, 1);
    memset(response_data + 1, false, sizeof(bool));

    emscripten_worker_respond((char *)response_data, response_size);
    free(response_data);

    last_cmd_idx = cmd_idx;

    emscripten_exit_with_live_runtime();
}

void interpret_perkin() {
    if (is_copy_set) {
        cells[cur_cell] = cell_value_copy;
        is_copy_set = false;
    } else {
        cell_value_copy = cells[cur_cell];
        is_copy_set = true;
    }
}

inline void interpret_mierda() {
    worker_exit_with_optional_error_message(NULL);
}

void free_resources() {
    if (cells) {
        free(cells);
    }

    if (request.cmd_ptr) {
        free(request.cmd_ptr);
    }

    if (request.input) {
        free(request.input);
    }
}

void worker_exit_with_optional_error_message(const char *err_msg) {
    size_t response_size = 1 + (err_msg ? strlen(err_msg) + 1 : 1);
    void *response_data = malloc(response_size);

    memset(response_data, exit_with_optional_error_message_op, 1);

    if (response_size > 2) {
        strcpy(response_data + 1, err_msg);
    } else {
        memset(response_data + 1, '\0', 1);
    }

    worker_exit_with_response((char *)response_data, response_size);
}

void worker_exit_with_response(char *response_data, size_t response_size) {
    free_resources();

    emscripten_worker_respond(response_data, response_size);

    if (response_data) {
        free(response_data);
    }
}

void copy_input_from_data(const void *data) {
    memcpy(&request.input_len, data, sizeof(int));

    size_t input_size = (request.input_len + 1) * sizeof(char32_t);
    request.input = (char32_t *)malloc(input_size);
    memcpy((void *)request.input, data + sizeof(int), input_size);
}
