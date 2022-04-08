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
		[class^="svg-elem-"] {
			transition: all .5s linear 0s;
			opacity: 0;
		}

		.svg-elem-5 {
			transition-delay: 0.33s;
		}

		.svg-elem-4 {
			transition-delay: 0.66s;
		}

		.svg-elem-3 {
			transition-delay: 0.99s;
		}

		.svg-elem-2 {
			transition-delay: 1.32s;
		}

		&.active [class^="svg-elem-"] {
			opacity: 1;
		}
	}

}
</style>
