<template>
	<div class="gate">
		<nuxt-picture
			class="backdrop"
			loading="lazy"
			width="718px"
			height="620px"
			src="about-bg@2x.jpg"
			sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw wide:100vw" />


		<!--		<nuxt-picture-->
		<!--			v-parallax="0.05"-->
		<!--			class="petal"-->
		<!--			loading="lazy"-->
		<!--			width="230px"-->
		<!--			height="216px"-->
		<!--			src="petal-6@2x.png"-->
		<!--			sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw wide:100vw" />-->


		<div
			v-parallax="0.1"
			class="petal" />

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

	.petal {
		position: absolute;
		z-index: 2;
		left: 15.5%;
		top: 65%;
		width: 115px;
		height: 108px;
		background: url('~assets/images/flowers-bg5.png') 100% / cover no-repeat;
	}

	.shard {
		position: absolute;
		z-index: 2;
		left: 15%;
		top: 16%;
		width: 69%;
		//height: 62%;
		//padding-top: 77%;
		//background: url('~assets/images/shard-1@2x.png') 100% / cover no-repeat;

		img {
			@include img-fluid;
		}
	}

	.shard-shape {
		@include abs;
		//position: absolute;
		width: 69%;
		left: 18%;
		top: 18.5%;
		//width: 249px;
		//height: 280px;
		z-index: 1;
		//background: url('~assets/svg/about-gate-shape.svg') 100% / cover no-repeat;
	}
}
</style>
