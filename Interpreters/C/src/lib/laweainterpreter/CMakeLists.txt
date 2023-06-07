add_subdirectory(lib/utfutils)

set(
	LA_WEA_INTERPRETER_SRC
	src/la_weá_interpreter.c
	src/get_code.c
	src/parse_code.c
	src/interpret_commands.c
)

add_library(laweainterpreter STATIC)

target_sources(
	laweainterpreter
	PRIVATE ${LA_WEA_INTERPRETER_SRC}
	PUBLIC FILE_SET HEADERS
	BASE_DIRS include
	FILES include/laweainterpreter/la_weá_interpreter.h
)

target_include_directories(laweainterpreter PRIVATE include/laweainterpreter src)
target_link_libraries(laweainterpreter PRIVATE utfutils)
