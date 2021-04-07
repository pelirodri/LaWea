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

#ifndef EXPRESSION_FACTORY_HPP
#define EXPRESSION_FACTORY_HPP
	#include "la_weá_command.hpp"

	#include <vector>

	class la_weá_expression;

	class expression_factory {
		public:
			static la_weá_expression *create_expression_from_cmd_at_idx(
				std::vector<la_weá_command>,
				long = -1
			);
		private:
			expression_factory();

			static long find_loop_start(std::vector<la_weá_command>, long);
			static long find_loop_end(std::vector<la_weá_command>, long);
	};
#endif
