export interface LaWeáInterpreter {
	interpretLaWeá(code: string): void;
	getCommands(code: string): void;
	runCommands(): void;
	exitInterpreter(errorMessage: string): void;
}

export enum Command {
	maricón,
	maraco,
	weón,
	aweonao,
	maraca,
	chucha,
	puta,
	pichula,
	tula,
	pico,
	ctm,
	quéweá,
	chúpala,
	brígido,
	perkin,
	mierda
}
