<template>
	<div>
		<b-row>
			<b-col>
				<div class="d-flex flex-column align-items-start">
					<label class="mx-auto text-light" for="code-container">Code:</label>
					<div id="code-container" class="border border-light rounded mx-auto"></div>
				</div>
			</b-col>
		</b-row>
		
		<b-row class="mt-3">
			<b-col>
				<b-button class="float-right" variant="light" :disabled="isRunButtonDisabled" @click="run">
					Run
				</b-button>
			</b-col>

			<b-col>
				<b-button variant="light" :disabled="isStopButtonDisabled" @click="stop">
					Stop
				</b-button>
			</b-col>
		</b-row>
	</div>
</template>

<script lang="ts" src="./TheCodeEditor.ts"></script>
<style src="./TheCodeEditor.css"></style>
