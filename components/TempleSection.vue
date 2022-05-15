<template>
	<app-observer
		:options="{ threshold: .7 }"
		class="temple-section"
		@enter="active = true"
		@leave="active = false">
		<div class="container">
			<h2 class="h2">
				Уникальное место,
				где вы можете
				<span>
					отдохнуть
					душой и телом
				</span>
			</h2>
		</div>
		<div class="backdrop">
			<TempleSvg
				class="temple-svg"
				:class="{ active }" />
		</div>
	</app-observer>
</template>

<script>
import AppObserver from '@/components/AppObserver.vue'
import TempleSvg from '~/assets/svg-path/temple-animated.svg?inline'

export default {
	components: {
		TempleSvg,
		AppObserver,
	},
	data: () => ({
		active: false,
	}),
}
</script>

<style lang="scss">
.temple-section {
	position: relative;
	overflow: hidden;
	height: 450px;
	background: $color-blue;

	@include flex-center;
	text-align: center;

	@include up(lg) {
		height: 750px;
	}

	.container {
		z-index: 1;
	}

	.backdrop {
		@include absolute-center;
		width: 672px;
		height: 741px;
		color: #413E39;
		@include flex-center;

		@include up(lg) {
			width: 1121px;
			height: 1236px;
		}
	}

	.h2 {
		margin-top: 50px;
		@include mob-h2;
		@include up(lg) {
			@include desk-h2;
		}
	}

	.temple-svg {
		[class^="svg-elem-"] {
			transition: all .3s linear 0s;
			opacity: 0;
			stroke: $color-gold-light;
		}

		.svg-elem-2 {
			transition-delay: .22s;
		}

		.svg-elem-3 {
			transition-delay: .33s;
		}

		.svg-elem-4 {
			transition-delay: .44s;
		}

		.svg-elem-5 {
			transition-delay: .55s;
		}

		&.active [class^="svg-elem-"] {
			opacity: 1;
		}
	}

}
</style>
