<template>
	<button class="v-button" :type="type">
		{{ text }}
	</button>
</template>

<script>
	export default {
		name: "v-button",
		props: {
			text: String,
			type: String,
		},
	};
</script>

<style lang="scss" scoped>
	.v-button {
		user-select: none;
		cursor: pointer;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 24rem;
		height: 4.5rem;
		border: 0.1rem solid var(--gold);
		padding-left: 2rem;
		border-radius: 0 2rem 2rem 0;
		font-size: 1.5rem;
		font-weight: 600;

		transition: all 0.3s ease;
		&.gold {
			background-color: var(--gold);
			color: var(--dark-green);
			&:hover {
				background-color: var(--dark-green);
				color: var(--gold);
				transition: all 0.3s ease;
			}
		}
		&.dark {
			background-color: var(--dark-green);
			color: var(--gold);
			&:hover {
				background-color: var(--gold);
				color: var(--dark-green);
				transition: all 0.3s ease;
			}
		}
	}
</style>
