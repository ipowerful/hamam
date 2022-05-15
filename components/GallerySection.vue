<template>
	<div class="gallery-section">
		<hooper>
			<slide
				v-for="index in 5"
				:key="index">
				<nuxt-picture
					class="backdrop"
					loading="lazy"
					width="360px"
					height="400px"
					:src="`gallery/${index}.jpg`"
					sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw wide:100vw" />
				<div class="overlay" />
			</slide>

			<hooper-navigation slot="hooper-addons">
				<arrow-left-svg
					slot="hooper-prev" />
				<arrow-right-svg
					slot="hooper-next" />
			</hooper-navigation>

			<hooper-pagination slot="hooper-addons" mode="fraction" />
		</hooper>
	</div>
</template>

<script>
import {
	Hooper,
	Slide,
	Navigation as HooperNavigation,
	Pagination as HooperPagination,
} from 'hooper'
import 'hooper/dist/hooper.css'
import ArrowLeftSvg from '@/assets/svg/arrow-left.svg?inline'
import ArrowRightSvg from '@/assets/svg/arrow-right.svg?inline'

export default {
	name: 'App',
	components: {
		Hooper,
		Slide,
		HooperNavigation,
		HooperPagination,
		ArrowLeftSvg,
		ArrowRightSvg,
	},
}
</script>

<style lang="scss">
.gallery-section {
	background: $color-blue;
	position: relative;

	.backdrop {
		img {
			@include img-fluid;
		}
	}

	.overlay {
		content: '';
		@include abs;
		z-index: 1;
		background: url('~assets/svg/gallery-overlay.svg') bottom repeat-x;
	}

	.hooper {
		height: auto;

		.hooper-pagination {
			position: absolute;
			left: 20px;
			right: auto;
			bottom: 20px;

			transform: translateX(0);

			color: $color-gold;
			font: rem(20px)/rem(30px) $ff-number;
			letter-spacing: -1.4px;

			span {
				padding-right: 10px;

				&:first-child {
					color: $white;
					font-size: rem(50px);
					line-height: 1;
					padding-right: 6px;
				}
			}
		}

		.hooper-slide {
			position: relative;
		}

		.hooper-navigation {
			position: absolute;
			right: 20px;
			bottom: 20px;

			.hooper-prev,
			.hooper-next {
				position: relative;
				transform: none;
			}
		}
	}
}
</style>
