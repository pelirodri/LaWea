cmake_minimum_required(VERSION 3.23 FATAL_ERROR)

project(lawea++ VERSION 2.1.0 LANGUAGES CXX)

add_subdirectory(${PROJECT_SOURCE_DIR}/src/lib/laweainterpreter++)

set(CMAKE_CXX_COMPILER "/usr/bin/clang++")
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${PROJECT_BINARY_DIR}/bin)

add_executable(${PROJECT_NAME})

set_target_properties(${PROJECT_NAME} PROPERTIES OUTPUT_NAME laweá++)

target_sources(${PROJECT_NAME} PRIVATE ${PROJECT_SOURCE_DIR}/src/main.cpp)
target_compile_features(${PROJECT_NAME} PRIVATE cxx_std_20)
target_link_libraries(${PROJECT_NAME} PRIVATE laweainterpreter++)

install(TARGETS ${PROJECT_NAME} RUNTIME)
