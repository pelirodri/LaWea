#ifndef RUN_COMMANDS_H
#define RUN_COMMANDS_H
    #include <stdint.h>
    #include <stdbool.h>
    #include <uchar.h>

    typedef enum la_weá_command_t {
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
    } la_weá_command_t;

    typedef enum la_weá_response_operation_t {
        append_char_to_output_op,
        append_num_to_output_op,
        set_is_input_disabled_op,
        exit_with_optional_error_message_op
    } la_weá_response_operation_t;

    typedef struct la_weá_response_t {
        la_weá_response_operation_t response_operation;

        int64_t content_to_append;
        bool is_input_disabled;
        char *err_msg;
    } la_weá_response_t;

    typedef struct la_weá_request_t {
        int cmd_count;
        uint8_t *cmd_ptr;
        
        int input_len;
        char32_t *input;
    } la_weá_request_t;

    typedef void append_char_to_output(int);
    typedef void append_num_to_output(int);
    typedef void set_is_input_disabled(bool);
    typedef void exit_with_optional_error_message(const char *);
#endif
