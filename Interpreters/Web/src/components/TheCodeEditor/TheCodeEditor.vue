<template>
	<div>
		<div class="d-flex flex-column align-items-start">
			<label class="mx-auto text-light" for="code-editor" @click="focusEditor()">Code:</label>
			<div id="code-editor" class="border border-light rounded mx-auto" aria-label="code editor"></div>
		</div>

		<div class="d-flex justify-content-center mt-3">
			<b-button class="mr-3" variant="light" @click="runCode()">
				Run
			</b-button>

			<b-button class="mr-3" variant="light" :disabled="isStopButtonDisabled" @click="stopCode()">
				Stop
			</b-button>

			<b-button class="mr-3" variant="light" :disabled="code.length === 0" @click="copyCode()">
				Copy
			</b-button>

			<b-button variant="light" :disabled="code.length === 0" @click="clearCode()">
				Clear
			</b-button>
		</div>
	</div>
</template>

<script lang="ts" src="./TheCodeEditor.ts"></script>
<style lang="scss" src="./TheCodeEditor.scss"></style>
