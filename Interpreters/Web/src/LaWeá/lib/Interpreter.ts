import Module from "./Module";
import Command from "./Command";
import CodeParser from "./CodeParser";

export interface Interpreter {
	interpret(code: string): void;
	parseCode(code: string): Command[];
	run(commands: Command[]): void;
}

export class WasmInterpreter implements Interpreter {
	private wasmModule: Module;

	constructor(wasmModule: Module, ptrs: [ptr1: number, ptr2: number, ptr3: number, ptr4: number]) {
		this.wasmModule = wasmModule;
		this.wasmModule._add_function_pointers(...ptrs);
	}

	interpret(code: string): void {
		this.run(this.parseCode(code));
	}

	parseCode(code: string): Command[] {
		return new CodeParser(code).parse();
	}

	run(commands: Command[]): void {
		const typedCommands = new Uint8Array(commands);
		const cmdPtr = this.wasmModule._malloc(typedCommands.length * typedCommands.BYTES_PER_ELEMENT);

		this.wasmModule.HEAPU8.set(typedCommands, cmdPtr);

		this.wasmModule._run_commands(cmdPtr, commands.length);
		this.wasmModule._free(cmdPtr);
	}

	sendInput(input: string): void {
		const bytesToWrite = this.wasmModule.lengthBytesUTF32(input);
		const utf32Input = this.wasmModule._malloc(bytesToWrite + 4);

		this.wasmModule.stringToUTF32(input, utf32Input, bytesToWrite + 4);

		this.wasmModule._received_input(utf32Input, bytesToWrite / 4);
		this.wasmModule._free(utf32Input);
	}

	stop(): void {
		this.wasmModule._stop_running_commands();
	}
}
