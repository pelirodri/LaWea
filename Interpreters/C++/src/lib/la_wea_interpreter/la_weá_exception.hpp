#ifndef LA_WEÁ_EXCEPTION_HPP
#define LA_WEÁ_EXCEPTION_HPP
	#include <stdexcept>
	#include <string>

	class la_weá_exception: public std::runtime_error {
		public:
			la_weá_exception(const la_weá_exception &) = delete;
			la_weá_exception &operator=(const la_weá_exception &) = delete;

			la_weá_exception(const std::string &);
			virtual ~la_weá_exception();

			la_weá_exception(la_weá_exception &&) noexcept;
			la_weá_exception &operator=(la_weá_exception &&) noexcept;
	};
#endif
