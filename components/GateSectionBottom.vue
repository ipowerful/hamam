<template>
	<div class="gate-section-bottom">
		<svg-clip-path />

		<nuxt-picture
			class="backdrop"
			loading="lazy"
			width="718px"
			height="620px"
			src="gate-bg@2x.jpg"
			sizes="xs:100vw sm:100vw md:100vw" />

		<nuxt-picture
			v-parallax="0.2"
			class="petal7"
			loading="lazy"
			width="61px"
			height="142px"
			src="petal-7.png"
			sizes="xs:61" />

		<nuxt-picture
			v-parallax="0.3"
			class="petal8"
			loading="lazy"
			width="115px"
			height="109px"
			src="petal-8.png"
			sizes="xs:115" />

		<nuxt-picture
			v-parallax="0.5"
			class="petal9"
			loading="lazy"
			width="180px"
			height="207px"
			src="petal-9.png"
			sizes="xs:180" />

		<nuxt-picture
			class="shard"
			width="248px"
			height="298px"
			loading="lazy"
			src="shard-bottom@2x.png"
			sizes="xs:248 sm:496" />

		<div
			class="shard-shape">
			<svg-gate />
		</div>
	</div>
</template>

<script>
import SvgGate from '@/assets/svg/gate-bottom.svg?inline'
import SvgClipPath from '@/assets/svg-path/gate-bottom-clip-path.svg?inline'

export default {
	components: {
		SvgGate,
		SvgClipPath,
	},
}
</script>

<style lang="scss">
.gate-section-bottom {
	background: $color-yellow;
	position: relative;

	#gateBottomClipPath {
		transform: scale(0.0028, 0.0033);
	}

	.backdrop {
		img {
			clip-path: url(#gateBottomClipPath);
			@include img-fluid;
		}
	}

	.petal7 {
		z-index: 10;
		position: absolute;
		right: 0;
		top: -14%;
	}

	.petal8 {
		position: absolute;
		z-index: 15;
		left: 23%;
		bottom: -27%;
	}

	.petal9 {
		position: absolute;
		z-index: 1;
		left: 2%;
		bottom: -18%;
	}

	.shard {
		position: absolute;
		z-index: 2;
		left: 15.5%;
		top: -5.5%;
		width: 69%;

		img {
			@include img-fluid;
		}
	}

	.shard-shape {
		@include abs;
		width: 69%;
		top: -2%;
		left: 12.5%;
		z-index: 1;
	}
}
</style>
