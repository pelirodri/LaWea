#include "la_weá_exception.hpp"

la_weá_exception::la_weá_exception(const std::string &what_arg) : std::runtime_error (what_arg) {}

la_weá_exception::~la_weá_exception() = default;

la_weá_exception::la_weá_exception(la_weá_exception &&) noexcept = default;
la_weá_exception &la_weá_exception::operator=(la_weá_exception &&) noexcept = default;
