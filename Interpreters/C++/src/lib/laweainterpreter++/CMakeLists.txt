add_subdirectory(lib/utfutils)

set(
	LA_WEA_INTERPRETER_SRC
	src/interpreter.cpp
	src/code_parser.cpp
	src/context.cpp
	src/program_expression.cpp
	src/expressions.cpp
	src/expression_factory.cpp
)

add_library(laweainterpreter++ STATIC)

target_sources(
	laweainterpreter++
	PRIVATE ${LA_WEA_INTERPRETER_SRC}
	PUBLIC FILE_SET HEADERS
	BASE_DIRS include
	FILES include/laweainterpreter++/interpreter.hpp
)

target_compile_features(laweainterpreter++ PRIVATE cxx_std_20)
target_include_directories(laweainterpreter++ PRIVATE include/laweainterpreter++ src)
target_link_libraries(laweainterpreter++ PRIVATE utfutils)
