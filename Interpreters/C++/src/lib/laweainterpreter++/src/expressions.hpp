#ifndef EXPRESSIONS_HPP
#define EXPRESSIONS_HPP
#include "expression.hpp"
#include "context.hpp"

#include <string>

namespace la_weá {
	class context;

	class maricón_expression: public expression {
		public:
			void interpret(context *ctx) override {
				ctx->decrease_cell_value();
				ctx->increase_expr_idx();
			}
	};

	class maraco_expression: public expression {
		public:
			void interpret(context *ctx) override {
				ctx->decrease_cell_value(2);
				ctx->increase_expr_idx();
			}
	};

	class weón_expression: public expression {
		public:
			void interpret(context *ctx) override {
				ctx->increase_cell_value();
				ctx->increase_expr_idx();
			}
	};

	class aweonao_expression: public expression {
		public:
			void interpret(context *ctx) override {
				ctx->increase_cell_value(2);
				ctx->increase_expr_idx();
			}
	};

	class maraca_expression: public expression {
		public:
			void interpret(context *ctx) override {
				ctx->reset_cell_value();
				ctx->increase_expr_idx();
			}
	};

	class chucha_expression: public expression {
		public:
			void interpret(context *ctx) override {
				ctx->shift_cell_left();
				ctx->increase_expr_idx();
			}
	};

	class puta_expression: public expression {
		public:
			void interpret(context *ctx) override {
				ctx->shift_cell_right();
				ctx->increase_expr_idx();
			}
	};

	class pichula_expression: public expression {
		public:
			pichula_expression(long tula_idx) : tula_idx (tula_idx) {}

			void interpret(context *) override;
		private:
			long tula_idx;
	};

	class tula_expression: public expression {
		public:
			tula_expression(long pichula_idx) : pichula_idx (pichula_idx) {}

			void interpret(context *) override;
		private:
			long pichula_idx;
	};

	class pico_expression: public expression {
		public:
			pico_expression(long tula_idx) : tula_idx(tula_idx) {}

			void interpret(context *ctx) override {
				ctx->set_expr_idx(tula_idx + 1);
			}
		private:
			long tula_idx;
	};

	class ctm_expression: public expression {
		public:
			void interpret(context *) override;
	};

	class quéweá_expression: public expression {
		public:
			void interpret(context *) override;
	};

	class chúpala_expression: public expression {
		public:
			void interpret(context *) override;
	};

	class brígido_expression: public expression {
		public:
			void interpret(context *) override;
		private:
			std::string get_num_input() const;
			bool is_valid_num_input(const std::string &) const;
	};

	class perkin_expression: public expression {
		public:
			void interpret(context *ctx) override {
				ctx->copy_cell_value();
				ctx->increase_expr_idx();
			}
	};

	class mierda_expression: public expression {
		public:
			void interpret(context *) override {
				std::exit(EXIT_SUCCESS);
			}
	};
}
#endif
