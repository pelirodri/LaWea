#include "laweainterpreter++/interpreter.hpp"

#include <locale>
#include <cstring>

int main(int argc, char **argv) {
	la_weá::interpreter interpreter;

	#if !defined(__LP64__) && !defined(_WIN64)
	interpreter.exit_with_error_message("Qué chucha hacís usando todavía un sistema operativo de 32 bits...");
	#endif

	std::locale::global(std::locale(""));

	if (argc != 2) [[unlikely]] {
		interpreter.exit_with_error_message("Tenís que pasar la ruta del archivo con el código, pos, aweona’o qlo");
	} else if (!strstr(argv[1], ".lw")) [[likely]] {
		interpreter.exit_with_error_message("El archivo qlo tiene que tener la extensión .lw");
	}

	interpreter.interpret(std::string (argv[1]));

	return 0;
}
