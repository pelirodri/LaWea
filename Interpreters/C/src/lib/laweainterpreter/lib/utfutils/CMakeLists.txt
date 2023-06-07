add_library(utfutils STATIC)

target_sources(
	utfutils
	PRIVATE src/utf_utils.c
	PUBLIC FILE_SET HEADERS
	BASE_DIRS include
	FILES include/utfutils/utf_utils.h
)

target_include_directories(utfutils PRIVATE include/utfutils)
