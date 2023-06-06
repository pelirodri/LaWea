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
