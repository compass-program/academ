<template>
	<section class="the-feedback" id="feedback">
		<div class="the-feedback__container center">
			<h2>
				Лучше<br />
				один раз<br />
				увидеть!
			</h2>
			<div class="the-feedback__form">
				<form action="#" @submit="bookConsultation">
					<p>
						Оставьте контактные данные,<br />
						и мы свяжемся с вами в ближайшее время
					</p>
					<v-input
						:type="'text'"
						:placeholder="'Имя'"
						v-model="name"
					></v-input>
					<v-input
						:type="'tel'"
						:placeholder="'Телефон'"
						v-model="tel"
					></v-input>
					<v-checkbox
						:text="'Даю согласие на обработку персональных данных'"
						class="academ"
						v-model="privacyPolicy"
					>
					</v-checkbox>
					<v-button
						class="gold"
						:type="'submit'"
						:text="'Заказать консультацию'"
					></v-button>
				</form>
				<div class="the-feedback__address">
					<h3>Отдел продаж</h3>
					<p>Волгоград, ул. Мира, 10, оф. 10.</p>
					<p>Тел. +7 (8442) 60-05-51</p>
				</div>
			</div>
			<div class="the-feedback__disclaimer">
				<p>
					Любая информация, представленная на данном сайте, носит
					исключительно информационный характер и ни при каких
					условиях не является публичной офертой, определяемой
					положениями статьи 437 ГК РФ. Информация ПАО «ООООООО»,
					раскрываемая в соответствии с Положением о раскрытии
					информации эмитентами эмиссионных ценных бумаг (утв. Банком
					России 30.12.2014 N 454-П), размещена на странице Центра
					раскрытия корпоративной информации Интерфакс в сети Интернет
				</p>
			</div>
			<div class="the-feedback__more">
				<div class="the-feedback__more-inner">
					<a
						href="img/icon/paperclip.svg"
						download
						class="the-feedback__more-icon"
					>
						<img src="img/icon/paperclip.svg" alt="" />
					</a>
					<p>
						Разрешение<br />
						на строительство
					</p>
				</div>
				<div class="the-feedback__more-inner">
					<a
						href="img/icon/paperclip.svg"
						download
						class="the-feedback__more-icon"
					>
						<img src="img/icon/paperclip.svg" alt="" />
					</a>
					<p>
						Проектная<br />
						декларация
					</p>
				</div>
				<div class="the-feedback__more-inner">
					<a
						href="img/icon/paperclip.svg"
						download
						class="the-feedback__more-icon"
					>
						<img src="img/icon/paperclip.svg" alt="" />
					</a>
					<p>
						Договор аренды<br />
						земельного участка
					</p>
				</div>
			</div>
		</div>
		<transition>
			<v-notification
				color="green"
				image="img/icon/check.svg"
				message="Спасибо за обращение, с вами скоро свяжутся"
				v-if="isNotificationVisible"
				@closeNotification="closeNotification"
			></v-notification>
		</transition>
	</section>
</template>

<script>
	import vInput from "@/components/v-input";
	import vCheckbox from "@/components/v-checkbox";
	import vButton from "@/components/v-button";
	import vNotification from "@/components/v-notification";

	export default {
		name: "TheFeedback",
		components: {
			vInput,
			vCheckbox,
			vButton,
			vNotification,
		},
		data: () => ({
			name: "",
			tel: "",
			privacyPolicy: false,
			isNotificationVisible: false,
		}),
		methods: {
			bookConsultation(e) {
				e.preventDefault();

				this.isNotificationVisible = true;

				setTimeout(() => {
					this.isNotificationVisible = false;
				}, 5000);
			},

			validateForm() {
				const form = document.querySelector(".the-feedback__form");
				const inputs = form.querySelectorAll("input");
				const button = form.querySelector(".v-button");

				inputs.forEach((input) => {
					if (input.getAttribute("type") !== "checkbox") {
						input.addEventListener("input", () => {
							if (
								this.name.length > 0 &&
								this.tel.length > 0 &&
								this.privacyPolicy === true
							) {
								button.setAttribute("type", "submit");
							} else {
								button.setAttribute("type", "button");
							}
						});
					} else if (input.getAttribute("type") === "checkbox") {
						input.addEventListener("change", () => {
							if (
								this.name.length > 0 &&
								this.tel.length > 0 &&
								this.privacyPolicy === true
							) {
								button.setAttribute("type", "submit");
							} else {
								button.setAttribute("type", "button");
							}
						});
					}
				});

				if (
					this.name.length > 0 &&
					this.tel.length > 0 &&
					this.privacyPolicy === true
				) {
					button.setAttribute("type", "submit");
				} else {
					button.setAttribute("type", "button");
				}
			},

			showNotification() {
				this.isNotificationVisible = true;
			},
			closeNotification() {
				this.isNotificationVisible = false;
			},
		},
		mounted() {
			this.validateForm();
		},
	};
