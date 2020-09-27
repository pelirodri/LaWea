add_library(utf8_utf32_utility utf8_utf32_utility/utf8_utf32_utility.cpp)
add_library(la_wea_interpreter la_wea_interpreter/la_weá_interpreter.cpp)
 
target_include_directories(utf8_utf32_utility PUBLIC ${PROJECT_SOURCE_DIR}/include)
target_include_directories(la_wea_interpreter PUBLIC ${PROJECT_SOURCE_DIR}/include)

target_link_libraries(la_wea_interpreter PRIVATE utf8_utf32_utility)
