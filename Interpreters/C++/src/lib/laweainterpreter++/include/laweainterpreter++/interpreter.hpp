#ifndef INTERPRETER_HPP
#define INTERPRETER_HPP
#include <string>

namespace la_weá {
	class expression;

	/// An interpreter for La Weá.
	class interpreter {
		public:
			interpreter() = default;
			~interpreter() = default;

			interpreter(const interpreter &) = default;
			interpreter &operator=(const interpreter &) = default;

			interpreter(interpreter &&) noexcept = default;
			interpreter &operator=(interpreter &&) noexcept = default;

			/**
			 * The entry point for interpreting the code.
			 * @param file_path the path to the file with the code
			 * @note The file must have the .lw extension.
			 */
			void interpret(const std::string &file_path);

			/**
			 * Retrieves the interpretable expressions made from the code.
			 * @param code the code to parse
			 * @return A composite expression
			 */
			std::unique_ptr<expression> parse_code(const std::string &code);

			/**
			 * Interprets an expression.
			 * @param the expression to run
			 */
			void run(const std::unique_ptr<expression> &expression);

			/**
			 * A utility function that prints an error message and exits the program abnormally.
			 * @param err_msg the error message to print
			 */
			void exit_with_error_message(const std::string &err_msg) const;
		private:
			std::string get_code(const std::string &) const;
			void file_open_error_exit() const;

			void print_error_in_red(const std::string &) const;
	};
}
#endif
