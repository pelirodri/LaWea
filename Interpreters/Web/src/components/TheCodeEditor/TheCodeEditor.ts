import { Component, Prop, Vue } from "vue-property-decorator";

import CodeMirror from "codemirror";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import "codemirror/addon/mode/simple.js";

@Component
export default class CodeEditor extends Vue {
	@Prop({ default: true }) readonly isStopButtonDisabled!: boolean;

	private isRunButtonDisabled = true;

	private editor!: CodeMirror.Editor;

	run(): void {
		this.$emit("runButtonClicked", this.editor.getValue(""));
	}

	stop(): void {
		this.$emit("stopButtonClicked");
	}

	mounted(): void {
		CodeMirror.defineSimpleMode("laweá", {
			start: [
				{ regex: /[abcdeghiklmnopqrtuwáéíóú\s]/, token: "keyword" },
				{ regex: /#.*/, token: "comment" },
				{ regex: /./, token: "error" }
			],

			meta: {
				lineComment: "#"
			}
		});

		this.editor = CodeMirror(document.getElementById("code-container")!, {
			lineNumbers: true,
			lineWrapping: true,
			mode: "laweá",
			theme: "monokai"
		});

		this.editor.on("change", () => {
			this.isRunButtonDisabled = this.editor.getValue().length == 0;
		});

		const pageFontSize = getComputedStyle(document.documentElement).fontSize;
		(document.querySelector(".CodeMirror") as HTMLElement).style.fontSize = pageFontSize;
	}
}
