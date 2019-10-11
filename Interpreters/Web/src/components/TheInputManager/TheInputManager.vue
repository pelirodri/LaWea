<template>
	<div class="mt-4">
		<div class="row">
			<div class="col">
				<div class="d-flex flex-column align-items-start">
					<label class="mx-auto text-light" for="input">Input:</label>

					<input 
						id="input"
						class="border border-light rounded mx-auto text-light"
						autocorrect="off"
						autocapitalize="none"
						ref="input"
						v-model="syncedInput"
						:disabled="isInputDisabled"
					/>
				</div>
			</div>
		</div>
				
		<div class="row mt-3">
			<div class="col">
				<button 
					class="btn btn-light d-block mx-auto"
					:disabled="isInputDisabled"
					@click="$emit('enterButtonClicked')"
				>
					Enter
				</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts" src="./TheInputManager.ts"></script>
