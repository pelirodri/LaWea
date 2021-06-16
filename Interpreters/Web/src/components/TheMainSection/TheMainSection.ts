import { Component, Vue } from "vue-property-decorator";

import TheCodeEditor from "../TheCodeEditor/TheCodeEditor.vue";
import TheOutputManager from "../TheOutputManager/TheOutputManager.vue";
import TheInputManager from "../TheInputManager/TheInputManager.vue";
import TheErrorModal from "../TheErrorModal/TheErrorModal.vue";

import LaWeá from "../../LaWeá";
import Module from "../../LaWeá/wasm/run_commands.js";

@Component({
	components: {
		TheCodeEditor,
		TheOutputManager,
		TheInputManager,
		TheErrorModal
	}
})
export default class TheMainSection extends Vue {
	private output = "";
	private input = "";

	private isStopButtonDisabled = true;
	private isInputDisabled = true;
	
	private errorMessage = "";

	private laWeáInterpreter!: LaWeá.WasmInterpreter;

	interpretLaWeá(code: string): void {
		this.stopRunningLaWeáCommands();

		this.output = this.input = "";
		this.isStopButtonDisabled = false;

		try {
			this.laWeáInterpreter.interpret(code);
		} catch (error) {
			this.exitLaWeáInterpreter(error instanceof LaWeá.CustomError ? error.message : undefined);
		}
	}

	sendInputToLaWeáInterpreter(): void {
		this.laWeáInterpreter.sendInput(this.input);
	}

	stopRunningLaWeáCommands(): void {
		this.laWeáInterpreter.stop();
		this.isStopButtonDisabled = this.isInputDisabled = true;
	}

	private exitLaWeáInterpreter(errorMessage?: string): void {
		this.isStopButtonDisabled = this.isInputDisabled = true;

		if (errorMessage && errorMessage.length > 1) {
			this.errorMessage = errorMessage;
			this.$bvModal.show("error-modal");

			throw new Error(errorMessage);
		}
	}

	private async mounted(): Promise<void> {
		const wasmModule = await Module();
		this.laWeáInterpreter = new LaWeá.WasmInterpreter(wasmModule, this.getFunctionPointers(wasmModule));
	}

	private getFunctionPointers(wasmModule: LaWeá.Module): [ptr1: number, ptr2: number, ptr3: number, ptr4: number] {
		const appendCharToOutputPtr = wasmModule.addFunction((charPtr: number) => {
			this.output += wasmModule.UTF32ToString(charPtr);
		}, "vi");

		const appendNumToOutputPtr = wasmModule.addFunction((numPtr: number) => {
			this.output += wasmModule.UTF8ToString(numPtr);
		}, "vi");

		const isInputDisabledPtr = wasmModule.addFunction((isInputDisabled: number) => {
			this.isInputDisabled = Boolean(isInputDisabled);

			this.$nextTick(() => {
				if (!this.isInputDisabled) {
					this.input = "";
					(this.$refs.inputManager as TheInputManager).focusInput();
				}
			});
		}, "vi");

		const exitInterpreterPtr = wasmModule.addFunction((errorMessagePtr: number) => {
			this.exitLaWeáInterpreter(wasmModule.UTF8ToString(errorMessagePtr));
		}, "vi");

		return [appendCharToOutputPtr, appendNumToOutputPtr, isInputDisabledPtr, exitInterpreterPtr];
	}
}
