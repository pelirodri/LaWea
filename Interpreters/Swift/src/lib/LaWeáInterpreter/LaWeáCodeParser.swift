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

import Foundation

class LaWeáCodeParser {
    private var code: String
    private var commands = [LaWeáCommand]()

    private var isMidComment = false
    private var commandNameBuffer = ""

    private var line = 1
    private var col = 1
    
    private var loopOpenCommandsCount = 0
    private var loopCloseCommandsCount = 0
    
    init(code: String) {
        self.code = code
    }
    
    func parse() throws -> some LaWeáExpression {
        try parseCode()
        try checkLoopsBalance()
        
        return LaWeáProgramExpression(expressions: getExpressionsFromCommands())
    }
    
    private func parseCode() throws {
        for i in 0...code.count {
            try parseCharacter(at: i)
            didParseCharacter(at: i)
        }
    }
    
    private func parseCharacter(at index: Int) throws {
        if code[index] == "#" {
            isMidComment = true
        }
                    
        if isCommandBoundary(characterIndex: index) {
            try handlePotentialCommand()
        } else if !isMidComment {
            try addCharacter(at: index)
        }
    }
    
    private func isCommandBoundary(characterIndex: Int) -> Bool {
        var spacesRange: Range<String.Index>?
        
        if code[characterIndex] != nil {
            spacesRange = String(code[characterIndex]!).rangeOfCharacter(from: CharacterSet.whitespacesAndNewlines)
        }
        
        return characterIndex == code.count || spacesRange != nil || code[characterIndex] == "#"
    }
    
    private func handlePotentialCommand() throws {
        if !commandNameBuffer.isEmpty {
            let command = try getCommandFromCommandName()
            
            try handleLoopBalancing(command: command)
            commands.append(command)
            
            commandNameBuffer = ""
        }
    }
    
    private func getCommandFromCommandName() throws -> LaWeáCommand {
        for command in LaWeáCommand.allCases {
            if LaWeáCommand(rawValue: commandNameBuffer) == command {
                return command
            }
        }
        
        throw LaWeáError.invalidCommand(commandNameBuffer, line, col - commandNameBuffer.count)
    }
    
    private func handleLoopBalancing(command: LaWeáCommand) throws {
        if command == .pichula {
            handlePichulaCommand()
        } else if command == .tula {
            try handleTulaCommand()
        } else if command == .pico {
            try handlePicoCommand()
        }
    }
    
    private func handlePichulaCommand() {
        loopOpenCommandsCount += 1
    }
    
    private func handleTulaCommand() throws {
        if loopCloseCommandsCount == loopOpenCommandsCount {
            throw LaWeáError.unmatchedTula(line, col - "tula".count)
        }
        
        loopCloseCommandsCount += 1
    }
    
    private func handlePicoCommand() throws {
        if loopOpenCommandsCount == loopCloseCommandsCount {
            throw LaWeáError.misplacedPico(line, col - "pico".count)
        }
    }
    
    private func addCharacter(at index: Int) throws {
        try validateCharacter(at: index)
        try validateCommandNameLength()
        
        commandNameBuffer.append(code[index]!)
    }
    
    private func validateCharacter(at index: Int) throws {
        if !"abcdeghiklmnopqrtuwáéíóú".contains(code[index]!) {
            throw LaWeáError.invalidCharacter(code[index]!, line, col)
        }
    }
    
    private func validateCommandNameLength() throws {
        if commandNameBuffer.count == 7 {
            throw LaWeáError.tooLongCommand(line, col - commandNameBuffer.count)
        }
    }
    
    private func didParseCharacter(at index: Int) {
        if code[index] == "\n" || code[index] == "\r\n" {
            line += 1
            col = 1
            
            isMidComment = false
        } else {
            col += 1
        }
    }
    
    private func checkLoopsBalance() throws {
        if loopOpenCommandsCount != loopCloseCommandsCount {
            throw LaWeáError.unmatchedPichulas
        }
    }
    
    private func getExpressionsFromCommands() -> [LaWeáExpression] {
        var expressions = [LaWeáExpression]()
                
        for i in 0..<commands.count {
            expressions.append(LaWeáExpressionFactory.createExpression(from: commands, at: i))
        }
                
        return expressions
    }
}

extension String {
    subscript(offset: Int) -> Character? {
        guard offset < count else { return nil }
        return self[self.index(self.startIndex, offsetBy: offset)]
    }
}
