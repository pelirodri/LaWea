<template>
	<div class="modal fade" id="error-modal">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content bg-dark">
				<div class="modal-header">
					<h4 class="modal-title text-danger">Error</h4>
					<button class="close text-danger" data-dismiss="modal">&times;</button>
				</div>
				
				<div class="modal-body text-danger">{{ errorMessage }}</div>
				
				<div class="modal-footer">
					<button class="btn btn-danger" data-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" src="./TheErrorModal.ts"></script>
