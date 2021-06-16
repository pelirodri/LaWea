//
// Copyright © 2021 Rodrigo Pelissier. All rights reserved.
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

enum LaWeáError: Error {
    case invalidCommand(commandName: String, line: Int, col: Int)
    case unmatchedTula(line: Int, col: Int)
    case misplacedPico(line: Int, col: Int)
    case invalidCharacter(character: Character, line: Int, col: Int)
    case tooLongCommand(line: Int, col: Int)
    case unmatchedPichulas
    case outOfBounds
}

extension LaWeáError: CustomStringConvertible {
    var description: String {
        switch self {
        case let .invalidCommand(commandName, line, col):
            return "'\(commandName)' no es un comando válido, pos, saco de weas (línea: \(line), columna: \(col))"
        case let .unmatchedTula(line, col):
            return "Se encontró una tula sin su respectiva pichula en la línea \(line), columna \(col)"
        case let .misplacedPico(line, col):
            return "No debiste meter ese pico en la línea \(line), columna \(col)"
        case let .invalidCharacter(character, line, col):
            return "'\(character)' no es parte de La Weá, tonto qlo (línea: \(line), columna: \(col))"
        case let .tooLongCommand(line, col):
            return "¿Vos creís que yo soy weón, CTM? Te gustan largos, parece (línea: \(line), columna: \(col))"
        case .unmatchedPichulas:
            return "O te sobran pichulas o te faltan tulas"
        case .outOfBounds:
            return "Te saliste pa’ la izquierda, aweona’o"
        }
    }
}
