add_library(utf_utils utf_utils/utf_utils.c)

set(LA_WEA_INTERPRETER_DIR la_wea_interpreter)

set(
	LA_WEA_INTERPRETER_SOURCES 
	${LA_WEA_INTERPRETER_DIR}/la_weá_interpreter.c
	${LA_WEA_INTERPRETER_DIR}/get_code.c
	${LA_WEA_INTERPRETER_DIR}/parse_code.c 
	${LA_WEA_INTERPRETER_DIR}/execute_commands.c
)

add_library(la_wea_interpreter ${LA_WEA_INTERPRETER_SOURCES})

target_include_directories(utf_utils PUBLIC ${PROJECT_SOURCE_DIR}/include/utf_utils)
target_include_directories(la_wea_interpreter PUBLIC ${PROJECT_SOURCE_DIR}/include/la_wea_interpreter)

target_link_libraries(la_wea_interpreter PRIVATE utf_utils)
