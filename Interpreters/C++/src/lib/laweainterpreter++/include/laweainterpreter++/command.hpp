#ifndef COMMAND_HPP
#define COMMAND_HPP
namespace la_weá {
	/// All the valid commands.
	enum command {
		/// Decrements current cell value by 1.
		maricón,

		/// Decrements current cell value by 2.
		maraco,

		/// Increments current cell value by 1.
		weón,

		/// Increments current cell value by 2.
		aweonao,

		/// Sets current cell value to 0.
		maraca,

		/// Moves back one cell.
		chucha,

		/// Moves forward one cell.
		puta,

		/// If current cell value is 0, moves the instruction pointer after the matching tula command.
		pichula,

		/// If current cell value is not 0, moves the instruction pointer after the matching pichula command.
		tula,

		/// Moves the instruction pointer after the closest tula command, regardless of the current cell value.
		pico,

		/// Prints current cell value to STDOUT as an ASCII character.
		ctm,

		/// Reads ASCII character from STDIN and stores it in the current cell.
		quéweá,

		/// Prints current cell value to STDOUT as an integer.
		chúpala,

		/// Reads integer from STDIN and stores it in the current cell.
		brígido,

		/// Copies current cell value if there is no copy; otherwise, pastes the copied value and resets the copy.
		perkin,

		/// Terminates program.
		mierda
	};
}
#endif
