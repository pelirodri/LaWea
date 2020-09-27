add_subdirectory(libs)
add_executable(lawea main.c)

target_include_directories(lawea PRIVATE ${PROJECT_SOURCE_DIR}/include)
target_link_libraries(lawea PRIVATE la_wea_interpreter)

set_target_properties(lawea PROPERTIES OUTPUT_NAME laweá)

install(TARGETS lawea DESTINATION /usr/local/bin)
