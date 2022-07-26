<template>
	<header
		class="the-header animate__animated animate__fadeInDown"
		id="header"
	>
		<div class="the-header__container center">
			<div class="the-header__left">
				<div class="the-header__burger" @click="showHideMenu">
					<img src="img/icon/burger.svg" alt="" />
				</div>
				<nav class="nav">
					<router-link to="/" class="link">
						Главная
						<svg
							width="7"
							height="12"
							viewBox="0 0 7 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.349534 10.9566C-0.0409904 10.5661 -0.0409904 9.93292 0.349534 9.54239L3.88507 6.00686L0.349534 2.47132C-0.0409904 2.0808 -0.0409904 1.44763 0.349534 1.05711C0.740058 0.666586 1.37322 0.666585 1.76375 1.05711L6.00639 5.29975C6.39691 5.69027 6.39691 6.32344 6.00639 6.71396L1.76375 10.9566C1.37322 11.3471 0.740058 11.3471 0.349534 10.9566Z"
								fill="#021921"
							/></svg
					></router-link>
					<a class="link" @click="scroll('#apartments')">
						Квартиры
						<svg
							width="7"
							height="12"
							viewBox="0 0 7 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.349534 10.9566C-0.0409904 10.5661 -0.0409904 9.93292 0.349534 9.54239L3.88507 6.00686L0.349534 2.47132C-0.0409904 2.0808 -0.0409904 1.44763 0.349534 1.05711C0.740058 0.666586 1.37322 0.666585 1.76375 1.05711L6.00639 5.29975C6.39691 5.69027 6.39691 6.32344 6.00639 6.71396L1.76375 10.9566C1.37322 11.3471 0.740058 11.3471 0.349534 10.9566Z"
								fill="#021921"
							/>
						</svg>
					</a>
					<a class="link" @click="scroll('#office')">
						Офисы
						<svg
							width="7"
							height="12"
							viewBox="0 0 7 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.349534 10.9566C-0.0409904 10.5661 -0.0409904 9.93292 0.349534 9.54239L3.88507 6.00686L0.349534 2.47132C-0.0409904 2.0808 -0.0409904 1.44763 0.349534 1.05711C0.740058 0.666586 1.37322 0.666585 1.76375 1.05711L6.00639 5.29975C6.39691 5.69027 6.39691 6.32344 6.00639 6.71396L1.76375 10.9566C1.37322 11.3471 0.740058 11.3471 0.349534 10.9566Z"
								fill="#021921"
							/>
						</svg>
					</a>
					<a class="link" @click="scroll('#parking')">
						Парковки
						<svg
							width="7"
							height="12"
							viewBox="0 0 7 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.349534 10.9566C-0.0409904 10.5661 -0.0409904 9.93292 0.349534 9.54239L3.88507 6.00686L0.349534 2.47132C-0.0409904 2.0808 -0.0409904 1.44763 0.349534 1.05711C0.740058 0.666586 1.37322 0.666585 1.76375 1.05711L6.00639 5.29975C6.39691 5.69027 6.39691 6.32344 6.00639 6.71396L1.76375 10.9566C1.37322 11.3471 0.740058 11.3471 0.349534 10.9566Z"
								fill="#021921"
							/>
						</svg>
					</a>
					<a class="link" @click="openPopup">
						Ипотека
						<svg
							width="7"
							height="12"
							viewBox="0 0 7 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.349534 10.9566C-0.0409904 10.5661 -0.0409904 9.93292 0.349534 9.54239L3.88507 6.00686L0.349534 2.47132C-0.0409904 2.0808 -0.0409904 1.44763 0.349534 1.05711C0.740058 0.666586 1.37322 0.666585 1.76375 1.05711L6.00639 5.29975C6.39691 5.69027 6.39691 6.32344 6.00639 6.71396L1.76375 10.9566C1.37322 11.3471 0.740058 11.3471 0.349534 10.9566Z"
								fill="#021921"
							/>
						</svg>
					</a>
					<a class="link">
						Ремонт
						<svg
							width="7"
							height="12"
							viewBox="0 0 7 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.349534 10.9566C-0.0409904 10.5661 -0.0409904 9.93292 0.349534 9.54239L3.88507 6.00686L0.349534 2.47132C-0.0409904 2.0808 -0.0409904 1.44763 0.349534 1.05711C0.740058 0.666586 1.37322 0.666585 1.76375 1.05711L6.00639 5.29975C6.39691 5.69027 6.39691 6.32344 6.00639 6.71396L1.76375 10.9566C1.37322 11.3471 0.740058 11.3471 0.349534 10.9566Z"
								fill="#021921"
							/>
						</svg>
					</a>
				</nav>
			</div>
			<div class="the-header__right">
				<div class="the-header__call">
					<img src="img/icon/call.svg" alt="" />
					<span>+7 (8442) 60-05-51</span>
				</div>
			</div>
		</div>
	</header>
	<div class="blur" @click="hideMenu"></div>
</template>

