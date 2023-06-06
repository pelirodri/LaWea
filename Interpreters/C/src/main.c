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
