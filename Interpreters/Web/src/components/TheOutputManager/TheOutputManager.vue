<template>
	<div class="row mt-5">
		<div class="col">
			<div class="d-flex flex-column align-items-start">
				<label class="mx-auto text-light">Output:</label>

				<textarea
					id="output"
					class="border border-light rounded d-block mx-auto text-light"
					rows="10"
					v-model="output"
					readonly
				>	
				</textarea>
			</div>
		</div>
	</div>
</template>

<script lang="ts" src="./TheOutputManager.ts"></script>
