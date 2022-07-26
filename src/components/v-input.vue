<template>
	<input
		:type="type"
		class="v-input"
		:class="dark"
		:placeholder="placeholder"
		@input="$emit('update:modelValue', $event.target.value)"
	/>
</template>

<script>
	export default {
		name: "vInput",
		props: {
			placeholder: String,
			type: String,
			dark: String,
		},
	};
</script>

<style lang="scss" scoped>
	.v-input {
		width: 100%;
		background-color: transparent;
		padding: 1rem 0;
		border-bottom: 1px solid var(--white);
		color: var(--white);
		font-size: 1.8rem;
		&:invalid {
			border-color: var(--red);
		}
		&::placeholder {
			color: var(--white);
			font-size: 1.8rem;
		}
		+ .v-input {
			margin-top: 2rem;
		}
		&.dark {
			color: var(--gray);
			border-color: var(--gray);
			&:invalid {
				border-color: var(--red);
			}
			&::placeholder {
				color: var(--gray);
			}
		}
	}
</style>
