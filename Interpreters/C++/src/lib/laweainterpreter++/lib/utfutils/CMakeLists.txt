add_library(utfutils STATIC)

target_sources(
	utfutils
	PRIVATE src/utf_utils.cpp
	PUBLIC FILE_SET HEADERS
	BASE_DIRS include
	FILES include/utfutils/utf_utils.hpp
)

target_compile_features(utfutils PRIVATE cxx_std_20)
target_include_directories(utfutils PRIVATE include/utfutils)
