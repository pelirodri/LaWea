<template>
	<div class="mt-4">
		<div class="d-flex flex-column align-items-start">
			<label class="mx-auto text-light" for="input">Input:</label>

			<b-form-input 
				id="input"
				class="border border-light rounded mx-auto text-light"
				size="sm"
				autocorrect="off"
				autocapitalize="none"
				ref="input"
				v-model="syncedInput"
				aria-label="input"
				:disabled="isInputDisabled"
				@keypress.enter="inputText()"
			/>
		</div>
				
		<b-button class="d-block mt-3 mx-auto" variant="light" :disabled="isInputDisabled" @click="inputText()">
			Enter
		</b-button>
	</div>
</template>

<script lang="ts" src="./TheInputManager.ts"></script>
