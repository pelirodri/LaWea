import * as CodeMirror from "codemirror";

declare module "codemirror" {
	function defineSimpleMode(name: string, states: object): void;
	function simpleMode(config: object, states: object): object;
	function ensureState(states: object, name: string): void;
	function toRegex(val: any | undefined | null, caret: boolean): RegExp;
	function asToken(val?: any): any[] | null;
	function Rule(data: object, states: object): void;
	function tokenFunction(states: object, config: object): any | null;
	function cmp(a?: any, b?: any): boolean;
	function enterLocalMode(config: object, state: object, spec: object, token: string): void;
	function indexOf(val: any, arr: any[]): boolean | void;
	function indentFunction(states: object, meta: object): number;
}
