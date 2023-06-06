#ifndef EXPRESSION_HPP
#define EXPRESSION_HPP
namespace la_weá {
	class context;

	class expression {
		public:
			virtual ~expression() = default;

			virtual void interpret(context *) = 0;
		protected:
			expression() = default;

			expression(const expression &) = default;
			expression &operator=(const expression &) = default;

			expression(expression &&) noexcept = default;
			expression &operator=(expression &&) noexcept = default;
	};
}
#endif
