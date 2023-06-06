#ifndef EXPRESSION_FACTORY_HPP
#define EXPRESSION_FACTORY_HPP
#include "command.hpp"

#include <vector>

namespace la_weá {
	class expression;

	class expression_factory {
		public:
			expression_factory() = delete;
			
			static std::unique_ptr<expression> create_expression_from_cmd_at_idx(
				std::vector<command>,
				long = -1
			);
		private:
			static long find_loop_start(std::vector<command>, long);
			static long find_loop_end(std::vector<command>, long);
	};
}
#endif