<script>
	import { scroll } from "@/js/scroll";

	export default {
		name: "TheHeader",
		methods: {
			//*скролл к элементу пo id
			scroll(id) {
				scroll(id);
			},

			//*показ меню в мобилке
			showHideMenu() {
				const header = document.querySelector(".the-header");
				const nav = header.querySelector(".nav");
				const auth = header.querySelector(".the-header__auth");
				const avatar = header.querySelector(".the-header__avatar");
				const blur = document.querySelector(".blur");

				if (nav.classList.contains("open")) {
					if (this.authorized === false) {
						auth.classList.remove("open");
					} else if (this.authorized === true) {
						avatar.classList.remove("open");
					}
					nav.classList.remove("open");
					document.body.classList.remove("locked");
					blur.classList.remove("open");
				} else {
					if (this.authorized === false) {
						auth.classList.add("open");
					} else if (this.authorized === true) {
						avatar.classList.add("open");
					}
					document.body.classList.add("locked");
					nav.classList.add("open");
					blur.classList.add("open");
				}
			},

			//*скрытие меню в мобилке
			hideMenu() {
				const header = document.querySelector(".the-header");
				const nav = header.querySelector(".nav");
				const auth = header.querySelector(".the-header__auth");
				const avatar = header.querySelector(".the-header__avatar");
				const blur = document.querySelector(".blur");

				if (this.authorized === false) {
					auth.classList.remove("open");
				} else if (this.authorized === true) {
					avatar.classList.remove("open");
				}
				nav.classList.remove("open");
				document.body.classList.remove("locked");
				blur.classList.remove("open");
			},

			openPopup() {
				const popup = document.querySelector(".mortgage-calculator");
				const body = document.querySelector("body");

				body.classList.add("locked");
				popup.classList.add("open");
			},
		},

		mounted() {
			const links = document.querySelectorAll(".link");
			links.forEach((link) => {
				link.addEventListener("click", () => {
					this.hideMenu();
				});
			});

			//*скрытие выпадающего списка при клике вне элемента
			window.addEventListener("click", (e) => {
				const target = e.target;
				if (!target.closest(".the-header__burger")) {
					const header = document.querySelector(".the-header");
					const nav = header.querySelector(".nav");
					const auth = header.querySelector(".the-header__auth");
					const avatar = header.querySelector(".the-header__avatar");
					const blur = document.querySelector(".blur");

					if (this.authorized === false) {
						auth.classList.remove("open");
					} else if (this.authorized === true) {
						avatar.classList.remove("open");
					}
					nav.classList.remove("open");
					blur.classList.remove("open");
				}
			});
		},
	};
</script>

<style lang="scss" scoped>
	.the-header {
		position: fixed;
		height: 6rem;
		width: 100%;
		background-color: var(--gold);
		user-select: none;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		z-index: 4;

		&__container {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 100%;
		}

		&__left {
			display: flex;
			align-items: center;
			gap: 3rem;
		}
		&__burger {
			display: none;
		}

		&__right {
			display: flex;
			align-items: center;
			gap: 7.8rem;

			span {
				font-size: 1.6rem;
				font-weight: 600;
			}
		}

		&__call {
			cursor: pointer;
			display: flex;
			align-items: center;
			gap: 1rem;
		}
	}

	.nav {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	.link {
		cursor: pointer;
		position: relative;
		user-select: none;
		font-size: 1.6rem;
		color: var(--dark-green);
		font-weight: 600;
		svg {
			display: none;
		}

		&::after {
			content: "";
			position: absolute;
			left: 0;
			bottom: -0.3rem;
			width: 0;
			height: 0.2rem;
			background-color: var(--dark-green);
			transition: all 0.3s ease;
		}

		&:hover {
			&::after {
				width: 100%;
				transition: all 0.3s ease;
			}
		}
	}

	.blur {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0);
		z-index: -1;
		transition: all 0.2s ease;
		&.open {
			z-index: 3;
			background-color: rgba(0, 0, 0, 0.5);
		}
	}

	@media (max-width: 1023px) {
		.the-header {
			&__left {
			}
			&__right {
				gap: 2rem;
			}
			&__call {
				span {
					display: none;
				}
			}
			&__burger {
				cursor: pointer;
				display: block;
				padding: 1rem;
			}
		}

		.nav {
			position: absolute;
			display: block;
			top: 6rem;
			left: -100%;
			width: 66rem;
			transition: all 0.2s ease;

			&.open {
				left: 0;
				transition: all 0.2s ease;
			}
			.link {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				background-color: var(--gold);
				border-top: 0.1rem solid var(--dark);
				padding: 1.5rem 2.4rem;
				transition: all 0.1s ease;
				svg {
					display: block;
				}
				&:hover {
					background-color: var(--dark-green);
					color: var(--gold);
					transition: all 0.2s ease;
					svg {
						path {
							fill: var(--gold);
							transition: all 0.2s ease;
						}
					}
					&::after {
						width: 0;
					}
				}
			}
		}
		.link__full {
			display: none;
		}
	}

	@media (max-width: 767px) {
		.the-header {
			.nav {
				width: 95%;
			}
		}
	}
</style>
