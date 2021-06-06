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
				<div class="d-flex justify-content-center">
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
			</b-col>
		</b-row>
	</div>
</template>

<script lang="ts" src="./TheCodeEditor.ts"></script>
<style src="./TheCodeEditor.css"></style>
