#ifndef LA_WEÁ_RESULT_T_H
#define LA_WEÁ_RESULT_T_H
#include "utfutils/utf_utils.h"

typedef enum la_weá_result_status_t {
	success,
	failure
} la_weá_result_status_t;

typedef struct la_weá_error_t la_weá_error_t;

typedef struct la_weá_result_t {
	la_weá_result_status_t status;
	const la_weá_error_t *error;
} la_weá_result_t;

typedef enum la_weá_error_code_t {
	invalid_command_error,
	unmatched_tula_error,
	misplaced_pico_error,
	invalid_character_error,
	too_long_command_error,
	unmatched_pichulas_error,
	out_of_bounds_error,
	internal_error
} la_weá_error_code_t;

const la_weá_result_t *create_success_result();
const la_weá_result_t *create_failure_result(const la_weá_error_t *);

const la_weá_error_t *create_invalid_command_error(const char32_t *, long, long);
const la_weá_error_t *create_unmatched_tula_error(long, long);
const la_weá_error_t *create_misplaced_pico_error(long, long);
const la_weá_error_t *create_invalid_character_error(char32_t, long, long);
const la_weá_error_t *create_too_long_command_error(long, long);
const la_weá_error_t *create_unmatched_pichulas_error();
const la_weá_error_t *create_out_of_bounds_error();
const la_weá_error_t *create_internal_error();

const char *get_message_from_error(const la_weá_error_t *);
#endif
