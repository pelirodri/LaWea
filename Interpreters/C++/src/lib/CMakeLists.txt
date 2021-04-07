add_library(utf_utils utf_utils/utf_utils.cpp)

set(LA_WEA_INTERPRETER_DIR la_wea_interpreter)

set(
	LA_WEA_INTERPRETER_SOURCES 
	${LA_WEA_INTERPRETER_DIR}/la_weá_interpreter.cpp
	${LA_WEA_INTERPRETER_DIR}/la_weá_code_parser.cpp
	${LA_WEA_INTERPRETER_DIR}/la_weá_expression.cpp
	${LA_WEA_INTERPRETER_DIR}/la_weá_context.cpp
	${LA_WEA_INTERPRETER_DIR}/la_weá_program_expression.cpp
	${LA_WEA_INTERPRETER_DIR}/expressions.cpp
	${LA_WEA_INTERPRETER_DIR}/expression_factory.cpp
	${LA_WEA_INTERPRETER_DIR}/la_weá_exception.cpp
	${LA_WEA_INTERPRETER_DIR}/exceptions.cpp
)

add_library(la_wea_interpreter ${LA_WEA_INTERPRETER_SOURCES})
 
target_include_directories(utf_utils PUBLIC ${PROJECT_SOURCE_DIR}/include/utf_utils)
target_include_directories(la_wea_interpreter PUBLIC ${PROJECT_SOURCE_DIR}/include/la_wea_interpreter)

target_link_libraries(la_wea_interpreter PRIVATE utf_utils)
