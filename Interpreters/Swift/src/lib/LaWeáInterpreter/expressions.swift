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

struct MaricónExpression: LaWeáExpression {
    func interpret(with context: LaWeáContext) {
        context.decreaseCellValue()
        context.expressionIndex += 1
    }
}

struct MaracoExpression: LaWeáExpression {
    func interpret(with context: LaWeáContext) {
        context.decreaseCellValue(by: 2)
        context.expressionIndex += 1
    }
}

struct WeónExpression: LaWeáExpression {
    func interpret(with context: LaWeáContext) {
        context.increaseCellValue()
        context.expressionIndex += 1
    }
}

struct AweonaoExpression: LaWeáExpression {
    func interpret(with context: LaWeáContext) {
        context.increaseCellValue(by: 2)
        context.expressionIndex += 1
    }
}

struct MaracaExpression: LaWeáExpression {
    func interpret(with context: LaWeáContext) {
        context.resetCellValue()
        context.expressionIndex += 1
    }
}

struct ChuchaExpression: LaWeáExpression {
    func interpret(with context: LaWeáContext) throws {
        try context.shiftCellLeft()
        context.expressionIndex += 1
    }
}

struct PutaExpression: LaWeáExpression {
    func interpret(with context: LaWeáContext) {
        context.shiftCellRight()
        context.expressionIndex += 1
    }
}

struct PichulaExpression: LaWeáExpression {
    private var tulaIndex: Int
    
    init(tulaIndex: Int) {
        self.tulaIndex = tulaIndex
    }
    
    func interpret(with context: LaWeáContext) {
        if context.cellValue == 0 {
            context.expressionIndex = tulaIndex + 1
        } else {
            context.expressionIndex += 1
        }
    }
}

struct TulaExpression: LaWeáExpression {
    private var pichulaIndex: Int
    
    init(pichulaIndex: Int) {
        self.pichulaIndex = pichulaIndex
    }
    
    func interpret(with context: LaWeáContext) {
        if context.cellValue != 0 {
            context.expressionIndex = pichulaIndex + 1
        } else {
            context.expressionIndex += 1
        }
    }
}

struct PicoExpression: LaWeáExpression {
    private var tulaIndex: Int
    
    init(tulaIndex: Int) {
        self.tulaIndex = tulaIndex
    }
    
    func interpret(with context: LaWeáContext) {
        context.expressionIndex = tulaIndex + 1
    }
}

struct CTMExpression: LaWeáExpression {
    func interpret(with context: LaWeáContext) {
        if let unicodeScalar = UnicodeScalar(UInt32(context.cellValue)) {
            FileHandle.standardOutput.write(String(unicodeScalar).data(using: .utf8)!)
        } else {
            FileHandle.standardOutput.write("\u{FFFD}".data(using: .utf8)!)
        }
        
        context.expressionIndex += 1
    }
}

struct QuéweáExpression: LaWeáExpression {
    func interpret(with context: LaWeáContext) {
        if let line = readLine(), line.count == 1 {
            context.cellValue = Int64(line.first!.unicodeScalars.first!.value)
        } else {
            context.resetCellValue()
        }
        
        context.expressionIndex += 1
    }
}

struct ChúpalaExpression: LaWeáExpression {
    func interpret(with context: LaWeáContext) {
        FileHandle.standardOutput.write(String(context.cellValue).data(using: .utf8)!)
        context.expressionIndex += 1
    }
}

struct BrígidoExpression: LaWeáExpression {
    func interpret(with context: LaWeáContext) {
        if let line = readLine(), line.count > 0, let newCellValue = Int64(String(line)) {
            context.cellValue = newCellValue
        } else {
            context.resetCellValue()
        }
        
        context.expressionIndex += 1
    }
}

struct PerkinExpression: LaWeáExpression {
    func interpret(with context: LaWeáContext) {
        context.copyCellValue()
        context.expressionIndex += 1
    }
}

struct MierdaExpression: LaWeáExpression {
    func interpret(with context: LaWeáContext) {
        #if os(macOS)
        Darwin.exit(EXIT_FAILURE)
        #elseif os(Linux)
        Glibc.exit(EXIT_FAILURE)
        #elseif os(Windows)
        ucrt.exit(EXIT_FAILURE)
        #endif
    }
}
