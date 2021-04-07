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

#ifndef LA_WEÁ_EXPRESSION_HPP
#define LA_WEÁ_EXPRESSION_HPP
	class la_weá_context;

	class la_weá_expression {
		public:
			la_weá_expression(const la_weá_expression &) = delete;
			la_weá_expression &operator=(const la_weá_expression &) = delete;

			la_weá_expression();
			virtual ~la_weá_expression();

			la_weá_expression(la_weá_expression &&) noexcept;
			la_weá_expression &operator=(la_weá_expression &&) noexcept;

			virtual void interpret(la_weá_context *) = 0;
	};
#endif
