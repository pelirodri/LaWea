import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TheErrorModal extends Vue {
	@Prop({ required: true }) private readonly errorMessage!: string;
}
