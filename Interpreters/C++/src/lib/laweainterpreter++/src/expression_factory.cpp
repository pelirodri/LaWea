#include "expression_factory.hpp"
#include "expressions.hpp"

std::unique_ptr<la_weá::expression> la_weá::expression_factory::create_expression_from_cmd_at_idx(
	std::vector<command> commands,
	long cmd_idx
) {
	switch (commands[cmd_idx]) {
		case maricón:
			return std::make_unique<maricón_expression>();
		case maraco:
			return std::make_unique<maraco_expression>();
		case weón:
			return std::make_unique<weón_expression>();
		case aweonao:
			return std::make_unique<aweonao_expression>();
		case maraca:
			return std::make_unique<maraca_expression>();
		case chucha:
			return std::make_unique<chucha_expression>();
		case puta:
			return std::make_unique<puta_expression>();
		case pichula:
			return std::make_unique<pichula_expression>(expression_factory::find_loop_end(commands, cmd_idx));
		case tula:
			return std::make_unique<tula_expression>(expression_factory::find_loop_start(commands, cmd_idx));
		case pico:
			return std::make_unique<pico_expression>(expression_factory::find_loop_end(commands, cmd_idx));
		case ctm:
			return std::make_unique<ctm_expression>();
		case quéweá:
			return std::make_unique<quéweá_expression>();
		case chúpala:
			return std::make_unique<chúpala_expression>();
		case brígido:
			return std::make_unique<brígido_expression>();
		case perkin:
			return std::make_unique<perkin_expression>();
		case mierda:
			return std::make_unique<mierda_expression>();
	}
}

long la_weá::expression_factory::find_loop_start(std::vector<command> commands, long cmd_idx) {
	for (long i = cmd_idx - 1, loop_level = 1; i >= 0; i--) [[likely]] {
		if (commands[i] == tula) {
			loop_level++;
		} else if (commands[i] == pichula) {
			loop_level--;
		}

		if (!loop_level) [[likely]] {
			return i;
		}
	}

	return -1;
}

long la_weá::expression_factory::find_loop_end(std::vector<command> commands, long cmd_idx) {
	for (long i = cmd_idx + 1, loop_level = 1; i < commands.size(); i++) [[likely]] {
		if (commands[i] == pichula) {
			loop_level++;
		} else if (commands[i] == tula) {
			loop_level--;
		}

		if (!loop_level) [[likely]] {
			return i;
		}
	}

	return -1;
}
