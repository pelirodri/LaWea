import { Component, Vue } from "vue-property-decorator";

import TheCodeEditor from "../TheCodeEditor/TheCodeEditor.vue";
import TheOutputManager from "../TheOutputManager/TheOutputManager.vue";
import TheInputManager from "../TheInputManager/TheInputManager.vue";
import TheErrorModal from "../TheErrorModal/TheErrorModal.vue";

import { LaWeáInterpreter } from "./LaWeáInterpreter";
import { Command } from "./LaWeáInterpreter";

import Module from "./run_commands";

@Component({
	components: {
		TheCodeEditor,
		TheOutputManager,
		TheInputManager,
		TheErrorModal
	}
})
export default class TheMainSection extends Vue implements LaWeáInterpreter {
	private output = "";
	private input = "";

	private isStopButtonDisabled = true;
	private isInputDisabled = true;
	
	private errorMessage = "";

	private commands!: Command[];

	private loopStartsCount!: number;
	private loopEndsCount!: number;

	private appendToOutputPtr!: number;
	private isInputDisabledPtr!: number;
	private exitInterpreterPtr!: number;

	interpretLaWeá(code: string): void {
		this.stopRunningCommands();

		this.output = this.input = "";

		this.commands = [];
		this.loopStartsCount = this.loopEndsCount = 0;

		this.getCommands(code);
		this.isStopButtonDisabled = false;
		this.runCommands();
	}

	getCommands(code: string): void {	
		let commandName = "";
		let line = 1, col = 1;
		let isComment = false;
				
		for (let i = 0; i <= code.length; i++) {									
			if (code[i] === "#") {
				isComment = true;
			}
			
			if (i === code.length || code[i].match(/\s/) || code[i] === "#") {
				if (commandName.length) {
					const command = this.getCommand(commandName, line, col - commandName.length);

					if (command === -1) {
						this.exitInterpreter(
							"'" +
							commandName +
							"'" +
							" no es un comando válido, poh, saco de weas (línea: " +
							String(line) +
							", columna: " +
							String(col - commandName.length) +
							")"
						);
					}

					this.commands.push(command!);
					commandName = "";
				}
			} else {
				if (!isComment) {
					if ("abcdeghiklmnopqrtuwáéíóú".indexOf(code[i]) === -1) {
						this.exitInterpreter(
							"'" +
							code[i] +
							"'" +
							" no es parte de La Weá, tonto qlo (línea: " +
							String(line) +
							", columna: " +
							String(col) + ")"
						);
					}
					
					if (commandName.length === 7) {
						this.exitInterpreter(
							"¿Voh creís que yo soy weón, CTM? Te gustan largos, parece (línea: " +
							String(line) +
							", columna: " +
							String(col - commandName.length) +
							")"
						);
					}
					
					commandName += code[i];
				}
			}
			
			if (code[i] === "\n") {
				line++;
				col = 0;
				
				isComment = false;
			} else {
				col++;
			}
		}

		if (this.loopStartsCount !== this.loopEndsCount) {
			this.exitInterpreter("O te sobran pichulas o te faltan tulas");
		}	
	}

	runCommands(withInput = false): void {
		const typedCommands = new Uint8Array(this.commands);
		const cmdPtr = Module._malloc(typedCommands.length * typedCommands.BYTES_PER_ELEMENT);

		Module.HEAPU8.set(typedCommands, cmdPtr);

		let bytesToWrite = 0;
		let utf32Input = 0;

		if (withInput) {
			bytesToWrite = Module.lengthBytesUTF32(this.input);
			utf32Input = Module._malloc(bytesToWrite + 4);

			Module.stringToUTF32(this.input, utf32Input, bytesToWrite + 4);
		}	

		Module._run_commands(
			cmdPtr,
			this.commands.length,
			utf32Input,
			bytesToWrite / 4,
			this.appendToOutputPtr,
			this.isInputDisabledPtr,
			this.exitInterpreterPtr
		);

		Module._free(cmdPtr);

		if (withInput) {
			Module._free(utf32Input);
		}
	}

	exitInterpreter(errorMessage: string, shouldDisplayError = true): void {
		if (errorMessage) {
			if (shouldDisplayError) {
				this.errorMessage = errorMessage;
				this.$bvModal.show("error-modal");
			}

			console.error(errorMessage);

			throw new Error(errorMessage);
		}

		this.stopRunningCommands();

		throw new Error();
	}

	private getCommand(commandName: string, line: number, col: number): Command {
		for (let cmd = 0; cmd < 16; cmd++) {
			if (commandName === Object.values(Command)[cmd]) {
				if (cmd === Command.pichula) {
					this.loopStartsCount++;
				} else if (cmd === Command.tula) {
					if (this.loopEndsCount === this.loopStartsCount) {
						this.exitInterpreter(
							"Se encontró una tula sin su respectiva pichula en la línea: " + 
							String(line) + 
							", columna: " +
							String(col)
						);
					}

					this.loopEndsCount++;
				} else if (cmd === Command.pico) {
					if (this.loopStartsCount === this.loopEndsCount) {
						this.exitInterpreter(
							"No debiste meter ese pico en la línea: " +
							String(line) +
							", columna: " +
							String(col)
						);
					}
				}

				return cmd as Command;
			}
		}

		return -1 as Command;
	}

	private stopRunningCommands(): void {
		Module._stop_running_commands();

		this.isStopButtonDisabled = true;
		this.isInputDisabled = true;
	}

	mounted(): void {
		this.appendToOutputPtr = Module.addFunction((stringPtr: number, isNumber: number) => {
			this.output += Boolean(isNumber) ? Module.UTF8ToString(stringPtr) : Module.UTF32ToString(stringPtr);
		})

		this.isInputDisabledPtr = Module.addFunction((isInputDisabled: number) => {
			this.isInputDisabled = Boolean(isInputDisabled);

			this.$nextTick(() => {
				if (!this.isInputDisabled) {
					this.input = "";
					(this.$refs.inputManager as TheInputManager).focusInput();
				}
			});
		});

		this.exitInterpreterPtr = Module.addFunction((errorMessagePtr: number, shouldDisplayError: number) => {
			this.exitInterpreter(Module.UTF8ToString(errorMessagePtr), Boolean(shouldDisplayError));
		});
	}
}
