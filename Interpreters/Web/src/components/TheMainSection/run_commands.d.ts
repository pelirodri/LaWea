declare namespace Module {
	function _malloc(size: number): number;
	function _free(ptr: number): void;

	function addFunction(func: object, sig?: string): number;
	function UTF8ToString(ptr: number, maxBytesToRead?: number): string;
	function UTF32ToString(ptr: number): string;
	function stringToUTF32(str: string, outPtr: number, maxBytesToWrite: number): number;
	function lengthBytesUTF32(str: string): number;

	function _run_commands(
		cmdPtr: number,
		cmdCount: number,
		input: number,
		inputLen: number,
		ptr1: number,
		ptr2: number,
		ptr3: number
	): void;

	function _stop_running_commands(): void;

	var HEAPU8: Uint8Array;
}

export default Module;
