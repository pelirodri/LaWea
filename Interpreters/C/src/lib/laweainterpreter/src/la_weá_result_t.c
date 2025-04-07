#include "la_weá_result_t.h"

#include <stdio.h>
#include <string.h>

struct la_weá_error_t {
	la_weá_error_code_t code;

	size_t line;
	size_t col;

	const char32_t *cmd_name;
	char32_t cmd_char;
};

static const la_weá_result_t *create_result(la_weá_result_status_t, const la_weá_error_t *);
static const la_weá_error_t *create_error(la_weá_error_code_t, size_t, size_t, const char32_t *, char32_t);

static const char *get_message_from_invalid_command_error(const la_weá_error_t *);
static const char *get_message_from_unmatched_tula_error(const la_weá_error_t *);
static const char *get_message_from_misplaced_pico_error(const la_weá_error_t *);
static const char *get_message_from_invalid_character_error(const la_weá_error_t *);
static const char *get_message_from_too_long_command_error(const la_weá_error_t *);
static const char *get_message_from_unmatched_pichulas_error();
static const char *get_message_from_out_of_bounds_error();

const la_weá_result_t *create_success_result() {
	return create_result(success, NULL);
}

const la_weá_result_t *create_failure_result(const la_weá_error_t *error) {
	return create_result(failure, error);
}

const la_weá_error_t *create_invalid_command_error(const char32_t *cmd_name, size_t line, size_t col) {
	return create_error(invalid_command_error, line, col, cmd_name, U'\0');
}

const la_weá_error_t *create_unmatched_tula_error(size_t line, size_t col) {
	return create_error(unmatched_tula_error, line, col, NULL, U'\0');
}

const la_weá_error_t *create_misplaced_pico_error(size_t line, size_t col) {
	return create_error(misplaced_pico_error, line, col, NULL, U'\0');
}

const la_weá_error_t *create_invalid_character_error(char32_t cmd_char, size_t line, size_t col) {
	return create_error(invalid_character_error, line, col, NULL, cmd_char);
}

const la_weá_error_t *create_too_long_command_error(size_t line, size_t col) {
	return create_error(too_long_command_error, line, col, NULL, U'\0');
}

const la_weá_error_t *create_unmatched_pichulas_error() {
	return create_error(unmatched_pichulas_error, -1, -1, NULL, U'\0');
}

const la_weá_error_t *create_out_of_bounds_error() {
	return create_error(out_of_bounds_error, -1, -1, NULL, U'\0');
}

const la_weá_error_t *create_internal_error() {
	return create_error(internal_error, -1, -1, NULL, U'\0');
}

const char *get_message_from_error(const la_weá_error_t *error) {
	if (!error) {
		return NULL;
	}

	switch (error->code) {
		case invalid_command_error:
			return get_message_from_invalid_command_error(error);
		case unmatched_tula_error:
			return get_message_from_unmatched_tula_error(error);
		case misplaced_pico_error:
			return get_message_from_misplaced_pico_error(error);
		case invalid_character_error:
			return get_message_from_invalid_character_error(error);
		case too_long_command_error:
			return get_message_from_too_long_command_error(error);
		case unmatched_pichulas_error:
			return get_message_from_unmatched_pichulas_error();
		case out_of_bounds_error:
			return get_message_from_out_of_bounds_error();
		default:
			return NULL;
	}
}

const la_weá_result_t *create_result(la_weá_result_status_t status, const la_weá_error_t *error) {
	la_weá_result_t *result = malloc(sizeof(la_weá_result_t));

	if (!result) {
		return NULL;
	}

	result->status = status;
	result->error = error;

	return result;
}

const la_weá_error_t *create_error(
	la_weá_error_code_t error_code,
	size_t line,
	size_t col,
	const char32_t *cmd_name,
	char32_t cmd_char
) {
	la_weá_error_t *error = malloc(sizeof(la_weá_error_t));

	if (!error) {
		return NULL;
	}

	error->code = error_code;
	
	if (line > 0) {
		error->line = line;
	}

	if (col > 0) {
		error->col = col;
	}

	if (cmd_name && utf32_strlen(cmd_name) > 0) {
		error->cmd_name = cmd_name;
	}

	if (cmd_char) {
		error->cmd_char = cmd_char;
	}

	return error;
}

