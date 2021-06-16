import Command from "./Command";

import { 
	InvalidCommandError,
	UnmatchedTulaError,
	MisplacedPicoError,
	InvalidCharacterError,
	TooLongCommandError,
	UnmatchedPichulasError
} from "./errors";

export default class CodeParser {
	private code: string;
	private commands: Command[] = [];

	private isMidComment = false;
	private commandNameBuffer = "";

	private line = 1;
	private col = 1;

	private loopOpenCommandsCount = 0;
	private loopCloseCommandsCount = 0;

	constructor(code: string) {
		this.code = code;
	}

	parse(): Command[] {
		this.parseCode();
		this.checkLoopsBalance();

		return this.commands;
	}

	private parseCode(): void {
		for (let i = 0; i <= this.code.length; i++) {
			this.parseCharacterAtIndex(i);
			this.parsedCharacterAtIndex(i);
		}
	}

	private parseCharacterAtIndex(codeIndex: number) {
		if (this.code[codeIndex] === "#") {
			this.isMidComment = true;
		}

		if (this.isCommandBoundary(codeIndex)) {
			this.handlePotentialCommand();
		} else if (!this.isMidComment) {
			this.addCharacterAtIndexToCommandName(codeIndex);
		}
	}

	private isCommandBoundary(codeIndex: number): boolean {
		return codeIndex === this.code.length || /\s/.test(this.code[codeIndex]) || this.code[codeIndex] === "#";
	}

	private handlePotentialCommand(): void {
		if (this.commandNameBuffer.length > 0) {
			const command = this.getCommandFromCommandName();

			this.handleLoopBalancing(command);
			this.commands.push(command);

			this.commandNameBuffer = "";
		}
	}

	private getCommandFromCommandName(): Command {
		for (let cmd = 0; cmd < 16; cmd++) {
			if (this.commandNameBuffer === Object.values(Command)[cmd]) {
				return cmd as Command;
			}
		}

		throw new InvalidCommandError(this.commandNameBuffer, this.line, this.col - this.commandNameBuffer.length);
	}

	private handleLoopBalancing(command: Command): void {
		if (command === Command.pichula) {
	        this.handlePichulaCommand();  
	    } else if (command === Command.tula) {
	        this.handleTulaCommand();
	    } else if (command === Command.pico) {
	       this.handlePicoCommand();
	    }
	}

	private handlePichulaCommand(): void {
		this.loopOpenCommandsCount++;
	}

	private handleTulaCommand(): void {
		if (this.loopCloseCommandsCount === this.loopOpenCommandsCount) {
			throw new UnmatchedTulaError(this.line, this.col - this.commandNameBuffer.length);
		}

		this.loopCloseCommandsCount++;
	}

	private handlePicoCommand(): void {
		if (this.loopOpenCommandsCount === this.loopCloseCommandsCount) {
			throw new MisplacedPicoError(this.line, this.col - this.commandNameBuffer.length);

			throw new Error(
				"No debiste meter ese pico en la línea " +
				String(this.line) +
				", columna " +
				String(this.col - this.commandNameBuffer.length)
			);
		}
	}

	private addCharacterAtIndexToCommandName(codeIndex: number): void {
		this.validateCommandCharacterAtIndex(codeIndex);
		this.validateCommandNameLength();

		this.commandNameBuffer += this.code[codeIndex];
	}

	private validateCommandCharacterAtIndex(codeIndex: number): void {
		if ("abcdeghiklmnopqrtuwáéíóú".indexOf(this.code[codeIndex]) === -1) {
			throw new InvalidCharacterError(this.code[codeIndex], this.line, this.col);
		}
	}

	private validateCommandNameLength(): void {
		if (this.commandNameBuffer.length === 7) {
			throw new TooLongCommandError(this.line, this.col - this.commandNameBuffer.length);
		}
	}

	private parsedCharacterAtIndex(codeIndex: number): void {
		if (this.code[codeIndex] === "\n") {
			this.line++;
			this.col = 1;

			this.isMidComment = false;
		} else {
			this.col++;
		}
	}

	private checkLoopsBalance(): void {
		if (this.loopOpenCommandsCount !== this.loopCloseCommandsCount) {
			throw new UnmatchedPichulasError();
		}
	}
}
