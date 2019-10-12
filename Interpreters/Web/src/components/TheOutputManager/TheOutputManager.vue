<template>
	<b-row class="mt-5">
		<b-col>
			<div class="d-flex flex-column align-items-start">
				<label class="mx-auto text-light">Output:</label>

				<b-form-textarea
					id="output"
					class="border border-light rounded d-block mx-auto text-light"
					rows="10"
					v-model="output"
					no-resize
					readonly
				>	
				</b-form-textarea>
			</div>
		</b-col>
	</b-row>
</template>

<script lang="ts" src="./TheOutputManager.ts"></script>