const char *get_message_from_invalid_command_error(const la_weá_error_t *error) {
	int line_len = snprintf(NULL, 0, "%ld", error->line);
    int col_len = snprintf(NULL, 0, "%ld", error->col);

    char error_msg_template[] = "'%s' no es un comando válido, pos, saco de weas (línea: %ld, columna: %ld)";
	const char8_t *utf8_cmd_name = utf32_str_to_utf8(error->cmd_name);
    char *error_msg = malloc((sizeof(error_msg_template) - 2 - (2 * 3)) + sizeof(utf8_cmd_name) + line_len + col_len);

    if (!utf8_cmd_name) {
        return NULL;
    }

    sprintf(error_msg, error_msg_template, utf8_cmd_name, error->line, error->col);
    free((char8_t *)utf8_cmd_name);

	return error_msg;
}

const char *get_message_from_unmatched_tula_error(const la_weá_error_t *error) {
	int line_len = snprintf(NULL, 0, "%ld", error->line);
	int col_len = snprintf(NULL, 0, "%ld", error->col);

	char error_msg_template[] = "Se encontró una tula sin su respectiva pichula en la línea %ld, columna %ld";
	char *error_msg = malloc((sizeof(error_msg_template) - (2 * 3)) + line_len + col_len);

	sprintf(error_msg, error_msg_template, error->line, error->col);

	return error_msg;
}

const char *get_message_from_misplaced_pico_error(const la_weá_error_t *error) {
	int line_len = snprintf(NULL, 0, "%ld", error->line);
	int col_len = snprintf(NULL, 0, "%ld", error->col);

	char error_msg_template[] = "No debiste meter ese pico en la línea %ld, columna %ld";
	char *error_msg = malloc((sizeof(error_msg_template) - (2 * 3)) + line_len + col_len);

	sprintf(error_msg, error_msg_template, error->line, error->col);

	return error_msg;
}

const char *get_message_from_invalid_character_error(const la_weá_error_t *error) {
	int line_len = snprintf(NULL, 0, "%ld", error->line);
	int col_len = snprintf(NULL, 0, "%ld", error->col);

	char error_msg_template[] = "'%s' no es parte de La Weá, tonto qlo (línea: %ld, columna: %ld)";
	char *error_msg = malloc((sizeof(error_msg_template) - 2 - (2 * 3)) + sizeof(char32_t) + line_len + col_len);

	char8_t *utf8_char = utf32_char_to_utf8(error->cmd_char);

	if (!utf8_char) {
		return NULL;
	}

	sprintf(error_msg, error_msg_template, utf8_char, error->line, error->col);
	free(utf8_char);

	return error_msg;
}

const char *get_message_from_too_long_command_error(const la_weá_error_t *error) {
	int line_len = snprintf(NULL, 0, "%ld", error->line);
	int col_len = snprintf(NULL, 0, "%ld", error->col);

	char error_msg_template[] =  "¿Vos creís que yo soy weón, CTM? Te gustan largos, parece (línea: %ld, columna: %ld)";
	char *error_msg = malloc((sizeof(error_msg_template) - (2 * 3)) + line_len + col_len);

	sprintf(error_msg, error_msg_template, error->line, error->col);

	return error_msg;
}

const char *get_message_from_unmatched_pichulas_error() {
	char msg[] = "O te sobran pichulas o te faltan tulas"; 
	char *error_msg = malloc(sizeof(msg));

	strcpy(error_msg, msg);
	
	return error_msg;
}

const char *get_message_from_out_of_bounds_error() {
	char msg[] = "Te saliste pa’ la izquierda, aweona’o";
	char *error_msg = malloc(sizeof(msg));

	strcpy(error_msg, msg);

	return error_msg;
}
