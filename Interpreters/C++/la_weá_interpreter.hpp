//
// Copyright © 2018 Rodrigo Pelissier. All rights reserved.
//
// This file is part of La Weá Interpreter (C++)
//
// La Weá Interpreter (C) is free software: you can redistribute it and/or modify
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

#include <vector>
#include <string>

class la_weá_interpreter {
	public:
		typedef enum {
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

		static const std::vector<std::u32string> command_names;
		static const std::u32string valid_chars;		

		int loop_starts_length;
		int loop_ends_length;

		void interpret(const char *);

		std::u32string get_code(const char *);
		std::vector<command_t> parse_code(const std::u32string &);
		command_t parse_command(const std::u32string &, int, long, long);
		void run_commands(const std::vector<command_t> &);
		int find_loop_start(const std::vector<command_t> &, int);
		int find_loop_end(const std::vector<command_t> &, int);
		void exit_interpreter(const std::string &);
};
