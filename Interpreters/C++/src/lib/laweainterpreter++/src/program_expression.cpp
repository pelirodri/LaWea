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

#include "program_expression.hpp"
#include "context.hpp"

void la_weá::program_expression::interpret(context *ctx) {
	for (long i = 0; i < expressions.size(); i = ctx->get_expr_idx()) [[likely]] {
		expressions[i]->interpret(ctx);
	}
}
