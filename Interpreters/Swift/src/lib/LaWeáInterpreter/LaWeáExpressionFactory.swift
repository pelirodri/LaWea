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

struct LaWeáExpressionFactory {
    static func createExpression(from commands: [LaWeáCommand], at index: Int) -> LaWeáExpression {
        switch commands[index] {
        case .maricón:
            return MaricónExpression()
        case .maraco:
            return MaracoExpression()
        case .weón:
            return WeónExpression()
        case .aweonao:
            return AweonaoExpression()
        case .maraca:
            return MaracaExpression()
        case .chucha:
            return ChuchaExpression()
        case .puta:
            return PutaExpression()
        case .pichula:
            return PichulaExpression(tulaIndex: LaWeáExpressionFactory.findLoopEnd(in: commands, from: index)!)
        case .tula:
            return TulaExpression(pichulaIndex: LaWeáExpressionFactory.findLoopStart(in: commands, from: index)!)
        case .pico:
            return PicoExpression(tulaIndex: LaWeáExpressionFactory.findLoopEnd(in: commands, from: index)!)
        case .ctm:
            return CTMExpression()
        case .quéweá:
            return QuéweáExpression()
        case .chúpala:
            return ChúpalaExpression()
        case .brígido:
            return BrígidoExpression()
        case .perkin:
            return PerkinExpression()
        case .mierda:
            return MierdaExpression()
        }
    }
    
    private static func findLoopStart(in commands: [LaWeáCommand], from commandIndex: Int) -> Int? {
        var loopLevel = 1
        
        for i in (0...commandIndex - 1).reversed() {
            if commands[i] == .tula {
                loopLevel += 1
            } else if commands[i] == .pichula {
                loopLevel -= 1
            }
            
            if loopLevel == 0 {
                return i
            }
        }
        
        return nil
    }

    private static func findLoopEnd(in commands: [LaWeáCommand], from commandIndex: Int) -> Int? {
        var loopLevel = 1
        
        for i in commandIndex + 1..<commands.count {
            if commands[i] == .pichula {
                loopLevel += 1
            } else if commands[i] == .tula {
                loopLevel -= 1
            }
            
            if loopLevel == 0 {
                return i
            }
        }
        
        return nil
    }
}
