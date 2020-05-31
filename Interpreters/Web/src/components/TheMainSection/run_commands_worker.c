#include "run_commands.h"
#include "utf8_utf32.h"

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <errno.h>
#include <emscripten.h>

static size_t cells_size;
static int64_t *cells;

static int cur_cell;

static bool copy_set;
static int64_t cell_value_copy;

static int read_cmd_idx;

static int find_loop_start(const uint8_t *, int);
static int find_loop_end(const uint8_t *, int, int );

static void exit_interpreter_worker(const char *, size_t, bool);

EMSCRIPTEN_KEEPALIVE
static void run_commands_worker(char *data, int size) {
    worker_data_t worker_data;

    memcpy(&worker_data.cmd_count, (void *)data, sizeof(int));

    worker_data.cmd_ptr = (uint8_t *)malloc(worker_data.cmd_count);

    memcpy((void *)worker_data.cmd_ptr, (void *)data + sizeof(int), worker_data.cmd_count);
    memcpy(&worker_data.input_len, (void *)data + sizeof(int) + worker_data.cmd_count, sizeof(int));

    size_t input_size = (worker_data.input_len * sizeof(char32_t)) + 1;

    if (worker_data.input_len) {
        worker_data.input = (char32_t *)malloc(input_size);
        memcpy((void *)worker_data.input, (void *)data + (2 * sizeof(int)) + worker_data.cmd_count, input_size);
    }
    
    if (!worker_data.input) {
        cells_size = 8 * sizeof(int64_t);
        cells = (int64_t *)calloc(8, sizeof(int64_t));

        if (!cells) {
            free(cells);
            exit_interpreter_worker("Error interno", 14, false);

            return;
        }

        cur_cell = 0;
        copy_set = false;
    }

    errno = 0;

    for (int i = worker_data.input ? read_cmd_idx : 0; i < worker_data.cmd_count; i++) {
        switch ((command_t)*(worker_data.cmd_ptr + i)) {
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
                    exit_interpreter_worker("Te saliste pa’ la izquierda, aweonao", 36, true);

                    return;
                }

                cur_cell--;

                break;
            case puta:
                if (cur_cell == (cells_size / sizeof(int64_t)) - 1) {
                    int64_t *tmp = (int64_t *)realloc(cells, (cells_size *= 2));

                    if (!tmp) {
                        free(cells);
                        exit_interpreter_worker("Error interno", 14, false);

                        return;
                    }

                    cells = tmp;
                    memset(cells + (cur_cell + 1), 0, cells_size / 2);
                }

                cur_cell++;

                break;
            case pichula:
                if (!cells[cur_cell]) {
                    i = find_loop_end(worker_data.cmd_ptr, worker_data.cmd_count, i);
                }

                break;
            case tula:
                if (cells[cur_cell]) {
                    i = find_loop_start(worker_data.cmd_ptr, i);
                }

                break;
            case pico:
                i = find_loop_end(worker_data.cmd_ptr, worker_data.cmd_count, i);
                break;
            case ctm: {
                size_t response_size = 1 + sizeof(bool) + sizeof(int64_t);
                void *response_data = malloc(response_size);

                memset(response_data, append_to_output_op, 1);
                memset(response_data + 1, false, sizeof(bool));

                if (cells[cur_cell] >= 0x0 && cells[cur_cell] <= 0x10FFFF) {
                    memcpy(response_data + (1 + sizeof(bool)), &cells[cur_cell], sizeof(int64_t));
                } else {
                    memset(response_data + (1 + sizeof(bool)), '?', sizeof(char));
                } 

                emscripten_worker_respond_provisionally((char *)response_data, response_size);
                free(response_data);

                break;
            }
            case quéweá:
                if (worker_data.input) {
                    size_t response_size = 1 + sizeof(bool);
                    void *response_data = malloc(response_size);

                    memset(response_data, set_is_input_disabled_op, 1);
                    memset(response_data + 1, true, sizeof(bool));

                    emscripten_worker_respond_provisionally((char *)response_data, response_size);
                    free(response_data);

                    if (worker_data.input_len == 1) {
                        cells[cur_cell] = worker_data.input[0];
                    } else {
                        cells[cur_cell] = 0;
                    }

                    worker_data.input = NULL;
                } else {
                    size_t response_size = 1 + sizeof(bool);
                    void *response_data = malloc(response_size);

                    memset(response_data, set_is_input_disabled_op, 1);
                    memset(response_data + 1, false, sizeof(bool));

                    emscripten_worker_respond((char *)response_data, response_size);
                    free(response_data);

                    read_cmd_idx = i;

                    return;
                }
                
                break;
            case chúpala: {
                char num_str[snprintf(NULL, 0, "%lld", cells[cur_cell]) + 1];
                sprintf(num_str, "%lld", cells[cur_cell]);

                size_t response_size = 1 + sizeof(bool) + sizeof(int64_t);
                void *response_data = malloc(response_size);

                memset(response_data, append_to_output_op, 1);
                memset(response_data + 1, true, sizeof(bool));

                memcpy(response_data + (1 + sizeof(bool)), &cells[cur_cell], sizeof(int64_t));

                emscripten_worker_respond_provisionally((char *)response_data, response_size);
                free(response_data);

                break;
            }
            case brígido:
                if (worker_data.input) {
                    size_t response_size = 1 + sizeof(bool);
                    void *response_data = malloc(response_size);

                    memset(response_data, set_is_input_disabled_op, 1);
                    memset(response_data + 1, true, sizeof(bool));

                    emscripten_worker_respond_provisionally((char *)response_data, response_size);
                    free(response_data);

                    if (worker_data.input_len <= 22) {
                        uint_least8_t *utf8_char_input = utf32_str_to_utf8(worker_data.input);

                        for (int j = 0; j < worker_data.input_len; j++) {
                            if (!isdigit(utf8_char_input[j]) && !(!j && utf8_char_input[j] == '-')) {
                                utf8_char_input[0] = '\0';
                                break;
                            }
                        }

                        cells[cur_cell] = strtoll((const char *)utf8_char_input, NULL, 10);

                        free(utf8_char_input);

                        if (errno == ERANGE) {
                            cells[cur_cell] = 0;
                        }
                    } else {
                        cells[cur_cell] = 0;
                    }

                    worker_data.input = NULL;
                } else {
                    size_t response_size = 1 + sizeof(bool);
                    void *response_data = malloc(response_size);

                    memset(response_data, set_is_input_disabled_op, 1);
                    memset(response_data + 1, false, sizeof(bool));

                    emscripten_worker_respond((char *)response_data, response_size);
                    free(response_data);

                    read_cmd_idx = i;

                    return;
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
                exit_interpreter_worker("", 0, false);

                return;
        }
    }

    free(cells);
    exit_interpreter_worker("", 0, false);
}

