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
// This la_weá_program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this la_weá_program. If not, see <http://www.gnu.org/licenses/>.
//

#ifndef LA_WEÁ_PROGRAM_EXPRESSION_HPP
#define LA_WEÁ_PROGRAM_EXPRESSION_HPP
	#include "la_weá_expression.hpp"

	#include <vector>

	class la_weá_context;

	class la_weá_program_expression: public la_weá_expression {
		public:
			la_weá_program_expression(const std::vector<la_weá_expression *> &);
			~la_weá_program_expression();

			la_weá_program_expression(const la_weá_program_expression &);
			la_weá_program_expression &operator=(const la_weá_program_expression &);

			la_weá_program_expression(la_weá_program_expression &&) noexcept;
			la_weá_program_expression &operator=(la_weá_program_expression &&) noexcept;

			void interpret(la_weá_context *) override;
		private:
			std::vector<la_weá_expression *> expressions;
	};
#endif
