#ifndef CODE_PARSER_HPP
#define CODE_PARSER_HPP
#include "command.hpp"

#include <string>

namespace la_weá {
	class expression;

	class code_parser {
		public:
			code_parser(const std::u32string &code) : code (code) {}

			std::unique_ptr<expression> parse();
		private:
			std::u32string code;
			std::vector<command> commands;

			bool is_mid_comment = false;
			std::u32string cmd_name_buffer;

			long line = 1;
			long col = 1;

			long loop_open_commands_count = 0;
			long loop_close_commands_count = 0;

			static const std::vector<std::u32string> cmd_names;

			void parse_code();
			void parse_char_at_idx(long);
			void handle_potential_cmd();
			command get_cmd_from_name() const;
			void handle_loop_balancing(command);
			void handle_pichula_cmd();
			void handle_tula_cmd();
			void handle_pico_cmd() const;
			void add_char_at_idx_to_cmd_name(long);
			void validate_cmd_char_at_idx(long) const;
			void validate_cmd_name_length() const;
			void parsed_char_at_idx(long);

			void check_loops_balance() const;
			
			std::vector<std::unique_ptr<expression>> get_expressions_from_commands() const;

			bool is_cmd_boundary(long code_idx) const {
				return code_idx == code.length() || isspace(code[code_idx]) || code[code_idx] == U'#';
			}
	};
}
#endif
