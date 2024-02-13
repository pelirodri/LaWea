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

#ifndef EXCEPTION_HPP
#define EXCEPTION_HPP
#include <stdexcept>

namespace la_weá {
	class exception: public std::runtime_error {
		public:
			virtual ~exception() = default;

			exception(const exception &) = default;
			exception &operator=(const exception &) = default;
		protected:
			exception(const std::string & what_arg) : std::runtime_error (what_arg) {}

			exception(exception &&) noexcept = default;
			exception &operator=(exception &&) noexcept = default;	
	};
}
#endif
