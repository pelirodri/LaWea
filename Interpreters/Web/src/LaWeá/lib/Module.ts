export default interface Module extends WebAssembly.Module {
	addFunction(func: object, sig: string): number;
	UTF8ToString(ptr: number, maxBytesToRead?: number): string;
	UTF32ToString(ptr: number): string;
	stringToUTF32(str: string, outPtr: number, maxBytesToWrite: number): number;
	lengthBytesUTF32(str: string): number;
	
	_malloc(size: number): number;
	_free(ptr: number): void;

	_run_commands(cmdPtr: number, cmdCount: number): void;
	_received_input(input: number, inputLen: number): void;
	_stop_running_commands(): void;
	_add_function_pointers(ptr1: number, ptr2: number, ptr3: number, ptr4: number): void;

	HEAPU8: Uint8Array;
}
