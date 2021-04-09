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

#ifndef EXCEPTIONS_HPP
#define EXCEPTIONS_HPP
	#include "exception.hpp"

	#include <string>

	namespace la_weá {
		class invalid_command_exception: public exception {
			public:
				invalid_command_exception(const std::string &, long, long);
			private:
				std::string get_err_msg(const std::string &, long, long);
		};

		class unmatched_tula_exception: public exception {
			public:
				unmatched_tula_exception(long, long);
			private:
				std::string get_err_msg(long, long);
		};

		class misplaced_pico_exception: public exception {
			public:
				misplaced_pico_exception(long, long);
			private:
				std::string get_err_msg(long, long);
		};

		class invalid_character_exception: public exception {
			public:
				invalid_character_exception(char32_t, long, long);
			private:
				std::string get_err_msg(char32_t, long, long);
		};

		class too_long_command_exception: public exception {
			public:
				too_long_command_exception(long, long);
			private:
				std::string get_err_msg(long, long);
		};

		class unmatched_pichulas_exception: public exception {
			public:
				unmatched_pichulas_exception();
		};

		class out_of_bounds_exception: public exception {
			public:
				out_of_bounds_exception();
		};
	}
#endif
