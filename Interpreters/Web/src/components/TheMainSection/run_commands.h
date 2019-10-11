#include <stdint.h>
#include <stdbool.h>
#include <uchar.h>

#ifndef RUN_COMMANDS_H
#define RUN_COMMANDS_H

typedef enum command_t {
    maricón,
    maraco,
    weón,
    aweonao,
    maraca,
    chucha,
    puta,
    pichula,
    tula,
    pico,
    ctm,
    quéweá,
    chúpala,
    brígido,
    perkin,
    mierda
} command_t;

typedef enum response_operation_t {
    append_to_output_op,
    set_is_input_disabled_op,
    exit_interpreter_op
} response_operation_t;

typedef struct response_t {
    response_operation_t response_operation;

    bool is_num;
    int64_t content_to_append;

    bool is_input_disabled;

    bool should_display_err;
} response_t;

typedef struct worker_data_t {
    int cmd_count;
    uint8_t *cmd_ptr;
    
    int input_len;
    char32_t *input;
} worker_data_t;

typedef void append_to_output(int, bool);
typedef void set_is_input_disabled(bool);
typedef void exit_interpreter(const char *, bool);

void run_commands(const uint8_t *, int, char32_t *, int, int, int, int);
void stop_running_commands();

#endif
