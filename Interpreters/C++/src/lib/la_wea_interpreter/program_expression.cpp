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

#include "program_expression.hpp"
#include "context.hpp"

la_weá::program_expression::program_expression(const std::vector<expression *> &expressions) : 
	expressions(expressions) {}

la_weá::program_expression::~program_expression() {
	for (expression *expression : expressions) { [[likely]]
		delete expression;
	}
}

la_weá::program_expression::program_expression(const program_expression &other) :
	expressions(other.expressions) {}

la_weá::program_expression &la_weá::program_expression::operator=(const program_expression &other) {
	if (this != &other) {
		this->~program_expression();
		expressions = other.expressions;
	}

	return *this;
}

la_weá::program_expression::program_expression(program_expression &&other) noexcept {
	*this = std::move(other);
}

la_weá::program_expression &la_weá::program_expression::operator=(program_expression &&other) noexcept {
	if (this != &other) {
		this->~program_expression();
		expressions = std::move(other.expressions);
	}

	return *this;
}

void la_weá::program_expression::interpret(context *ctx) {
	for (long i = 0; i < expressions.size(); i = ctx->get_expr_idx()) { [[likely]]
		expressions[i]->interpret(ctx);
	}
}
