<template>
	<main class="d-flex flex-column justify-content-around flex-grow-1 mt-4">
		<TheCodeEditor
			:isStopButtonDisabled="isStopButtonDisabled"
			@runButtonClicked="interpretLaWeá($event)"
			@stopButtonClicked="stopRunningLaWeáCommands()"
		/>

		<TheOutputManager :output="output" />

		<TheInputManager
			ref="inputManager"
			:input.sync="input"
			:isInputDisabled="isInputDisabled"
			@enterButtonClicked="sendInputToLaWeáInterpreter()"
		/>

		<TheErrorModal>
			<template #error-message>
				{{ errorMessage }}
			</template>
		</TheErrorModal>
	</main>
</template>

<script lang="ts" src="./TheMainSection.ts"></script>
