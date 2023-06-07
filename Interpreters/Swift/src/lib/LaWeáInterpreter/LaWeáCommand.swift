//
// Copyright © 2023 Rodrigo Pelissier. All rights reserved.
//
// This file is part of La Weá Interpreter (Swift)
//
// La Weá Interpreter (Swift) is free software: you can redistribute it and/or modify
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

/// All the valid commands.
public enum LaWeáCommand: String, CaseIterable {
    /// Decrements current cell value by 1.
    case maricón
    /// Decrements current cell value by 2.
    case maraco
    /// Increments current cell value by 1.
    case weón
    /// Increments current cell value by 2.
    case aweonao
    /// Sets current cell value to 0.
    case maraca
    /// Moves back one cell.
    case chucha
    /// Moves forward one cell.
    case puta
    /// If current cell value is 0, moves the instruction pointer after the matching tula command.
    case pichula
    /// If current cell value is not 0, moves the instruction pointer after the matching pichula command.
    case tula
    /// Moves the instruction pointer after the closest tula command, regardless of the current cell value.
    case pico
    /// Prints current cell value to STDOUT as an ASCII character.
    case ctm
    /// Reads ASCII character from STDIN and stores it in the current cell.
    case quéweá
    /// Prints current cell value to STDOUT as an integer.
    case chúpala
    /// Reads integer from STDIN and stores it in the current cell.
    case brígido
    /// Copies current cell value if there is no copy; otherwise, pastes the copied value and resets the copy.
    case perkin
    /// Terminates program.
    case mierda
}
