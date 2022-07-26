<template>
	<div class="mortgage-calculator">
		<div class="mortgage-calculator__header" :class="light">
			<div class="mortgage-calculator__close" @click="closePopup()">
				<img :src="closeIcon" alt="" />
			</div>
		</div>
		<div class="mortgage-calculator__body">
			<iframe
				src="https://ipoteka.domclick.ru/calc-reg/calculator.html"
				frameborder="0"
				width="100%"
				height="100%"
				name="mortgageCalculator"
				id="mortgageCalculator"
			></iframe>
		</div>
	</div>
</template>

<script>
	export default {
		name: "MortgageCalculator",
		props: {
			closeIcon: String,
			light: String,
		},
		methods: {
			closePopup() {
				const popup = document.querySelector(".mortgage-calculator");
				popup.classList.remove("open");
				document.querySelector("body").classList.remove("locked");
			},
		},
		mounted() {},
	};
</script>

<style lang="scss" scoped>
	.mortgage-calculator {
		display: flex;
		flex-direction: column;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -150%);
		z-index: 5;
		height: 100vh;
		width: 100vw;
		background-color: var(--white);
		transition: all 0.2s ease;
		overflow: hidden;
		&__header {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			padding: 1rem;
			background-color: var(--dark-green);
			max-height: 5rem;
			&.light {
				background-color: var(--white);
			}
		}
		&__body {
			position: relative;
			height: 100%;
		}
		&.open {
			transform: translate(-50%, -50%);
			transition: all 0.3s ease;
		}

		&__close {
			cursor: pointer;
			width: 3rem;
			height: 3rem;
		}
	}
</style>
