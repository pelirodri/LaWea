//
// Copyright © 2023 Rodrigo Pelissier. All rights reserved.
//
// This file is part of La Weá Interpreter (C++)
//
// La Weá Interpreter (C++) is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <http://www.gnu.org/licenses/>.
//

#include "interpreter.hpp"
#include "expression.hpp"
#include "code_parser.hpp"
#include "exception.hpp"
#include "context.hpp"
#include "utf_utils.hpp"

#include <iostream>
#include <fstream>

#if defined(_WIN64)
	#include <windows>
#endif

la_weá::interpreter::interpreter() = default;
la_weá::interpreter::~interpreter() = default;

void la_weá::interpreter::interpret(const char *file_path) {
	run(parse_code(get_code(file_path)));
}

std::unique_ptr<la_weá::expression> la_weá::interpreter::parse_code(const std::u32string &code) {
	std::unique_ptr<expression> program;

	try {
		[[likely]]
		program = (code_parser (code)).parse();
	} catch (exception &e) {
		exit_with_error_message(std::string (e.what()));
	}

	return program;
}

void la_weá::interpreter::run(std::unique_ptr<expression> expression) {
	std::cout.setf(std::ios::unitbuf);

	context *ctx = new context;

	try {
		[[likely]]
		
		expression->interpret(ctx);
		delete ctx;
	} catch (exception &e) {
		delete ctx;
		exit_with_error_message(std::string (e.what()));
	}
}

void la_weá::interpreter::exit_with_error_message(const std::string &err_msg) const {
	print_error_in_red(err_msg.length() != 0 ? err_msg : "Error interno");
	std::exit(EXIT_FAILURE);
}

std::u32string la_weá::interpreter::get_code(const char *file_path) const {
	std::ifstream is (file_path);

	if (!is) [[unlikely]] {
		file_open_error_exit();
	}

	is.seekg(0, is.end);
	std::streampos utf8_code_len = is.tellg();
	is.seekg(0, is.beg);

	std::string utf8_code (utf8_code_len, ' ');
	is.read(&utf8_code[0], utf8_code_len);

	return utf_utils::utf8_str_to_utf32(std::u8string((const char8_t *)utf8_code.data()));
}

void la_weá::interpreter::file_open_error_exit() const {
	switch (errno) {
		case EACCES:
			exit_with_error_message("No tenís permiso pa’ abrir la weá");
		case ENOENT:
			exit_with_error_message("No existe la weá, pos, wn");
		default:
			exit_with_error_message("");
	}
}

#if !defined(_WIN64)
	inline void la_weá::interpreter::print_error_in_red(const std::string &err_msg) const {
		std::cerr << "\x1b[1;31m" << err_msg << "\x1b[0m\n";
	}
#else
	void la_weá::interpreter::print_error_in_red(const std::string &err_msg) const {
		WCHAR utf16_buffer[err_msg.length() + 1];

        short utf16_buffer_len = MultiByteToWideChar(
        	CP_UTF8,
        	0,
        	err_msg.c_str(),
        	err_msg.length(),
        	utf16_buffer,
        	sizeof(utf16_buffer)
        );

        utf16_buffer[utf16_buffer_len] = L'\n';

        HANDLE error_handle = GetStdHandle(STD_ERROR_HANDLE);

        CONSOLE_SCREEN_BUFFER_INFO console_info;
        GetConsoleScreenBufferInfo(error_handle, &console_info);

        WORD saved_attributes = console_info.wAttributes;

        SetConsoleTextAttribute(error_handle, FOREGROUND_INTENSITY | FOREGROUND_RED);
        WriteConsoleW(error_handle, utf16_buffer, utf16_buffer_len + 1, NULL, NULL);
        SetConsoleTextAttribute(error_handle, saved_attributes);
	}
#endif
