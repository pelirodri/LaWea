#ifndef LA_WEÁ_INTERPRETER_H
#define LA_WEÁ_INTERPRETER_H
#include "la_weá_command_t.h"

#include <stdio.h>
#include <stdint.h>
#include <stdbool.h>

/**
 * The entry point for interpreting the code.
 * @param file_path the path to the file with the code
 * @note The file must have the .lw extension.
 */
void la_weá_interpret(const char *file_path);

/**
 * Retrieves the commands from the code.
 * @param code the code to parse
 */
la_weá_command_t *la_weá_parse_code(const uint_least32_t *code);

/**
 * Interprets commands.
 * @param commands to interpret
 */
void la_weá_run(la_weá_command_t *commands);

/**
 * A utility function that prints an error message and exits the program abnormally.
 * @param err_msg the error message to print
 */
void la_weá_exit_with_error_message(const char *err_msg);
#endif
