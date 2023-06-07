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
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <http://www.gnu.org/licenses/>.
//

#ifndef EXPRESSIONS_HPP
#define EXPRESSIONS_HPP
#include "expression.hpp"
#include "context.hpp"

#include <string>

namespace la_weá {
	class context;

	class maricón_expression: public expression {
		public:
			void interpret(context &ctx) override {
				ctx.decrease_cell_value();
				ctx.increase_expr_idx();
			}
	};

	class maraco_expression: public expression {
		public:
			void interpret(context &ctx) override {
				ctx.decrease_cell_value(2);
				ctx.increase_expr_idx();
			}
	};

	class weón_expression: public expression {
		public:
			void interpret(context &ctx) override {
				ctx.increase_cell_value();
				ctx.increase_expr_idx();
			}
	};

	class aweonao_expression: public expression {
		public:
			void interpret(context &ctx) override {
				ctx.increase_cell_value(2);
				ctx.increase_expr_idx();
			}
	};

	class maraca_expression: public expression {
		public:
			void interpret(context &ctx) override {
				ctx.reset_cell_value();
				ctx.increase_expr_idx();
			}
	};

	class chucha_expression: public expression {
		public:
			void interpret(context &ctx) override {
				ctx.shift_cell_left();
				ctx.increase_expr_idx();
			}
	};

	class puta_expression: public expression {
		public:
			void interpret(context &ctx) override {
				ctx.shift_cell_right();
				ctx.increase_expr_idx();
			}
	};

	class pichula_expression: public expression {
		public:
			pichula_expression(long tula_idx) : tula_idx (tula_idx) {}

			void interpret(context &) override;
		private:
			long tula_idx;
	};

	class tula_expression: public expression {
		public:
			tula_expression(long pichula_idx) : pichula_idx (pichula_idx) {}

			void interpret(context &) override;
		private:
			long pichula_idx;
	};

	class pico_expression: public expression {
		public:
			pico_expression(long tula_idx) : tula_idx(tula_idx) {}

			void interpret(context &ctx) override {
				ctx.set_expr_idx(tula_idx + 1);
			}
		private:
			long tula_idx;
	};

	class ctm_expression: public expression {
		public:
			void interpret(context &) override;
	};

	class quéweá_expression: public expression {
		public:
			void interpret(context &) override;
	};

	class chúpala_expression: public expression {
		public:
			void interpret(context &) override;
	};

	class brígido_expression: public expression {
		public:
			void interpret(context &) override;
		private:
			std::string get_num_input() const;
			bool is_valid_num_input(const std::string &) const;
	};

	class perkin_expression: public expression {
		public:
			void interpret(context &ctx) override {
				ctx.copy_cell_value();
				ctx.increase_expr_idx();
			}
	};

	class mierda_expression: public expression {
		public:
			void interpret(context &) override {
				std::exit(EXIT_SUCCESS);
			}
	};
}
#endif
