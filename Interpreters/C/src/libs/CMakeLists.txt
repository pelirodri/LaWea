add_library(utf8_utf32 utf8_utf32/utf8_utf32.c)
add_library(la_wea_interpreter la_wea_interpreter/la_weá_interpreter.c)

target_include_directories(utf8_utf32 PUBLIC ${PROJECT_SOURCE_DIR}/include)
target_include_directories(la_wea_interpreter PUBLIC ${PROJECT_SOURCE_DIR}/include)

target_link_libraries(la_wea_interpreter PRIVATE utf8_utf32)

if(UNIX AND NOT APPLE)
	target_link_libraries(la_wea_interpreter PRIVATE m)
endif()
