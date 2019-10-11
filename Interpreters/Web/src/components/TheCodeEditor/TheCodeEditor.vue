<template>
	<div>
		<div class="row">
			<div class="col">
				<div class="d-flex flex-column align-items-start">
					<label class="mx-auto text-light" for="code-container">Code:</label>
					<div id="code-container" class="border border-light rounded mx-auto"></div>
				</div>
			</div>
		</div>
		
		<div class="row mt-3">
			<div class="col">
				<button class="btn btn-light float-right" :disabled="isRunButtonDisabled" @click="run()">
					Run
				</button>
			</div>

			<div class="col">
				<button class="btn btn-light" :disabled="isStopButtonDisabled" @click="stop()">
					Stop
				</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts" src="./TheCodeEditor.ts"></script>
<style src="./TheCodeEditor.css"></style>
