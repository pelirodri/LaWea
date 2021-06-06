import { Component, PropSync, Prop,  Vue } from "vue-property-decorator";

@Component
export default class TheInputManager extends Vue {
	@PropSync("input", { required: true }) private syncedInput!: string;
	@Prop({ default: true }) private readonly isInputDisabled!: boolean;

	focusInput(): void {
		(this.$refs.input as HTMLElement).focus();
	}

	private inputText(): void {
		this.$emit("enterButtonClicked");
	}
}
