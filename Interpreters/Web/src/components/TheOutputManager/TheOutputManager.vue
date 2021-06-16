<template>
	<div class="d-flex flex-column align-items-start mt-5">
		<label class="mx-auto text-light" for="output">Output:</label>

		<b-form-textarea
			id="output"
			class="border border-light rounded d-block mx-auto text-light"
			rows="10"
			v-model="output"
			aria-label="output"
			no-resize
			readonly
		>	
		</b-form-textarea>
	</div>
</template>

<script lang="ts" src="./TheOutputManager.ts"></script>
