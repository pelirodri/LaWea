<template functional>
	<b-modal
		id="error-modal"
		content-class="bg-dark"
		title="Error"
		title-tag="h4"
		header-text-variant="danger"
		ok-title="Close"
		ok-variant="danger"
		:ok-only="true"
		centered
	>
		<div class="text-danger">
			<slot name="error-message"></slot>
		</div>
	</b-modal>
</template>

<script lang="ts" src="./TheErrorModal.ts"></script>
