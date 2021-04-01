//
// Copyright © 2021 Rodrigo Pelissier. All rights reserved.
//
// This file is part of La Weá Interpreter (C)
//
// La Weá Interpreter (C) is free software: you can redistribute it and/or modify
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

#include "la_weá_interpreter.h"

#include <locale.h>
#include <string.h>

int main(int argc, char **argv) {
	#if !defined(__LP64__) && !defined(_WIN64)
		la_weá_exit_with_error_message("Qué chucha hacís usando todavía un sistema operativo de 32 bits...");
	#endif

    setlocale(LC_CTYPE, "");

    if (argc != 2) {
        la_weá_exit_with_error_message("Tenís que pasar la ruta del archivo con el código, pos, aweona’o qlo");
    } else if (!strstr(argv[1], ".lw")) {
    	la_weá_exit_with_error_message("El archivo qlo tiene que tener la extensión .lw");
    }

    la_weá_interpret(argv[1]);

    return 0;
}
