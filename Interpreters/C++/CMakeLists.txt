cmake_minimum_required(VERSION 3.18.3)

project(laweá++)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED True)

add_compile_options(-Ofast) 
add_subdirectory(${PROJECT_SOURCE_DIR}/src)
