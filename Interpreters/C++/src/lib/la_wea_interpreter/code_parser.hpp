//
// Copyright © 2021 Rodrigo Pelissier. All rights reserved.
//
// This file is part of La Weá Interpreter (C++)
//
// La Weá Interpreter (C++) is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <http://www.gnu.org/licenses/>.
//

#ifndef CODE_PARSER_HPP
#define CODE_PARSER_HPP
	#include "command.hpp"

	#include <string>
	#include <vector>
	#include <memory>
	
	namespace la_weá {
		class expression;

		class code_parser {
			public:
				code_parser(const std::u32string &);

				std::unique_ptr<expression> parse();
			private:
				std::u32string code;
				std::vector<command> commands;

				bool is_mid_comment;
				std::u32string cmd_name_buffer;

				long line;
				long col;

				long loop_open_commands_count;
				long loop_close_commands_count;

				static const std::vector<std::u32string> cmd_names;

				void parse_code();
				void parse_char_at_idx(long);
				bool is_cmd_boundary(long) const;
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
				
				std::vector<expression *> get_expressions_from_commands() const;
		};
	}
#endif
