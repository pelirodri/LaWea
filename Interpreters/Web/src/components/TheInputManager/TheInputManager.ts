import { Component, Prop, PropSync, Vue } from "vue-property-decorator";

@Component
export default class TheInputManager extends Vue {
	@PropSync("input", { required: true }) syncedInput!: string;
	@Prop({ default: true }) readonly isInputDisabled!: boolean;

	focusInput(): void {
		(this.$refs.input as HTMLElement).focus();
	}
}
