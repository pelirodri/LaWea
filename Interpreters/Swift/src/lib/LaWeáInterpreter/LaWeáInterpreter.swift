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

/// An interpreter for La Weá.
open class LaWeáInterpreter {
    public init() {}
    
    /**
     The entry point for interpreting the code.
     
     - Parameter filePath: The path to the file with the code.
     
     - Note: The file must have the .lw extension.
     */
    open func interpret(filePath: String) {
        run(expression: parse(code: getCode(filePath: filePath)))
    }
    
    /**
     Retrieves the interpretable expressions made from the code.
     
     - Parameter code: The code to parse.
     
     - Returns: A composite expression.
     */
    open func parse(code: String) -> LaWeáExpression {
        var program: LaWeáExpression!
        
        do {
            program = try LaWeáCodeParser(code: code).parse()
        } catch let error as LaWeáError {
            exit(with: error.description)
        } catch {
            exit(with: nil)
        }
        
        return program
    }
    
    /**
     Interprets and expression
     
     - Parameter expression: The expression to run.
     */
    open func run(expression: LaWeáExpression) {
        do {
            try expression.interpret(with: LaWeáContext())
        } catch let error as LaWeáError {
            exit(with: error.description)
        } catch {
            exit(with: nil)
        }
    }
    
    /**
     A utility function that prints an error message and exits the program abnormally.
     
     - Parameter with: The error message to print.
     */
    open func exit(with errorMessage: String?) {
        printErrorInRed(errorMessage: errorMessage != nil && errorMessage!.count > 0 ? errorMessage! : "Error interno")

        #if os(macOS)
        Darwin.exit(EXIT_FAILURE)
        #elseif os(Linux)
        Glibc.exit(EXIT_FAILURE)
        #elseif os(Windows)
        ucrt.exit(EXIT_FAILURE)
        #endif
    }
    
    private func getCode(filePath: String) -> String {
        var code = ""
        
        do {
            code = try String(contentsOfFile: filePath)
        } catch {
            handleFileOpenError(error)
        }
        
        return code
    }
    
    private func handleFileOpenError(_ error: Error) {
        let errorCode = (error as NSError).code
        
        if errorCode == NSFileReadNoPermissionError || errorCode == EACCES {
            exit(with: "No tenís permiso pa’ abrir la weá")
        } else if errorCode == NSFileReadNoSuchFileError || errorCode == ENOENT {
            exit(with: "No existe la weá, pos, wn")
        } else {
            exit(with: nil)
        }
    }
    
    private func printErrorInRed(errorMessage: String) {
        try! FileHandle.standardError.write(
            contentsOf: "\u{001b}[1;31m\(errorMessage)\u{001b}[0m\n".data(using: .utf8)!
        )
    }
}