</script>

<style lang="scss" scoped>
	.the-feedback {
		min-height: calc(100vh - 17rem);
		&__container {
			padding-top: 7rem;
			padding-bottom: 10rem;
			display: grid;
			grid-template-columns: repeat(3, max-content);
			justify-content: space-between;
			grid-gap: 2rem;
			position: relative;
		}
		h2 {
			text-transform: uppercase;
			font-size: 4.8rem;
			color: var(--gold);
			font-weight: 300;
		}
		p {
			font-size: 1.8rem;
			line-height: 2.2rem;
			margin-bottom: 3rem;
		}
		&__form {
			align-self: center;
			color: var(--white);
			width: 41rem;
			form {
				margin-bottom: 7rem;
				input:nth-child(3) {
					margin-bottom: 2.8rem;
				}
				.v-checkbox {
					margin-bottom: 5rem;
				}
			}
		}
		&__disclaimer {
			display: none;
		}
		&__address {
			color: var(--gold);
			h3 {
				font-weight: 600;
				font-size: 2.4rem;
				margin-bottom: 2.5rem;
			}
			p {
				margin-bottom: 0;
				font-weight: 600;
			}
		}
		&__more {
			align-self: flex-end;
			&-icon {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 4rem;
				height: 5rem;
				border-radius: 0.6rem;
				border: 1px solid #fff;
			}
			&-inner {
				p {
					color: var(--white);
					font-weight: 300;
					margin-bottom: 0;
				}
				display: flex;
				align-items: center;
				gap: 3rem;
				+ .the-feedback__more-inner {
					margin-top: 2rem;
				}
			}
		}
	}

	@media (max-width: 1023px) {
		.the-feedback {
			.gold {
				width: max-content;
				font-size: 3.3rem;
				padding: 0 2rem;
				height: 10rem;
				border-radius: 0 5rem 5rem 0;
			}
			&__container {
				padding-top: 0;
				display: flex;
				flex-direction: column;
				width: fit-content;
				max-width: 70rem;
				gap: 0;
				height: inherit;
			}
			h2 {
				margin-bottom: 6rem;
				font-size: 10.8rem;
			}
			&__form {
				width: 100%;
				form {
					margin-bottom: 5rem;
					* {
						font-size: 4rem;
						line-height: inherit;
					}

					input {
						&::placeholder {
							font-size: 4rem;
						}
						&:nth-child(3) {
							margin-bottom: 2.8rem;
						}
					}
				}
				.v-checkbox {
					margin-bottom: 5rem;
					&__text {
						font-size: 4rem !important;
					}
				}
			}
			&__disclaimer {
				display: block;
				color: var(--white);
				margin-bottom: 1rem;
				p {
					text-align: center;
					font-size: 1.8rem;

					margin-bottom: 0;
				}
			}
			&__address {
				margin-bottom: 2.5em;
				h3 {
					font-size: 5.4rem;
				}
				p {
					font-size: 4rem;
					line-height: inherit;
				}
			}
			&__more {
				align-self: flex-start;

				&-icon {
					height: 11.5rem;
					width: 9rem;
					img {
						width: 5rem;
						height: 5rem;
					}
				}
				&-inner {
					p {
						font-size: 3.4rem;
						line-height: 4rem;
					}
				}
			}
		}
	}

	@media (max-width: 767px) {
		.the-feedback {
			.gold {
				width: 24rem;
				height: 4.5rem;
				font-size: 1.5rem;
			}
			h2 {
				font-size: 4.8rem;
			}
			&__form {
				form {
					* {
						font-size: 1.8rem;
					}
					input {
						&::placeholder {
							font-size: 1.8rem;
						}
					}
				}
			}
			&__disclaimer {
				p {
					font-size: 0.9rem;
					line-height: inherit;
				}
			}
			&__address {
				h3 {
					font-size: 2.4rem;
				}
				p {
					font-size: 1.8rem;
				}
			}
			&__more {
				&-icon {
					height: auto;
					width: auto;
					img {
						width: auto;
						height: auto;
					}
				}
				&-inner {
					p {
						font-size: 1.8rem;
						line-height: inherit;
					}
				}
			}
		}
	}

	@media (max-width: 540px) {
		.the-feedback {
			padding: 2rem 1rem;
			&__container {
				padding-bottom: 0;
			}
		}
	}
</style>
