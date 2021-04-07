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

#ifndef LA_WEÁ_CONTEXT_HPP
#define LA_WEÁ_CONTEXT_HPP
	#include <vector>

	class la_weá_context {
		public:
			la_weá_context();

			long get_expr_idx() const;	
			void set_expr_idx(long);
			void increase_expr_idx();

			int64_t get_cell_value() const;
			void set_cell_value(int64_t);

			void decrease_cell(int64_t = 1);
			void increase_cell(int64_t = 1);

			void reset_cell_value();

			void shift_cell_left(long = 1);
			void shift_cell_right(long = 1);

			void copy_cell_value();
		private:
			long expr_idx;

			std::vector<int64_t> cells;
			long cur_cell;

			bool is_copy_set;
			int64_t cell_value_copy;
	};
#endif
