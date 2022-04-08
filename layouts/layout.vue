<template>
	<div>
		<nuxt />
	</div>
</template>

<script>
export default {
	components: {},
	head() {
		return {
			title: 'Grand Spa Aurora - Hamam',
		}
	},
}
</script>

<style lang="scss">

@font-face {
	font-family: 'Helvetica Neue';
	src: url('/fonts/HelveticaNeueCyr-Roman.eot?#iefix') format('embedded-opentype'),
	url('/fonts/HelveticaNeueCyr-Roman.woff2') format('woff2'),
	url('/fonts/HelveticaNeueCyr-Roman.woff') format('woff'),
	url('/fonts/HelveticaNeueCyr-Roman.ttf') format('truetype');
	font-weight: 400;
	font-style: normal;
	font-display: swap;
}

@font-face {
	font-family: 'Helvetica Neue';
	src: url('/fonts/HelveticaNeueCyr-Light.eot?#iefix') format('embedded-opentype'),
	url('/fonts/HelveticaNeueCyr-Light.woff2') format('woff2'),
	url('/fonts/HelveticaNeueCyr-Light.woff') format('woff'),
	url('/fonts/HelveticaNeueCyr-Light.ttf') format('truetype');
	font-weight: 300;
	font-style: normal;
	font-display: swap;
}

@font-face {
	font-family: 'Magnat Head';
	src: url('/fonts/Magnat-HeadRegular.eot?#iefix') format('embedded-opentype'),
	url('/fonts/Magnat-HeadRegular.woff2') format('woff2'),
	url('/fonts/Magnat-HeadRegular.woff') format('woff'),
	url('/fonts/Magnat-HeadRegular.ttf') format('truetype');
	font-weight: 400;
	font-style: normal;
	font-display: swap;
}

@font-face {
	font-family: 'FoglihtenNo06';
	src: url('/fonts/foglihtenno06.woff2') format('woff2'),
	url('/fonts/foglihtenno06.woff') format('woff'),
	url('/fonts/foglihtenno06.ttf') format('truetype');
	font-weight: 400;
	font-style: normal;
	font-display: swap;
}

body {
	min-width: $body-min-width;
	font: 300 rem(18px)/rem(30px) $ff-base;

	background: $color-yellow;
	color: $color-base;
}
</style>
