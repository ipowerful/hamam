<template>
	<div class="gate-bottom">
		<clip-path-svg />

		<nuxt-picture
			class="backdrop"
			loading="lazy"
			width="718px"
			height="620px"
			src="gate-bg@2x.jpg"
			sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw wide:100vw" />

		<div
			v-parallax="0.2"
			class="petal7" />

		<div
			v-parallax="0.35"
			class="petal8" />

		<div
			v-parallax="0.15"
			class="petal9" />

		<nuxt-picture
			v-parallax="0.01"
			class="shard"
			width="248px"
			height="298px"
			loading="lazy"
			src="shard-bottom@2x.png"
			sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw wide:100vw" />

		<div
			v-parallax="0.01"
			class="shard-shape">
			<gate-svg />
		</div>

	</div>
</template>

<script>
import GateSvg from '@/assets/svg/gate-bottom.svg?inline'
import ClipPathSvg from '@/assets/svg/gate-bottom-clip-path.svg?inline'

export default {
	components: {
		GateSvg,
		ClipPathSvg,
	},
}
</script>

<style lang="scss">
.gate-bottom {
	background: $color-yellow;
	position: relative;

	#gateBottomClipPath {
		transform: scale(0.0028, 0.0032);
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
		width: 61px;
		height: 142px;
		right: 0%;
		top: -14%;
		background: url('~assets/images/petal-7.png') no-repeat;
	}

	.petal8 {
		position: absolute;
		z-index: 2;
		left: 23%;
		bottom: -27%;
		width: 115px;
		height: 109px;
		background: url('~assets/images/petal-8.png') no-repeat;
	}

	.petal9 {
		position: absolute;
		z-index: 10;
		left: 2%;
		bottom: -20%;
		width: 180px;
		height: 207px;
		background: url('~assets/images/petal-9.png') no-repeat;
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
