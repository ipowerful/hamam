<template>
	<observer
		class="temple"
		@enter="active = true"
		@leave="active = false">
		<div class="container">
			<h2 class="h2">
				Уникальное место, <br>
				где вы можете
				<span>
					отдохнуть <br>
					душой и телом
				</span>
			</h2>
		</div>
		<div class="backdrop">
			<TempleSvg
				class="temple-svg"
				:class="{ active }" />
		</div>
	</observer>
</template>

<script>
import Observer from '@/components/Observer.vue'
import TempleSvg from '~/assets/svg/temple-animated.svg?inline'

export default {
	components: {
		TempleSvg,
		Observer,
	},
	data: () => ({
		active: false,
	}),
}
</script>

<style lang="scss">
.temple {
	position: relative;
	overflow: hidden;
	height: 450px;

	@include flex-center;
	text-align: center;

	.container {
		z-index: 1;
	}

	.backdrop {
		@include abs;
		left: 50%;
		width: 865px;
		transform: translateX(-50%);
		background: #1D144C;
	}

	.h2 {
		margin-top: 50px;
		@include mob-h2;
	}

	.temple-svg {
		.svg-elem-1 {
			stroke-dashoffset: 2630px;
			stroke-dasharray: 2630px;
			transition: stroke-dashoffset 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
		}

		&.active .svg-elem-1 {
			stroke-dashoffset: 0;
		}

		.svg-elem-2 {
			stroke-dashoffset: 2486.52734375px;
			stroke-dasharray: 2486.52734375px;
			transition: stroke-dashoffset 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.12s;
		}

		&.active .svg-elem-2 {
			stroke-dashoffset: 0;
		}

		.svg-elem-3 {
			stroke-dashoffset: 2091.560546875px;
			stroke-dasharray: 2091.560546875px;
			transition: stroke-dashoffset 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.24s;
		}

		&.active .svg-elem-3 {
			stroke-dashoffset: 0;
		}

		.svg-elem-4 {
			stroke-dashoffset: 1705.0479736328125px;
			stroke-dasharray: 1705.0479736328125px;
			transition: stroke-dashoffset 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.36s;
		}

		&.active .svg-elem-4 {
			stroke-dashoffset: 0;
		}

		.svg-elem-5 {
			stroke-dashoffset: 1322.76220703125px;
			stroke-dasharray: 1322.76220703125px;
			transition: stroke-dashoffset 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.48s;
		}

		&.active .svg-elem-5 {
			stroke-dashoffset: 0;
		}

		.svg-elem-6 {
			stroke-dashoffset: 984.8401489257812px;
			stroke-dasharray: 984.8401489257812px;
			transition: stroke-dashoffset 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s;
		}

		&.active .svg-elem-6 {
			stroke-dashoffset: 0;
		}
	}

}
</style>
