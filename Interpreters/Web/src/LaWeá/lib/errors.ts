import CustomError from "./CustomError";

export class InvalidCommandError extends CustomError {
	constructor(commandName: string, line: number, col: number) {
		super(`'${commandName}' no es un comando válido, pos, saco de weas (línea: ${line}, columna: ${col})`);
	}
}

export class UnmatchedTulaError extends CustomError {
	constructor(line: number, col: number) {
		super(`Se encontró una tula sin su respectiva pichula en la línea ${line}, columna ${col}`);
	}
}

export class MisplacedPicoError extends CustomError {
	constructor(line: number, col: number) {
		super(`No debiste meter ese pico en la línea ${line}, columna ${col}`);
	}
}

export class InvalidCharacterError extends CustomError {
	constructor(character: string, line: number, col: number) {
		super(`'${character}' no es parte de La Weá, tonto qlo (línea: ${line}, columna: ${col})`);
	}
}

export class TooLongCommandError extends CustomError {
	constructor(line: number, col: number) {
		super(`¿Vos creís que yo soy weón, CTM? Te gustan largos, parece (línea: ${line}, columna: ${col})`);
	}
}

export class UnmatchedPichulasError extends CustomError {
	constructor() {
		super("O te sobran pichulas o te faltan tulas");
	}
}
