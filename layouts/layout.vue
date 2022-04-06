<template>
	<div>
		<nuxt class="layout__page" />
	</div>
</template>

<script>
export default {
	components: {
	},
	head() {
		return {
			title: 'Atre Drain and Plumbing: Toronto, Mississauga, Oakville, Burlington',
			// meta: [{
			// 	hid: 'viewport',
			// 	name: 'viewport',
			// 	content: 'width=device-width, user-scalable=no',
			// }, {
			// 	hid: 'description',
			// 	name: 'description',
			// 	content: this.seoDescription,
			// }, {
			// 	hid: 'og:locale',
			// 	property: 'og:locale',
			// 	content: this.$i18n.localeProperties.iso,
			// }, {
			// 	hid: 'og:title',
			// 	property: 'og:title',
			// 	content: this.seoTitle,
			// }, {
			// 	hid: 'og:description',
			// 	property: 'og:description',
			// 	content: this.seoDescription,
			// }],
		}
	},
}
</script>

<style lang="scss">

@font-face {
	font-family: 'TT Norms Pro';
	src: url('~assets/fonts/TTNormsPro-Thin.eot');
	src: url('~assets/fonts/TTNormsPro-Thin.eot?#iefix') format('embedded-opentype'),
	url('~assets/fonts/TTNormsPro-Thin.woff2') format('woff2'),
	url('~assets/fonts/TTNormsPro-Thin.woff') format('woff'),
	url('~assets/fonts/TTNormsPro-Thin.ttf') format('truetype');
	font-weight: 100;
	font-style: normal;
	font-display: swap;
}

@font-face {
	font-family: 'TT Norms Pro';
	src: url('~assets/fonts/TTNormsPro-Light.eot');
	src: local('TT Norms Pro Light'), local('TTNormsPro-Light'),
	url('~assets/fonts/TTNormsPro-Light.eot?#iefix') format('embedded-opentype'),
	url('~assets/fonts/TTNormsPro-Light.woff2') format('woff2'),
	url('~assets/fonts/TTNormsPro-Light.woff') format('woff'),
	url('~assets/fonts/TTNormsPro-Light.ttf') format('truetype');
	font-weight: 300;
	font-style: normal;
	font-display: swap;
}

@font-face {
	font-family: 'TT Norms Pro';
	src: url('~assets/fonts/TTNormsPro-Regular.eot');
	src: url('~assets/fonts/TTNormsPro-Regular.eot?#iefix') format('embedded-opentype'),
	url('~assets/fonts/TTNormsPro-Regular.woff2') format('woff2'),
	url('~assets/fonts/TTNormsPro-Regular.woff') format('woff'),
	url('~assets/fonts/TTNormsPro-Regular.ttf') format('truetype');
	font-weight: normal;
	font-style: normal;
	font-display: swap;
}

@font-face {
	font-family: 'TT Norms Pro';
	src: url('~assets/fonts/TTNormsPro-Medium.eot');
	src: local('TT Norms Pro Medium'), local('TTNormsPro-Medium'),
	url('~assets/fonts/TTNormsPro-Medium.eot?#iefix') format('embedded-opentype'),
	url('~assets/fonts/TTNormsPro-Medium.woff2') format('woff2'),
	url('~assets/fonts/TTNormsPro-Medium.woff') format('woff'),
	url('~assets/fonts/TTNormsPro-Medium.ttf') format('truetype');
	font-weight: 500;
	font-style: normal;
	font-display: swap;
}

@font-face {
	font-family: 'TT Norms Pro';
	src: url('~assets/fonts/TTNormsPro-Bold.eot');
	src: url('~assets/fonts/TTNormsPro-Bold.eot?#iefix') format('embedded-opentype'),
	url('~assets/fonts/TTNormsPro-Bold.woff2') format('woff2'),
	url('~assets/fonts/TTNormsPro-Bold.woff') format('woff'),
	url('~assets/fonts/TTNormsPro-Bold.ttf') format('truetype');
	font-weight: bold;
	font-style: normal;
	font-display: swap;
}

body {
	min-width: $body-min-width;
}

.layout {

	&__list {
		list-style: none;
		padding-left: 0;
	}

	&__red {
		color: $color-red;
	}

	&__link {
		// transition: $transition-link;
		color: $color-base;

		&:hover {
			color: $color-red;
		}

		&--active,
		&--exact-active {
			color: $color-red;
		}
	}

	&__asterix {
		font-weight: 400;
		font-size: rem(14px);
		line-height: 1;
	}

	&__page {
		margin-top: 81px;
		@include up(lg) {
			margin-top: 111px;
		}
		@include up(xl) {
			margin-top: 116px;
		}
	}
}
</style>
