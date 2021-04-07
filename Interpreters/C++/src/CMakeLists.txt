add_subdirectory(lib)
add_executable(lawea++ main.cpp)

target_link_libraries(lawea++ PRIVATE la_wea_interpreter)
set_target_properties(lawea++ PROPERTIES OUTPUT_NAME laweá++)

if(UNIX)
	install(TARGETS lawea++ DESTINATION bin)
elseif(WIN32 OR CYGWIN)
	install(TARGETS lawea++ DESTINATION "C:/Program Files/La Weá")
endif()
