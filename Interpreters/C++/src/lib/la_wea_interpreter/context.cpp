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

#include "context.hpp"
#include "exceptions.hpp"

#include <string>

la_weá::context::context() : expr_idx(0), cells(std::vector<int64_t> (8)), cur_cell(0), is_copy_set(false) {}

long la_weá::context::get_expr_idx() const {
	return expr_idx;
}

void la_weá::context::set_expr_idx(long new_expr_idx) {
	if (new_expr_idx < 0) {
		throw std::logic_error ("expr_idx cannot be lower than 0");
	}

	expr_idx = new_expr_idx;
}

void la_weá::context::increase_expr_idx() {
	if (expr_idx == std::numeric_limits<long>::max()) {
		throw std::logic_error ("expr_idx is about to overflow");
	}

	expr_idx++;
}

int64_t la_weá::context::get_cell_value() const {
	return cells[cur_cell];
}

void la_weá::context::set_cell_value(int64_t cell_value) {
	cells[cur_cell] = cell_value;
}


void la_weá::context::decrease_cell_value(int64_t decrease_amount) {
	cells[cur_cell] -= decrease_amount;
}

void la_weá::context::increase_cell_value(int64_t increase_amount) {
	cells[cur_cell] += increase_amount;
}

void la_weá::context::reset_cell_value() {
	cells[cur_cell] = 0;
}

void la_weá::context::shift_cell_left(long shift_amount) {
	if (cur_cell == 0) {
		throw out_of_bounds_exception ();
	}

	cur_cell -= shift_amount;
}

void la_weá::context::shift_cell_right(long shift_amount) {
	if (cur_cell == cells.size() - 1) {
		cells.resize(cells.capacity() * 2);
	}

	cur_cell += shift_amount;
}

void la_weá::context::copy_cell_value() {
	if (is_copy_set) {
		cells[cur_cell] = cell_value_copy;
		is_copy_set = false;
	} else {
		cell_value_copy = cells[cur_cell];
		is_copy_set = true;
	}
}
