//
// Copyright © 2022 Rodrigo Pelissier. All rights reserved.
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

struct LaWeáProgramExpression: LaWeáExpression {
    var expressions: [LaWeáExpression]
    
    init(expressions: [LaWeáExpression]) {
        self.expressions = expressions
    }
    
    func interpret(with context: LaWeáContext) throws {
        var i = 0
        
        while i < expressions.count {
            try expressions[i].interpret(with: context)
            i = context.expressionIndex
        }
    }
}