int find_loop_start(const uint8_t *cmd_ptr, int i) {
    for (int j = i - 1, loop_level = 1; j >= 0; j--) {
        if ((command_t)*(cmd_ptr + j) == tula) {
            loop_level++;
        } else if ((command_t)*(cmd_ptr + j) == pichula) {
            loop_level--;
        }

        if (!loop_level) {
            return j;
        }
    }

    return -1;
}

int find_loop_end(const uint8_t *cmd_ptr, int cmd_count, int i) {
    for (int j = i + 1, loop_level = 1; j < cmd_count; j++) {
        if ((command_t)*(cmd_ptr + j) == pichula) {
            loop_level++;
        } else if ((command_t)*(cmd_ptr + j) == tula) {
            loop_level--;
        }

        if (!loop_level) {
            return j;
        }
    }

    return -1;
}

void exit_interpreter_worker(const char *err_msg, size_t err_msg_size, bool should_display_err) {
    size_t response_size = 1 + sizeof(bool) + err_msg_size;
    void *response_data = malloc(response_size);

    memset(response_data, exit_interpreter_op, 1);
    memset(response_data + 1, should_display_err, sizeof(bool));

    strcpy(response_data + (1 + sizeof(bool)), err_msg);
    
    emscripten_worker_respond((char *)response_data, response_size);
    free(response_data);
}
