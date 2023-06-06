//
// Copyright © 2023 Rodrigo Pelissier. All rights reserved.
//
// This file is part of La Weá Interpreter (C++)
//
// La Weá Interpreter (C++) is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This la_weá_program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this la_weá_program. If not, see <http://www.gnu.org/licenses/>.
//

#ifndef PROGRAM_EXPRESSION_HPP
#define PROGRAM_EXPRESSION_HPP
#include "expression.hpp"

#include <vector>

namespace la_weá {
	class context;

	class program_expression: public expression {
		public:
			program_expression(std::vector<std::unique_ptr<expression>> expressions) :
				expressions (std::move(expressions)) {}

			void interpret(context *) override;
		private:
			std::vector<std::unique_ptr<expression>> expressions;
	};
}
#endif
