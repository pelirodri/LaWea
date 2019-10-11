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

import Foundation

/// An interpreter for La Weá.
open class LaWeáInterpreter {
    
    /// All the valid commands.
    public enum Command: String, CaseIterable {
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
    
    private var loopStartsCount = 0
    private var loopEndsCount = 0
    
    /**
     The entry point for interpreting the code.
     
     - Parameter filePath: The path to the file with the code.
     
     - Note: The file must have the .lw extension.
     */
    open func interpret(filePath: String) {
        if !filePath.hasSuffix(".lw") {
            exitInterpreter(errorMessage: "El archivo qlo tiene q tener la extensión .lw")
        }
        
        do {
            let code = try String(contentsOfFile: filePath)
            
            guard !code.isEmpty else { return }
            runCommands(getCommands(from: code))
        } catch {
            if (error as NSError).code == NSFileReadNoSuchFileError {
                exitInterpreter(errorMessage: "No existe la weá, po, wn")
            }
        }
    }
    
    /**
     Checks the validity of the code and retrieves the commands.
     
     - Parameter code: The code to parse.
     
     - Returns: The commands found.
     */
    open func getCommands(from code: String) -> [Command] {
        var commands = [Command]()
        var commandName = ""
        
        var line = 1
        var col = 1
        
        var isComment = false
        
        for i in 0...code.count {
            var char: Character!
            
            if i < code.count {
                char = code[code.index(code.startIndex, offsetBy: i)]
                
                if char == "#" {
                    isComment = true
                }
            }
            
            let spacesRange = String(char).rangeOfCharacter(from: CharacterSet.whitespacesAndNewlines)
            
            if i == code.count || spacesRange != nil || char == "#" {
                if !commandName.isEmpty {
                    let command = getCommand(from: commandName, line: line, col: col - commandName.count)
                    
                    if command == nil {
                        let subMessage = " no es un comando válido, po, saco de weas (línea: "
                        
                        exitInterpreter(
                            errorMessage: "'\(commandName)'\(subMessage)\(line), columna: \(col - commandName.count))"
                        )
                    }
                    
                    commands.append(command!)
                    commandName = ""
                }
            } else {
                if !isComment {
                    if !"abcdeghiklmnopqrtuwáéíóú".contains(char) {
                        let subMessage = "' no es parte de La Weá, tonto qlo (línea: "
                        exitInterpreter(errorMessage: "'\(char!)\(subMessage)\(line), columna: \(col))")
                    }
                    
                    if commandName.count == 7 {
                        let subMessage = "Voh creís q yo soy weón, ctm? Te gustan largos, parece (línea: "
                        exitInterpreter(errorMessage: "\(subMessage)\(line), columna: \(col - commandName.count))")
                    }
                    
                    commandName.append(char)
                }
            }
            
            if char == "\n" {
                line += 1
                col = 0
                
                isComment = false
            } else {
                col += 1
            }
        }
        
        if loopStartsCount != loopEndsCount {
            exitInterpreter(errorMessage: "O te sobran pichulas o te faltan tulas")
        }
        
        return commands
    }
    
    /**
     Runs the code by interpreting the commands.
     
     - Parameter commands: The commands to run.
     */
    open func runCommands(_ commands: [Command]) {
        var cells = [Int](repeating: 0, count: 8)
        var currentCell = 0
        
        var isCopySet = false
        var cellValueCopy = 0
        
        var i = 0
        
        let stdout = FileHandle.standardOutput
        
        while i < commands.count {
            switch commands[i] {
            case .maricón:
                cells[currentCell] &-= 1
            case .maraco:
                cells[currentCell] &-= 2
            case .weón:
                cells[currentCell] &+= 1
            case .aweonao:
                cells[currentCell] &+= 2
            case .maraca:
                cells[currentCell] = 0
            case .chucha:
                if currentCell == 0 {
                    exitInterpreter(errorMessage: "Te saliste pa la izquierda, aweonao")
                }
                
                currentCell -= 1
            case .puta:
                if currentCell == cells.capacity - 1 {
                    cells.append(contentsOf: repeatElement(0, count: cells.capacity))
                }
                
                currentCell += 1
            case .pichula:
                if cells[currentCell] == 0 {
                    i = findLoopEnd(commands: commands, i: i)
                }
            case .tula:
                if cells[currentCell] != 0 {
                    i = findLoopStart(commands: commands, i: i)
                }
            case .pico:
                i = findLoopEnd(commands: commands, i: i)
            case .ctm:
                if let unicodeScalar = UnicodeScalar(cells[currentCell]) {
                    stdout.write(String(unicodeScalar).data(using: .utf8)!)
                } else {
                    stdout.write("?".data(using: .utf8)!)
                }
            case .quéweá:
                if let line = readLine(), line.count == 1 {
                    cells[currentCell] = Int(line.first!.unicodeScalars.first!.value)
                } else {
                    cells[currentCell] = 0
                }
            case .chúpala:
                stdout.write(String(cells[currentCell]).data(using: .utf8)!)
            case .brígido:
                if let line = readLine(), line.count > 0, let newCellValue = Int(String(line)) {
                    cells[currentCell] = newCellValue
                } else {
                    cells[currentCell] = 0
                }
            case .perkin:
                if isCopySet {
                    cells[currentCell] = cellValueCopy
                    isCopySet = false
                } else {
                    cellValueCopy = cells[currentCell]
                    isCopySet = true
                }
            case .mierda:
                exit(EXIT_SUCCESS)
            }
            
            i += 1
        }
    }
    
    /**
     A utility function that prints an error message and exits the program abnormally.
     
     - Parameter errorMessage: The error message to print.
     */
    open func exitInterpreter(errorMessage: String) {
        print("\u{001b}[1;31m\(errorMessage.count > 0 ? errorMessage : "Error interno")\u{001b}[0m")
        exit(EXIT_FAILURE)
    }
    
    private func getCommand(from commandName: String, line: Int, col: Int) -> Command? {
        for command in Command.allCases {
            if Command(rawValue: commandName) == command {
                if command == .pichula {
                    loopStartsCount += 1
                } else if command == .tula {
                    if loopEndsCount == loopStartsCount {
                        let subMessage = "Se encontró una tula sin su respectiva pichula en la línea: "
                        exitInterpreter(errorMessage: "\(subMessage)\(line), columna: \(col)")
                    }
                    
                    loopEndsCount += 1
                } else if command == .pico {
                    if loopStartsCount == loopEndsCount {
                        exitInterpreter(errorMessage: "No debiste meter ese pico en la línea: \(line), columna: \(col)")
                    }
                }
                
                return command
            }
        }
        
        return nil
    }
    
    private func findLoopStart(commands: [Command], i: Int) -> Int {
        var loopLevel = 1
        
        for j in (0...i - 1).reversed() {
            if commands[j] == .tula {
                loopLevel += 1
            } else if commands[j] == .pichula {
                loopLevel -= 1
            }
            
            if loopLevel == 0 {
                return j
            }
        }
        
        return -1
    }

    private func findLoopEnd(commands: [Command], i: Int) -> Int {
        var loopLevel = 1
        
        for j in i + 1..<commands.count {
            if commands[j] == .pichula {
                loopLevel += 1
            } else if commands[j] == .tula {
                loopLevel -= 1
            }
            
            if loopLevel == 0 {
                return j
            }
        }
        
        return -1
    }
    
}
