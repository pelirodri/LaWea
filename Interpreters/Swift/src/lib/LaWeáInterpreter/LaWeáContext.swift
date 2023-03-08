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

public class LaWeáContext {
    var expressionIndex = 0
    
    private var cells = [Int64](repeating: 0, count: 8)
    private var currentCell = 0
    
    private var isCopySet = false
    private var cellValueCopy: Int64 = 0
    
    var cellValue: Int64 {
        get {
            cells[currentCell]
        } set {
            cells[currentCell] = newValue
        }
    }
    
    func decreaseCellValue(by amount: Int64 = 1) {
        cellValue -= amount
    }
    
    func increaseCellValue(by amount: Int64 = 1) {
        cellValue += amount
    }
    
    func resetCellValue() {
        cellValue = 0
    }
    
    func shiftCellLeft(by amount: Int = 1) throws {
        if currentCell == 0 {
            throw LaWeáError.outOfBounds
        }
        
        currentCell -= amount
    }
    
    func shiftCellRight(by amount: Int = 1) {
        if currentCell == cells.count - 1 {
            cells.append(contentsOf: repeatElement(0, count: cells.count))
        }
        
        currentCell += amount
    }
    
    func copyCellValue() {
        if isCopySet {
            cellValue = cellValueCopy
            isCopySet = false
        } else {
            cellValueCopy = cellValue
            isCopySet = true
        }
    }
}
