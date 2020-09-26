//
// Copyright © 2020 Rodrigo Pelissier. All rights reserved.
//
// This file is part of La Weá Interpreter (C++)
//
// La Weá Interpreter (C++) is free software: you can redistribute it and/or modify
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

#include "la_weá_interpreter.hpp"

#include <locale>
#include <cstring>

int main(int argc, char **argv) {
	la_weá_interpreter interpreter;

	#if !defined(__LP64__) && !defined(_WIN64)
		interpreter.exit_interpreter(u8"Qué chucha hacís usando todavía un sistema operativo de 32 bits...");
	#endif

	std::locale::global(std::locale(""));

	if (argc != 2) {
		interpreter.exit_interpreter(u8"Tenís que pasar la ruta del archivo con el código, poh, aweona’o qlo");
	} else if (!strstr(argv[1], ".lw")) {
		interpreter.exit_interpreter(u8"El archivo qlo tiene que tener la extensión .lw");
	}

	interpreter.interpret(argv[1]);

	return 0;
}
