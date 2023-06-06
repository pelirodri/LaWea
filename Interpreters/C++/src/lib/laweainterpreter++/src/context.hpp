#ifndef CONTEXT_HPP
#define CONTEXT_HPP
#include <vector>

namespace la_weá {
	class context {
		public:
			void set_expr_idx(long);
			void increase_expr_idx();

			void shift_cell_left(long = 1);
			void shift_cell_right(long = 1);

			void copy_cell_value();

			long get_expr_idx() const {
				return expr_idx;
			}

			int64_t get_cell_value() const {
				return cells[cur_cell];
			}

			void set_cell_value(int64_t cell_value) {
				cells[cur_cell] = cell_value;
			}

			void decrease_cell_value(int64_t decrease_amount = 1) {
				cells[cur_cell] -= decrease_amount;
			}

			void increase_cell_value(int64_t increase_amount = 1) {
				cells[cur_cell] += increase_amount;
			}

			void reset_cell_value() {
				cells[cur_cell] = 0;
			}
		private:
			long expr_idx = 0;

			std::vector<int64_t> cells = std::vector<int64_t> (8);
			long cur_cell = 0;

			bool is_copy_set = false;
			int64_t cell_value_copy;
	};
}
#endif
