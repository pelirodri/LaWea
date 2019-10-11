import { Component, Vue } from "vue-property-decorator";

import TheHeaderSection from "../TheHeaderSection/TheHeaderSection.vue";
import TheMainSection from "../TheMainSection/TheMainSection.vue";
import TheFooterSection from "../TheFooterSection/TheFooterSection.vue";

@Component({
	components: {
		TheHeaderSection,
		TheMainSection,
		TheFooterSection
	}
})
export default class App extends Vue {}
