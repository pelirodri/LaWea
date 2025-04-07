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
// asize_t with this program. If not, see <http://www.gnu.org/licenses/>.
//

#include "interpreter.hpp"
#include "expression.hpp"
#include "code_parser.hpp"
#include "exception.hpp"
#include "context.hpp"
#include "utfutils/utf_utils.hpp"

#include <fstream>

#if defined(_WIN64)
#include <windows.h>
#endif

void la_weá::interpreter::interpret(std::string_view file_path) {
	try {
		run_expressions(parse_code(get_code(file_path)));
	} catch (const exception &e) {
		exit_with_error_message(std::string (e.what()));
	}
}

std::vector<std::unique_ptr<la_weá::expression>> la_weá::interpreter::parse_code(std::string_view code) {
	return (code_parser (code)).parse();
}

void la_weá::interpreter::run_expressions(const std::vector<std::unique_ptr<expression>> &expressions) {
	std::cout.setf(std::ios::unitbuf);

	context ctx;

	for (size_t i = 0; i < expressions.size(); i = ctx.get_expr_idx()) [[likely]] {
		expressions[i]->interpret(ctx);
	}
}

void la_weá::interpreter::exit_with_error_message(std::string_view error_msg) const {
	print_error_in_red(error_msg.length() != 0 ? error_msg : "Error interno");
	std::exit(EXIT_FAILURE);
}

std::string la_weá::interpreter::get_code(std::string_view file_path) const {
	std::ifstream is (file_path);

	if (!is) [[unlikely]] {
		exit_with_file_open_error();
	}

	size_t code_len = get_file_length_from_stream(is);

	std::string code (code_len, ' ');
	is.read(&code[0], code_len);

	return std::string (code.c_str());
}

void la_weá::interpreter::exit_with_file_open_error() const {
	switch (errno) {
		case EACCES:
			exit_with_error_message("No tenís permiso pa’ abrir la weá");
		case ENOENT:
			exit_with_error_message("No existe la weá, pos, wn");
		[[unlikely]] default:
			exit_with_error_message("");
	}
}

size_t la_weá::interpreter::get_file_length_from_stream(std::ifstream &is) const {
	is.seekg(0, is.end);
	size_t code_len = is.tellg();
	is.seekg(0, is.beg);

	return code_len;
}

#if defined(_WIN64)
void la_weá::interpreter::print_error_in_red(std::string_view error_msg) const {
	HANDLE error_handle = GetStdHandle(STD_ERROR_HANDLE);

    CONSOLE_SCREEN_BUFFER_INFO console_info;
    GetConsoleScreenBufferInfo(error_handle, &console_info);

    WORD saved_attributes = console_info.wAttributes;

    SetConsoleTextAttribute(error_handle, FOREGROUND_INTENSITY | FOREGROUND_RED);

    std::u16string utf16_error_msg = utf_utils::utf8_str_to_utf16(std::u8string ((const char8_t *)error_msg.c_str()));

    WriteConsoleW(
		error_handle,
		(utf16_error_msg + u'\n').c_str(),
		utf_utils::utf16_strlen(utf16_error_msg) + 1,
		NULL,
		NULL
	);

    SetConsoleTextAttribute(error_handle, saved_attributes);
}
#endif
