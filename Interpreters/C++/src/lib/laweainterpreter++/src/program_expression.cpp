#include "program_expression.hpp"
#include "context.hpp"

void la_weá::program_expression::interpret(context &ctx) {
	for (long i = 0; i < expressions.size(); i = ctx.get_expr_idx()) [[likely]] {
		expressions[i]->interpret(ctx);
	}
}
