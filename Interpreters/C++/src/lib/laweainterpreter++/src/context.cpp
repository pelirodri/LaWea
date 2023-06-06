#include "context.hpp"
#include "exceptions.hpp"

void la_weá::context::set_expr_idx(long new_expr_idx) {
	if (new_expr_idx < 0) [[unlikely]] {
		throw std::logic_error ("expr_idx cannot be lower than 0");
	}

	expr_idx = new_expr_idx;
}

void la_weá::context::increase_expr_idx() {
	if (expr_idx == std::numeric_limits<long>::max()) [[unlikely]] {
		throw std::logic_error ("expr_idx is about to overflow");
	}

	expr_idx++;
}

void la_weá::context::shift_cell_left(long shift_amount) {
	if (cur_cell == 0) [[unlikely]] {
		throw out_of_bounds_exception ();
	}

	cur_cell -= shift_amount;
}

void la_weá::context::shift_cell_right(long shift_amount) {
	if (cur_cell == cells.size() - 1) [[unlikely]] {
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
