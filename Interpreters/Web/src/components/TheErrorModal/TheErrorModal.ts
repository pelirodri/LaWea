import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TheErrorModal extends Vue {
	@Prop({ required: true }) readonly errorMessage!: string;
}
