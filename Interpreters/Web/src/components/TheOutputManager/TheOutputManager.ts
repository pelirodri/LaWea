import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TheOutputManager extends Vue {
	@Prop({ required: true }) readonly output!: string;
}
