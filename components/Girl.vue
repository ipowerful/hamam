<template>
	<div class="girl">
		<nuxt-picture
			class="backdrop"
			loading="lazy"
			width="360px"
			height="420px"
			src="girl-bg@2x.jpg"
			sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw wide:100vw" />

		<nuxt-picture
			v-parallax="0.25"
			class="petal1"
			loading="lazy"
			width="127px"
			height="209px"
			src="petal-1.png"
			sizes="xs:127" />

		<nuxt-picture
			v-parallax="0.2"
			class="petal2"
			loading="lazy"
			width="123px"
			height="250px"
			src="petal-2.png"
			sizes="xs:123" />

		<nuxt-picture
			v-parallax="0.1"
			class="petal3"
			loading="lazy"
			width="111px"
			height="144px"
			src="petal-3.png"
			sizes="xs:111" />

		<nuxt-picture
			class="body"
			loading="lazy"
			width="360px"
			height="420px"
			src="girl@2x.png"
			sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw wide:100vw" />

		<div class="holder">
			<nuxt-picture
				v-parallax="0.06"
				class="steam1"
				loading="lazy"
				width="456px"
				height="438px"
				src="steam-1.png"
				sizes="xs:456" />

			<nuxt-picture
				v-parallax="0.08"
				class="steam2"
				loading="lazy"
				width="351px"
				height="289px"
				src="steam-1.png"
				sizes="xs:351" />
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
.girl {
	position: relative;

	.backdrop {
		img {
			@include img-fluid;
		}
	}

	.holder {
		@include abs;
		overflow: hidden;
	}

	.petal1 {
		position: absolute;
		left: 5%;
		bottom: -4%;
		z-index: 1;
	}

	.petal2 {
		z-index: 10;
		position: absolute;
		left: 0;
		top: 27%;
	}

	.petal3 {
		z-index: 10;
		position: absolute;
		right: 0;
		top: 7%;
	}

	.body {
		@include abs;
		z-index: 1;

		img {
			@include img-fluid;
		}
	}

	.steam1 {
		position: absolute;
		left: -50%;
		top: -25%;
		width: 456px;
		height: 438px;
	}

	.steam2 {
		position: absolute;
		left: 40%;
		bottom: 5%;
		width: 351px;
		height: 289px;
		z-index: 2;
	}
}
</style>
