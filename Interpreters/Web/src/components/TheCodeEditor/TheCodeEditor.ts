import { Component, Prop, Vue } from "vue-property-decorator";

import CodeMirror from "codemirror";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import "codemirror/addon/mode/simple.js";

@Component
export default class CodeEditor extends Vue {
	@Prop({ default: true }) private readonly isStopButtonDisabled!: boolean;

	private code = "";

	private editor!: CodeMirror.Editor;

	run(): void {
		this.$emit("runButtonClicked", this.code);
	}

	stop(): void {
		this.$emit("stopButtonClicked");
	}

	copy(): void {
		if (navigator.clipboard) {
			navigator.clipboard.writeText(this.code);
		} else {
			const textArea = document.createElement("textarea");
			textArea.value = this.code;

			document.body.appendChild(textArea);

			textArea.select();
			document.execCommand("copy");

			document.body.removeChild(textArea);
		}

		this.$bvToast.toast("Code was copied", {
			title: "Info",
			autoHideDelay: 1000,
			noHoverPause: true,
			variant: "info"
		});
	}

	clear(): void {
		this.editor.setValue("");
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
			this.code = this.editor.getValue();
		});

		const documentFontSize = getComputedStyle(document.documentElement).fontSize;
		(document.querySelector(".CodeMirror") as HTMLElement).style.fontSize = documentFontSize;
	}
}
