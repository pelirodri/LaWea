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

#ifndef COMMAND_HPP
#define COMMAND_HPP
	namespace la_weá {
		/// All the valid commands.
		enum command {
			/// Decrements current cell value by 1.
			maricón,

			/// Decrements current cell value by 2.
			maraco,

			/// Increments current cell value by 1.
			weón,

			/// Increments current cell value by 2.
			aweonao,

			/// Sets current cell value to 0.
			maraca,

			/// Moves back one cell.
			chucha,

			/// Moves forward one cell.
			puta,

			/// If current cell value is 0, moves the instruction pointer after the matching tula command.
			pichula,

			/// If current cell value is not 0, moves the instruction pointer after the matching pichula command.
			tula,

			/// Moves the instruction pointer after the closest tula command, regardless of the current cell value.
			pico,

			/// Prints current cell value to STDOUT as an ASCII character.
			ctm,

			/// Reads ASCII character from STDIN and stores it in the current cell.
			quéweá,

			/// Prints current cell value to STDOUT as an integer.
			chúpala,

			/// Reads integer from STDIN and stores it in the current cell.
			brígido,

			/// Copies current cell value if there is no copy; otherwise, pastes the copied value and resets the copy.
			perkin,

			/// Terminates program.
			mierda
		};
	}
#endif
