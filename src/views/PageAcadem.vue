<template>
	<div class="theme-container">
		<the-header />
		<main class="main" id="main">
			<the-banner />
			<the-apartments />
			<the-location />
			<the-gallery />
			<the-infrastructure />
			<the-broadcast />
			<the-parking />
			<the-pantry />
			<the-office />
			<the-feedback />
		</main>
		<the-footer />
		<image-popup />
		<mortgage-calculator
			closeIcon="img/icon/close.svg"
		></mortgage-calculator>
	</div>
</template>

<script>
	import TheHeader from "@/components/TheHeader";

	import TheBanner from "@/components/TheBanner";
	import TheApartments from "@/components/TheApartments";
	import TheLocation from "@/components/TheLocation";
	import TheGallery from "@/components/TheGallery";
	import TheInfrastructure from "@/components/TheInfrastructure";
	import TheBroadcast from "@/components/TheBroadcast";
	import TheParking from "@/components/TheParking";
	import ThePantry from "@/components/ThePantry";
	import TheOffice from "@/components/TheOffice";
	import TheFeedback from "@/components/TheFeedback";

	import TheFooter from "@/components/TheFooter";

	import imagePopup from "@/components/image-popup";
	import MortgageCalculator from "@/components/MortgageCalculator";

	export default {
		components: {
			TheHeader,
			TheBanner,
			TheApartments,
			TheLocation,
			TheGallery,
			TheInfrastructure,
			TheBroadcast,
			TheParking,
			ThePantry,
			TheOffice,
			TheFeedback,
			TheFooter,
			imagePopup,
			MortgageCalculator,
		},
	};
</script>

<style lang="scss" scoped>
	main {
		background-color: var(--dark-green);
	}
	section {
		min-height: calc(100vh - 6rem);
		overflow: hidden;
		background: var(--dark-green);
		display: flex;
	}

	a {
		user-select: none;
		font-size: 1.6rem;
		color: var(--dark-green);
		font-weight: 600;
	}

	img,
	svg {
		user-select: none;
		pointer-events: none;
	}

	.nav {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 3rem;
	}
	.link {
		position: relative;
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
</style>
