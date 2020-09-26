add_library(la_wea_interpreter la_weá_interpreter.c)

target_include_directories(la_wea_interpreter PUBLIC ${PROJECT_SOURCE_DIR}/include)
target_link_libraries(la_wea_interpreter PRIVATE utf8_utf32)
