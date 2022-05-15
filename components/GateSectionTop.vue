<template>
	<div class="gate-section-top">
		<nuxt-picture
			class="backdrop"
			loading="lazy"
			width="718px"
			height="620px"
			src="gate-bg@2x.jpg"
			sizes="xs:100vw sm:100vw md:100vw" />

		<nuxt-picture
			v-parallax="0.15"
			class="petal4"
			loading="lazy"
			width="99px"
			height="159px"
			src="petal-4.png"
			sizes="xs:99" />

		<nuxt-picture
			v-parallax="0.35"
			class="petal5"
			loading="lazy"
			width="115px"
			height="108px"
			src="petal-5.png"
			sizes="xs:115" />

		<nuxt-picture
			v-parallax="0.2"
			class="petal6"
			loading="lazy"
			width="65px"
			height="62px"
			src="petal-6.png"
			sizes="xs:65" />

		<nuxt-picture
			class="shard"
			width="248px"
			height="279px"
			loading="lazy"
			src="shard-top@2x.png"
			sizes="xs:248 sm:496" />

		<div
			class="shard-shape">
			<svg-gate />
		</div>

		<svg-clip-path />
	</div>
</template>

<script>
import SvgGate from '@/assets/svg/gate-top.svg?inline'
import SvgClipPath from '@/assets/svg-path/gate-top-clip-path.svg?inline'

export default {
	components: {
		SvgGate,
		SvgClipPath,
	},
	props: {
		petals: {
			type: Array,
			default: () => [],
		},
	},
}
</script>

<style lang="scss">
.gate-section-top {
	background: $color-yellow;
	padding-bottom: 100px;
	position: relative;

	#gateTopClipPath {
		transform: scale(0.0028, 0.0033);
	}

	.backdrop {
		img {
			clip-path: url(#gateTopClipPath);
			@include img-fluid;
		}
	}

	.petal4 {
		position: absolute;
		z-index: 10;
		left: 0;
		top: 25%;
	}

	.petal5 {
		position: absolute;
		z-index: 2;
		left: 15.5%;
		top: 65%;
	}

	.petal6 {
		z-index: 10;
		position: absolute;
		right: 7%;
		top: 7%;
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
		top: 18.5%;
		left: 18%;
		z-index: 1;
	}
}
</style>
