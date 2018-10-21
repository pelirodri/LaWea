# coding:utf-8
#
# Copyright © 2018 by its authors. All rights reserved. See AUTHORS.md
#
# This file is part of La Weá Interpreter (C++)
#
# La Weá Interpreter (C++) is free software: you can redistribute it and/or
# modify it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program. If not, see <http://www.gnu.org/licenses/>.
#

from collections import defaultdict
from sys import argv


def terminate(message, code=1):
    print(message)
    exit(code)


class LaWea:
    """¿Queríai un lenguaje esotérico wn? toma una implementación esotérica
    entonces po."""

    VALID_CHARACTERS = 'abcdeghiklmnopqrtuwáéíóú'

    # Each instruction is made to be a function that will receive the current
    # state of the machine (and some additional info) and will return the next
    # state.
    INSTRUCTIONS = {
        # Tape I/O
        'maricón': lambda tape, pointer, cb, counter, pt: (tape.update({pointer: tape[pointer] - 1}) or tape, pointer, cb, counter + 1),
        'maraco': lambda tape, pointer, cb, counter, pt: (tape.update({pointer: tape[pointer] - 2}) or tape, pointer, cb, counter + 1),
        'weón': lambda tape, pointer, cb, counter, pt: (tape.update({pointer: tape[pointer] + 1}) or tape, pointer, cb, counter + 1),
        'aweonao': lambda tape, pointer, cb, counter, pt: (tape.update({pointer: tape[pointer] + 2}) or tape, pointer, cb, counter + 1),
        'maraca': lambda tape, pointer, cb, counter, pt: (tape.update({pointer: 0}) or tape, pointer, cb, counter + 1),

        # Tape movement
        'chucha': lambda tape, pointer, cb, counter, pt: (tape, pointer - 1, cb, counter + 1) if pointer else terminate('Te saliste pa la izquierda, aweonao'),
        'puta': lambda tape, pointer, cb, counter, pt: (tape, pointer + 1, cb, counter + 1),

        # Conditional structures
        'pichula': lambda tape, pointer, cb, counter, pt: (tape, pointer, cb, pt[0][counter] if tape[pointer] == 0 else (counter + 1)),
        'tula': lambda tape, pointer, cb, counter, pt: (tape, pointer, cb, pt[1][counter] if tape[pointer] != 0 else (counter + 1)),
        'pico': lambda *_: LaWea.pico(*_),
        'perkin': lambda tape, pointer, cb, counter, pt: (tape.update({pointer: cb if cb is not None else tape[pointer]}) or tape, pointer, None if cb is not None else tape[pointer], counter + 1),

        # Standard I/O
        'ctm': lambda tape, pointer, cb, counter, pt: (print(chr(tape[pointer]), end='', flush=True) or tape, pointer, cb, counter + 1),
        'quéweá': lambda tape, pointer, cb, counter, pt: (tape.update({pointer: input()}) or tape, pointer, cb, counter + 1),
        'chúpala': lambda tape, pointer, cb, counter, pt: (print(tape[pointer], end='', flush=True) or tape, pointer, cb, counter + 1),
        'brígido': lambda tape, pointer, cb, counter, pt: (tape.update({pointer: int(input())}) or tape, pointer, cb, counter + 1),
        'mierda': lambda *_: exit(0),

    }

    # Pico was very difficult to write in a one-line lambda (even for this sick
    # implementation) so it was extracted as a static method
    @staticmethod
    def pico(tape, pointer, clipboard, counter, pichulas_tulas):
        pichulas, tulas = pichulas_tulas
        tulas_differences = {index: abs(index - counter) for index, _ in tulas.items()}
        closest_tula = sorted(tulas_differences.items(), key=lambda item: item[1])[0][0]
        return tape, pointer, clipboard, closest_tula + 1

    def __init__(self):
        self.tape = defaultdict(lambda: 0)
        self.pointer = 0
        self.counter = 0
        self.clipboard = None

    # This would realize some basic sanity checks for the input code
    def parse_raw_input(self, text):
        text = enumerate(text.split('\n'))
        command_lines = filter(lambda line: line[1] and line[1][0] != '#', text)
        commands = []
        for row, line in command_lines:
            spaces = [pos for pos, char in enumerate(line) if char == ' ']
            commands += [
                (row + 1, column + 2, command)
                for column, command
                in (zip([0] + spaces, line.split(' ')))
            ]
        return commands

    def parse(self, text):
        commands = self.parse_raw_input(text)
        pichulas_tulas = self.detect_pichulas_and_tulas(commands)
        while self.counter < len(commands):
            row, column, command = commands[self.counter]
            if [character for character in command if character not in self.VALID_CHARACTERS]:
                terminate(
                    "'{}' no es parte de La Weá, tonto qlo (línea: {}, "
                    "columna: {})".format(command, row, column)
                )

            instruction = self.INSTRUCTIONS.get(command)
            if not instruction:
                if len(command) >= 7:
                    terminate(
                        'Voh creís q yo soy weón, ctm? Te gustan largos, '
                        'parece (línea: {}, columna: {})'.format(row, column)
                    )
                else:
                    terminate(
                        '{} no es un comando válido, po, saco de weas '
                        '(línea: {}, columna: {})'.format(command, row, column)
                    )

            if command == 'pico' and not any(pichulas_tulas):
                terminate(
                    'No debiste meter ese pico en la línea: {}, '
                    'columna: {}'.format(row, column)
                )

            try:
                self.tape, self.pointer, self.clipboard, self.counter = \
                    instruction(self.tape, self.pointer, self.clipboard, self.counter, pichulas_tulas)
            except:
                terminate('Error interno (columna: {}, fila: {})'.format(row, column))

    # Way more useful than the classic stack - a map of every pichula and tula
    # pointing to their corresponding counterparts
    def detect_pichulas_and_tulas(self, commands):
        stack, tulas, pichulas = [], {}, {}

        try:
            for position, (_, _, command) in enumerate(commands):
                if command == 'pichula':
                    stack.append(position)
                if command == 'tula':
                    start = stack.pop()
                    pichulas[start] = position
                    tulas[position] = start
            if stack:
                raise IndexError
        except IndexError:
            terminate('O te sobran pichulas o te faltan tulas')
        return pichulas, tulas


if __name__ == '__main__':
    if len(argv) < 2:
        terminate('Tenís q pasar un argumento, con la ruta del archivo con el '
                  'código, po, aweonao qlo')

    if not argv[1].endswith('lw'):
        terminate('El archivo qlo tiene q tener la extensión .lw')

    try:
        with open(argv[1], encoding='utf-8') as f:
            lawea = LaWea()
            lawea.parse(f.read())
    except IOError:
        terminate('No existe la weá, po, wn')
