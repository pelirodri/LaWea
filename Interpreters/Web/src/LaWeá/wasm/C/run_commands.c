#include "run_commands.h"

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <emscripten.h>

static void callback(char *data, int size, void *arg);
static void _append_char_to_output(int64_t);
static void _append_num_to_output(int64_t);
static void _set_is_input_disabled(bool);
static void _exit_with_optional_error_message(const char *);

static worker_handle worker = -1;

static int append_char_to_output_ptr;
static int append_num_to_output_ptr;
static int is_input_disabled_ptr;
static int exit_with_optional_error_message_ptr;

EMSCRIPTEN_KEEPALIVE
void run_commands(const uint8_t *cmd_ptr, int cmd_count) {
	size_t data_size = sizeof(int) + cmd_count;
	void *data = malloc(data_size);

	memcpy(data, &cmd_count, sizeof(int));
	memcpy(data + sizeof(int), (void *)cmd_ptr, cmd_count);

	if (worker == -1) {
		worker = emscripten_create_worker("js/run_commands_worker.js");
	}

	emscripten_call_worker(worker, "worker_run_commands", (char *)data, data_size, callback, NULL);
	free(data);
}

EMSCRIPTEN_KEEPALIVE
void received_input(const char32_t *input, int input_len) {
	if (worker != -1) {
		size_t input_size = (input_len + 1) * sizeof(char32_t), data_size = sizeof(int) + input_size;
		void *data = malloc(data_size);

		memcpy(data, &input_len, sizeof(int));
		memcpy(data + sizeof(int), (void *)input, input_size);

		emscripten_call_worker(worker, "worker_received_input", (char *)data, data_size, callback, NULL);
		free(data);
	}
}

EMSCRIPTEN_KEEPALIVE
void stop_running_commands() {
	if (worker != -1) {
		emscripten_destroy_worker(worker);
		worker = -1;
	}
}

EMSCRIPTEN_KEEPALIVE
void add_function_pointers(int ptr1, int ptr2, int ptr3, int ptr4) {
	append_char_to_output_ptr = ptr1;
	append_num_to_output_ptr = ptr2;
	is_input_disabled_ptr = ptr3;
	exit_with_optional_error_message_ptr = ptr4;
}

void callback(char *data, int size, void *arg) {	
	la_weá_response_t response = {0};
	memcpy(&response.response_operation, (void *)data, 1);

	switch (response.response_operation) {
		case append_char_to_output_op:
			memcpy(&response.content_to_append, (void *)data + 1, sizeof(int64_t));
			_append_char_to_output(response.content_to_append);

			break;
		case append_num_to_output_op:
			memcpy(&response.content_to_append, (void *)data + 1, sizeof(int64_t));
			_append_num_to_output(response.content_to_append);

			break;
		case set_is_input_disabled_op:
			memcpy(&response.is_input_disabled, (void *)data + 1, sizeof(bool));
			_set_is_input_disabled(response.is_input_disabled);

			break;
		case exit_with_optional_error_message_op:
			response.err_msg = data + 1;
			_exit_with_optional_error_message(response.err_msg);

			break;
	}
}

void _append_char_to_output(int64_t char_to_append) {
	const char32_t char_str[] = {(char32_t)char_to_append, U'\0'};
	((append_char_to_output *)append_char_to_output_ptr)((int)char_str);
}

void _append_num_to_output(int64_t num_to_append) {
	int num_size = snprintf(NULL, 0, "%lld", num_to_append);
	char num_str[num_size + 1];

	sprintf(num_str, "%lld", num_to_append);

	((append_num_to_output *)append_num_to_output_ptr)((int)num_str);
}

inline void _set_is_input_disabled(bool is_input_disabled) {
	((set_is_input_disabled *)is_input_disabled_ptr)(is_input_disabled);
}

void _exit_with_optional_error_message(const char *err_msg) {
	stop_running_commands();
	((exit_with_optional_error_message *)exit_with_optional_error_message_ptr)(err_msg);
}
