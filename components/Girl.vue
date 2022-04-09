<template>
	<div class="girl">
		<nuxt-picture
			class="backdrop"
			loading="lazy"
			width="590px"
			height="420px"
			src="girl-bg@2x.jpg"
			sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw wide:100vw" />

		<nuxt-picture
			v-parallax="0.06"
			class="steam1"
			loading="lazy"
			width="456px"
			height="438px"
			src="steam-1.png"
			sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw wide:100vw" />
		
		<nuxt-picture
			v-parallax="0.1"
			class="steam2"
			loading="lazy"
			width="351px"
			height="289px"
			src="steam-1.png"
			sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw wide:100vw" />

		<div
			v-parallax="0.2"
			class="petal" />

		<nuxt-picture
			class="body"
			loading="lazy"
			width="360px"
			height="420px"
			src="girl@2x.png"
			sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw wide:100vw" />

	</div>
</template>

<script>
</script>

<style lang="scss">
.girl {
	position: relative;
	overflow: hidden;

	.steam {
		@include abs;
		z-index: 3;
	}

	.steam1 {
		position: absolute;
		left: -50%;
		top: 0;
		width: 456px;
		height: 438px;
	}

	.steam2 {
		position: absolute;
		left: 40%;
		bottom: -24%;
		width: 351px;
		height: 289px;
		z-index: 2;
	}

	.petal {
		position: absolute;
		width: 127px;
		height: 209px;
		left: 0;
		bottom: 28%;
		background: url('~assets/images/flowers-bg1.png') left center no-repeat;
	}

	.body {
		@include abs;
		z-index: 1;
	}

}
</style>
