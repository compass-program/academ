<template>
	<section class="the-pantry" id="pantry">
		<div class="the-pantry__container center">
			<div class="the-pantry__body">
				<div class="the-pantry__content">
					<h2>кладовочка!</h2>
					<p>Как говорится, запас карман не тянет.</p>

					<p>
						Но, согласитесь, держать в квартире комплект зимней
						резины, байдарку, велосипед, детскую коляску, масляную
						батарею для дачи, и самое главное: галерею закруток на
						зиму от любимой тёщи — такое себе удовольствие.
					</p>

					<p>
						Кладовые помещения — лучший выход из положения.
						Прохладно, сухо, темно. Храните вещи здесь, а не в
						квартире.
					</p>

					<p>Самое оно.</p>
				</div>
				<div class="the-pantry__image">
					<figure class="the-pantry__img">
						<img src="img/advantage-img1.png" alt="" />
					</figure>
				</div>
				<v-button
					text="Выбрать помещение"
					type="button"
					class="gold"
					@click="openPopup"
				></v-button>

				<div class="the-pantry__scheme" @click="openImage">
					<figure>
						<img src="img/parking.svg" alt="" />
					</figure>
				</div>
			</div>
		</div>
		<transition>
			<v-popup v-if="isPopupVisible" @closePopup="closePopup">
				<p class="v-popup__description">
					Оставьте контактные данные,<br />
					и мы свяжемся с вами в ближайшее время.
				</p>
				<v-input
					:placeholder="'Имя'"
					type="text"
					v-model="name"
				></v-input>
				<v-input
					:placeholder="'Телефон'"
					type="tel"
					v-model="tel"
				></v-input>
				<v-checkbox
					text="Даю согласие на обработку персональных данных"
					v-model="privacyPolicy"
				></v-checkbox>
				<v-button text="Заказать консультацию" class="gold"></v-button>
			</v-popup>
		</transition>
	</section>
</template>

<script>
	import vButton from "@/components/v-button";
	import vPopup from "@/components/v-popup";
	import vInput from "@/components/v-input";
	import vCheckbox from "@/components/v-checkbox";

	export default {
		name: "ThePantry",
		components: {
			vButton,
			vPopup,
			vInput,
			vCheckbox,
		},
		data: () => ({
			isPopupVisible: false,

			name: "",
			tel: "",
			privacyPolicy: false,
		}),
		methods: {
			openImage() {
				const popup = document.querySelector(".image-popup");
				const popupImage = popup.querySelector(".image-popup__image");
				const body = document.querySelector("body");

				const img = document.querySelector(".the-pantry__scheme img");

				body.classList.add("locked");
				popup.classList.add("open");

				popupImage.setAttribute("src", `${img.getAttribute("src")}`);
			},

			closePopup() {
				this.isPopupVisible = false;
				document.body.classList.remove("locked");
			},
			openPopup() {
				this.isPopupVisible = true;
				document.body.classList.add("locked");
			},
		},
	};
</script>

<style lang="scss" scoped>
	.the-pantry {
		display: block;
		padding-bottom: 5rem;
		&__body {
			display: grid;
			grid-template-columns: 38rem max-content;
			justify-content: space-between !important;
			align-items: center;
			grid-column-gap: 2rem;
			.gold {
				align-self: flex-start;
			}
		}
		&__content {
			height: fit-content;
			h2 {
				text-transform: uppercase;
				font-size: 4.8rem;
				color: var(--gold);
				font-weight: 300;
				margin-bottom: 3rem;
			}
			p {
				color: var(--white);
				line-height: 2.2rem;
				font-size: 1.8rem;
				+ p {
					margin-top: 3rem;
				}
			}
		}

		&__image {
			width: fit-content;
			img {
				max-width: 90rem;
				height: 100%;
			}
			margin-bottom: 2rem;
		}
		&__scheme {
			figure {
				cursor: pointer;
				width: fit-content;
			}
			img {
				width: 40rem;
			}
		}
	}

	.v-popup {
		.v-button {
			margin-top: 6.5rem;
			padding: 1.5rem 6rem;
			width: max-content;
		}
	}

	@media (max-width: 1250px) {
		.the-pantry {
			&__body {
				grid-template-columns: 38rem 1fr;
			}

			&__image {
				img {
					width: 100%;
				}
			}
		}
	}

	@media (max-width: 1023px) {
		.the-pantry {
			padding-left: 0;
			padding-right: 0;
			&__body {
				display: flex;
				flex-direction: column;
				.gold {
					margin-left: 1.5rem;
					font-size: 2.3rem;
					height: 7rem;
					width: 38rem;
					border-radius: 0 5rem 5rem 0;
				}
			}
			&__content {
				padding-left: 1.5rem;
				padding-right: 1.5rem;
				margin-bottom: 5rem;
				h2 {
					font-size: 8.1rem;
				}
				p {
					font-size: 2.8rem;
					line-height: inherit;
				}
			}

			&__image {
				order: -1;
				width: 100%;
				img {
					max-width: inherit;
				}
			}
			&__scheme {
				display: none;
			}
		}
	}

	@media (max-width: 767px) {
		.the-pantry {
			&__body {
				.gold {
					width: 24rem;
					height: 4.5rem;
					font-size: 1.5rem;
				}
			}
			&__content {
				h2 {
					font-size: 3.6em;
				}
				p {
					font-size: 1.8rem;
					line-height: 2.2rem;
				}
			}
		}
	}

	@media (max-width: 540px) {
		.the-pantry {
			&__body {
				.gold {
					margin-left: 1rem;
				}
			}
			&__content {
				padding-left: 1rem;
				padding-right: 1rem;

				h2 {
					font-size: 3.6rem;
					margin-bottom: 0.5rem;
				}
			}
		}
		.v-popup {
			.v-button {
				width: auto;
			}
		}
	}
</style>
