#include "run_commands.h"

#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <string.h>
#include <stdbool.h>
#include <uchar.h>
#include <math.h>
#include <emscripten.h>

static worker_handle worker = -1;

static int append_to_output_ptr = -1, is_input_disabled_ptr = -1, exit_interpreter_ptr = -1;

static void callback(char *data, int size, void *arg);

EMSCRIPTEN_KEEPALIVE
void run_commands(const uint8_t *cmd_ptr, int cmd_count, char32_t *input, int input_len, int ptr1, int ptr2, int ptr3) {
	size_t input_size = (input_len * sizeof(char32_t)) + 1, data_size = (2 * sizeof(int)) + cmd_count + input_size;

	void *data = malloc(data_size);

	memcpy(data, &cmd_count, sizeof(int));
	memcpy(data + sizeof(int), (void *)cmd_ptr, cmd_count);
	memcpy(data + sizeof(int) + cmd_count, &input_len, sizeof(int));
	memcpy(data + (2 * sizeof(int)) + cmd_count, (void *)input, input_size);

	if (worker == -1) {
		worker = emscripten_create_worker("js/run_commands_worker.js");
	}

	if (append_to_output_ptr == -1) {
		append_to_output_ptr = ptr1;
		is_input_disabled_ptr = ptr2;
		exit_interpreter_ptr = ptr3;
	}

	emscripten_call_worker(worker, "run_commands_worker", (char *)data, data_size, callback, NULL);
	free(data);
}

EMSCRIPTEN_KEEPALIVE
void stop_running_commands() {
	if (worker != -1) {
		emscripten_destroy_worker(worker);
		worker = -1;
	}
}

void callback(char *data, int size, void *arg) {
	response_t response;

	memcpy(&response.response_operation, (void *)data, 1);

	switch (response.response_operation) {
		case append_to_output_op:
			memcpy(&response.is_num, (void *)data + 1, sizeof(bool));
			memcpy(&response.content_to_append, (void *)data + (1 + sizeof(bool)), sizeof(int64_t));

			if (!response.is_num) {
				char32_t char_str[2];

				char_str[0] = response.content_to_append;
				char_str[1] = U'\0';

				((append_to_output *)append_to_output_ptr)((int)char_str, false);
			} else {
				char num_str[(int)(log10(response.content_to_append) + 1) + 1];
	        	sprintf(num_str, "%lld", response.content_to_append);

				((append_to_output *)append_to_output_ptr)((int)num_str, true);
			}

			break;
		case set_is_input_disabled_op:
			memcpy(&response.is_input_disabled, (void *)data + 1, sizeof(bool));
			((set_is_input_disabled *)is_input_disabled_ptr)(response.is_input_disabled);

			break;
		case exit_interpreter_op:
			memcpy(&response.should_display_err, (void *)data + 1, sizeof(bool));
			((exit_interpreter *)exit_interpreter_ptr)(data + (1 + sizeof(bool)), response.should_display_err);

			break;
	}
}
