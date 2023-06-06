#ifndef EXCEPTION_HPP
#define EXCEPTION_HPP
#include <stdexcept>

namespace la_weá {
	class exception: public std::runtime_error {
		public:
			virtual ~exception() = default;

			exception(const exception &) = default;
			exception &operator=(const exception &) = default;
		protected:
			exception(const std::string &what_arg) : std::runtime_error (what_arg) {}

			exception(exception &&) noexcept = default;
			exception &operator=(exception &&) noexcept = default;	
	};
}
#endif
