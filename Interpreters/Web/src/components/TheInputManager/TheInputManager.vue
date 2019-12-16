<template>
	<div class="mt-4">
		<b-row>
			<b-col>
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
						:disabled="isInputDisabled"
						@keyup.enter="$emit('enterButtonClicked')"
					/>
				</div>
			</b-col>
		</b-row>
				
		<b-row class="mt-3">
			<b-col>
				<b-button 
					class="d-block mx-auto"
					variant="light"
					:disabled="isInputDisabled"
					@click="$emit('enterButtonClicked')"
				>
					Enter
				</b-button>
			</b-col>
		</b-row>
	</div>
</template>

<script lang="ts" src="./TheInputManager.ts"></script>
