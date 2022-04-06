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


//@font-face {
//  font-family: 'FoglihtenNo06';
//  src: url('/fonts/FoglihtenNo06.eot');
//  src:
//      url('/fonts/FoglihtenNo06.eot?#iefix') format('embedded-opentype'),
//      url('/fonts/Magnat-HeadRegular.woff2') format('woff2'),
//      url('/fonts/Magnat-HeadRegular.woff') format('woff'),
//      url('/fonts/Magnat-HeadRegular.ttf') format('truetype');
//  font-weight: normal;
//  font-style: normal;
//  font-display: swap;
//}

//@font-face {
//	font-family: 'TT Norms Pro';
//	src: url('~assets/fonts/TTNormsPro-Thin.eot');
//	src: url('~assets/fonts/TTNormsPro-Thin.eot?#iefix') format('embedded-opentype'),
//	url('~assets/fonts/TTNormsPro-Thin.woff2') format('woff2'),
//	url('~assets/fonts/TTNormsPro-Thin.woff') format('woff'),
//	url('~assets/fonts/TTNormsPro-Thin.ttf') format('truetype');
//	font-weight: 100;
//	font-style: normal;
//	font-display: swap;
//}

//@font-face {
//	font-family: 'TT Norms Pro';
//	src: url('~assets/fonts/TTNormsPro-Light.eot');
//	src: local('TT Norms Pro Light'), local('TTNormsPro-Light'),
//	url('~assets/fonts/TTNormsPro-Light.eot?#iefix') format('embedded-opentype'),
//	url('~assets/fonts/TTNormsPro-Light.woff2') format('woff2'),
//	url('~assets/fonts/TTNormsPro-Light.woff') format('woff'),
//	url('~assets/fonts/TTNormsPro-Light.ttf') format('truetype');
//	font-weight: 300;
//	font-style: normal;
//	font-display: swap;
//}
//
//@font-face {
//	font-family: 'TT Norms Pro';
//	src: url('~assets/fonts/TTNormsPro-Regular.eot');
//	src: url('~assets/fonts/TTNormsPro-Regular.eot?#iefix') format('embedded-opentype'),
//	url('~assets/fonts/TTNormsPro-Regular.woff2') format('woff2'),
//	url('~assets/fonts/TTNormsPro-Regular.woff') format('woff'),
//	url('~assets/fonts/TTNormsPro-Regular.ttf') format('truetype');
//	font-weight: normal;
//	font-style: normal;
//	font-display: swap;
//}
//
//@font-face {
//	font-family: 'TT Norms Pro';
//	src: url('~assets/fonts/TTNormsPro-Medium.eot');
//	src: local('TT Norms Pro Medium'), local('TTNormsPro-Medium'),
//	url('~assets/fonts/TTNormsPro-Medium.eot?#iefix') format('embedded-opentype'),
//	url('~assets/fonts/TTNormsPro-Medium.woff2') format('woff2'),
//	url('~assets/fonts/TTNormsPro-Medium.woff') format('woff'),
//	url('~assets/fonts/TTNormsPro-Medium.ttf') format('truetype');
//	font-weight: 500;
//	font-style: normal;
//	font-display: swap;
//}
//
//@font-face {
//	font-family: 'TT Norms Pro';
//	src: url('~assets/fonts/TTNormsPro-Bold.eot');
//	src: url('~assets/fonts/TTNormsPro-Bold.eot?#iefix') format('embedded-opentype'),
//	url('~assets/fonts/TTNormsPro-Bold.woff2') format('woff2'),
//	url('~assets/fonts/TTNormsPro-Bold.woff') format('woff'),
//	url('~assets/fonts/TTNormsPro-Bold.ttf') format('truetype');
//	font-weight: bold;
//	font-style: normal;
//	font-display: swap;
//}

body {
	min-width: $body-min-width;
	font: rem(18px)/rem(30px) $ff-base;

	background: #F0D088;
	color: $color-base;
}

.layout {

}
</style>
