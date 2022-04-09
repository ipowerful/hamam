<template>
	<div class="gate">
		<nuxt-picture
			class="backdrop"
			loading="lazy"
			width="718px"
			height="620px"
			src="about-bg@2x.jpg"
			sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw wide:100vw" />

		<div
			v-parallax="0.15"
			class="petal4" />

		<div
			v-parallax="0.35"
			class="petal5" />

		<div
			v-parallax="0.2"
			class="petal6" />

		<nuxt-picture
			v-parallax="0.01"
			class="shard"
			width="248px"
			height="279px"
			loading="lazy"
			src="shard-1@2x.png"
			sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw wide:100vw" />

		<div
			v-parallax="0.01"
			class="shard-shape">
			<gate-shape-svg />
		</div>

		<clip-path-svg />
	</div>
</template>

<script>
import GateShapeSvg from '@/assets/svg/about-gate-shape.svg?inline'
import ClipPathSvg from '@/assets/svg/about-clip-path.svg?inline'

export default {
	components: {
		ClipPathSvg,
		GateShapeSvg,
	},
}

</script>

<style lang="scss">
.gate {
	background: $color-yellow;
	padding-bottom: 100px;
	position: relative;

	#aboutClipPath {
		transform: scale(0.0028, 0.0032);
	}

	.backdrop {
		img {
			clip-path: url(#aboutClipPath);
			@include img-fluid;
		}
	}

	.petal4 {
		position: absolute;
		z-index: 10;
		left: 0%;
		top: 25%;
		width: 99px;
		height: 159px;
		background: url('~assets/images/petal-4.png') no-repeat;
	}

	.petal5 {
		position: absolute;
		z-index: 2;
		left: 15.5%;
		top: 65%;
		width: 115px;
		height: 108px;
		background: url('~assets/images/petal-5.png') no-repeat;
	}

	.petal6 {
		z-index: 10;
		position: absolute;
		width: 65px;
		height: 62px;
		right: 7%;
		top: 7%;
		background: url('~assets/images/petal-6.png') no-repeat;
	}

	.shard {
		position: absolute;
		z-index: 2;
		left: 15%;
		top: 16%;
		width: 69%;

		img {
			@include img-fluid;
		}
	}

	.shard-shape {
		@include abs;
		width: 69%;
		left: 18%;
		top: 18.5%;
		z-index: 1;
	}
}
</style>
