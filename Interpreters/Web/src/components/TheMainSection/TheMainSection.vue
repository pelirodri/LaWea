<template>
	<main class="mt-4">
		<TheCodeEditor
			:isStopButtonDisabled="isStopButtonDisabled"
			@runButtonClicked="interpretLaWeá($event)"
			@stopButtonClicked="stopRunningCommands"
		/>

		<TheOutputManager :output="output" />

		<TheInputManager
			ref="inputManager"
			:input.sync="input"
			:isInputDisabled="isInputDisabled"
			@enterButtonClicked="runCommands(true)"
		/>

		<TheErrorModal>
			<template #error-message>
				{{ errorMessage }}
			</template>
		</TheErrorModal>
	</main>
</template>

<script src="./test.js"></script>
<script lang="ts" src="./TheMainSection.ts"></script>
