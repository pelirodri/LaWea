#ifndef EXCEPTIONS_HPP
#define EXCEPTIONS_HPP
	#include "la_weá_exception.hpp"

	#include <string>

	class invalid_command_exception: public la_weá_exception {
		public:
			invalid_command_exception(const std::string &, long, long);
	};

	class unmatched_tula_exception: public la_weá_exception {
		public:
			unmatched_tula_exception(long, long);
	};

	class misplaced_pico_exception: public la_weá_exception {
		public:
			misplaced_pico_exception(long, long);
	};

	class invalid_character_exception: public la_weá_exception {
		public:
			invalid_character_exception(char32_t, long, long);
	};

	class too_long_command_exception: public la_weá_exception {
		public:
			too_long_command_exception(long, long);
	};

	class unmatched_pichulas_exception: public la_weá_exception {
		public:
			unmatched_pichulas_exception();
	};

	class out_of_bounds_exception: public la_weá_exception {
		public:
			out_of_bounds_exception();
	};
#endif
