//
// Copyright © 2018 Rodrigo Pelissier. All rights reserved.
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


let interpreter = LaWeáInterpreter()

if CommandLine.arguments.count != 2 {
    interpreter.exitInterpreter(
        errorMessage: "Tenís q pasar un argumento, con la ruta del archivo con el código, po, aweonao qlo"
    )
}

interpreter.interpret(filePath: CommandLine.arguments[1])
