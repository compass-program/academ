<template>
	<div class="image-popup">
		<div class="image-popup__header">
			<div class="image-popup__close" @click="closePopup()">
				<img src="img/icon/close.svg" alt="" />
			</div>
		</div>
		<div class="image-popup__body">
			<div
				class="image-popup__button image-popup__fullscreen"
				v-if="fullscreen === false"
				@click="fullscreenPopup(1)"
			>
				<img src="img/icon/fullscreen.svg" alt="" />
			</div>
			<div
				class="image-popup__button image-popup__default"
				v-if="fullscreen === true"
				@click="fullscreenPopup(2)"
			>
				<img src="img/icon/minimize.svg" alt="" />
			</div>
			<img alt="" :src="src" class="image-popup__image" />
		</div>
	</div>
	<div class="blur" @click="closePopup()"></div>
</template>

<script>
	export default {
		name: "ImagePopup",
		props: {
			src: String,
		},
		data() {
			return {
				fullscreen: false,
			};
		},
		components: {},
		methods: {
			closePopup() {
				const popup = document.querySelector(".image-popup");
				popup.classList.remove("open");
				popup.classList.remove("fullscreen");
				this.fullscreen = false;
				document.querySelector("body").classList.remove("locked");
			},

			fullscreenPopup(choice) {
				const popup = document.querySelector(".image-popup");

				switch (choice) {
					case 1: {
						popup.classList.add("fullscreen");
						this.fullscreen = true;
						break;
					}
					case 2: {
						popup.classList.remove("fullscreen");
						this.fullscreen = false;
						break;
					}
				}
			},
		},
		mounted() {},
	};
</script>

<style lang="scss" scoped>
	.image-popup {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(0);
		z-index: 5;
		width: 100%;
		height: calc(100vh - 10rem);
		max-width: 90vh;
		background-color: var(--white);
		transition: all 0.2s ease;
		overflow: hidden;
		&.fullscreen {
			width: 100vw;
			max-width: inherit;
			height: 100vh;
			transform: none;
			.image-popup {
				&__header {
					display: none;
				}
				&__body {
					height: 100%;
				}
				&__button {
				}
				&__image {
					height: 96vh;
					width: 98%;
				}
			}
		}
		&__header {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			padding: 1rem;
			background-color: var(--dark-green);
			max-height: 5rem;
		}
		&__body {
			position: relative;
			padding: 2rem;
			height: calc(100vh - 17rem);
			img {
				width: 100%;
			}
		}
		&__button {
			cursor: pointer;
			position: absolute;
			bottom: 2rem;
			right: 1rem;
			width: 3rem;
			height: 3rem;
		}

		&.open {
			transform: translate(-50%, -50%) scale(1);
			transition: all 0.3s ease;

			+ .blur {
				background-color: rgba(0, 0, 0, 0.8);
				z-index: 4;
				transition: all 0.3s ease;
			}
		}

		&__close {
			cursor: pointer;
			width: 3rem;
			height: 3rem;
		}

		img {
			height: 100%;
			width: 97%;
			object-fit: contain;
		}
	}

	.blur {
		cursor: pointer;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0);
		z-index: -1;
		transition: all 0.3s ease;
	}

	.slider {
		position: absolute;
		right: -3rem;
		bottom: 17rem;
	}
</style>
