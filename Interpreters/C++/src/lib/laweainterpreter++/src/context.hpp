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
// asize_t with this program. If not, see <http://www.gnu.org/licenses/>.
//

#ifndef CONTEXT_HPP
#define CONTEXT_HPP
#include <vector>

namespace la_weá {
	class context {
		public:
			void set_expr_idx(size_t);
			void increase_expr_idx();

			void shift_cell_left(size_t = 1);
			void shift_cell_right(size_t = 1);

			void copy_cell_value();

			size_t get_expr_idx() const {
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
			size_t expr_idx = 0;

			std::vector<int64_t> cells = std::vector<int64_t> (8);
			size_t cur_cell = 0;

			bool is_copy_set = false;
			int64_t cell_value_copy;
	};
}
#endif
