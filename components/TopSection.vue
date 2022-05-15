<template>
	<div class="top-section">
		<!-- eslint-disable no-tabs -->
		<!--		<nuxt-picture-->
		<!--			class="backdrop"-->
		<!--			loading="lazy"-->
		<!--			width="360"-->
		<!--			height="700"-->
		<!--			src="top-bg-xs@2x.jpg"-->
		<!--			sizes="xs:100vw sm:100vw md:100vw" />-->
		<!-- eslint-enable no-tabs -->
		<picture>
			<source
				v-for="(source, i) in imgSources"
				:key="i"
				:media="source.media"
				:srcset="getSizes(source).srcset"
				:sizes="getSizes(source).size">
			<img
				class="backdrop"
				loading="lazy"
				src="/images/pixel.png"
				alt="">
		</picture>
		<div class="container">
			<app-observer
				@enter="active = true"
				@leave="active = false">
				<h1
					:class="{ active }"
					class="h1">
					<span class="word">
						<span
							v-for="(letter, index) in word"
							:key="index"
							class="letter"
							:style="`transition-delay: ${index * 120}ms`">
							{{ letter }}
						</span>
					</span>
				</h1>
			</app-observer>
		</div>
		<div class="container">
			<div class="text">
				Мы предлагаем вам посетить роскошную парную с высокой влажностью
			</div>
			<div class="features">
				<div
					v-for="(feature, index2) in features"
					:key="index2"
					class="feature"
					:class="{ active: feature.active }">
					<app-observer
						:options="{ rootMargin: '-35% 0px' }"
						class="feature-body"
						@enter="features[index2].active = true"
						@leave="features[index2].active = false">
						{{ feature.text }}
					</app-observer>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import AppObserver from '@/components/AppObserver.vue'

export default {
	components: {
		AppObserver,
	},
	data: () => ({
		features: [
			{
				text: 'Очищение тела от токсинов и шлаков',
				active: false,
			},
			{
				text: 'Улучшение работы сердца и сосудов',
				active: false,
			},
			{
				text: 'Незабываемые ощущения и потрясающее удовольствие',
				active: false,
			},
		],
		word: 'Хамам',
		active: false,
		imgSources: [
			{
				src: 'top-bg-xs@2x.jpg',
				format: null,
				media: '(max-width: 991px)',
				sizes: 'xs:100vw sm:100vw md:100vw',
			},
			{
				src: 'top-bg-xs@2x.jpg',
				format: 'webp',
				media: '(max-width: 991px)',
				sizes: 'xs:100vw sm:100vw md:100vw',
			},
			{
				src: 'top-bg-lg@2x.jpg',
				format: null,
				media: '(min-width: 992px)',
				sizes: 'lg:100vw xl:100vw xxl:100vw wide:100vw 2k:100vw',
			},
			{
				src: 'top-bg-lg@2x.jpg',
				media: '(min-width: 992px)',
				format: 'webp',
				sizes: 'lg:100vw xl:100vw xxl:100vw wide:100vw 2k:100vw',
			},
		],
	}),
	methods: {
		getSizes(img) {
			return this.$img.getSizes(img.src, {
				sizes: img.sizes,
				...img.format && {
					modifiers: {
						format: img.format,
					},
				},
			})
		},
	},
}
</script>

<style lang="scss">
$features-height-xl: 740px;
$offset-bottom: 85px;

.top-section {
	padding-bottom: 85px;
	color: $white;
	position: relative;

	@include up(xl) {
		padding-bottom: 500px;
	}

	@include up(wide) {
		padding-bottom: $features-height-xl;
	}

	.backdrop {
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;

		position: fixed;
		z-index: -1;
		background: $color-blue;
		object-fit: cover;

		@include up(xl) {
			position: absolute;
			width: 100%;
			height: 100%;
		}
	}

	.container {
		@include up(xl) {
			position: relative;
			padding-left: 194px;
		}
		@include up(wide) {
			padding-left: 0;
		}

		&--first {
			position: absolute;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
		}
	}

	.h1 {
		@include mob-h1;
		margin-top: 0;
		padding-top: 84px;
		margin-bottom: 22px;
		padding-bottom: 21px;

		@include up(xl) {
			@include desk-h1;
			margin-top: 0;
			padding-top: 176px;
			margin-bottom: 37px;
			padding-bottom: 6px;
		}

		.word {
			display: inline-block;
			position: relative;

			&:before {
				position: absolute;
				top: -34px;
				right: -56px;
				width: 70px;
				height: 41px;
				content: '';
				background: url('~assets/svg/auroragrandspa.svg') 100% / contain no-repeat;
				transition: $transition-slow;
				transition-delay: 0.8s;
				transform: scale3d(0, 0, 1);

				@include up(xl) {
					width: 134px;
					height: 79px;
					top: -66px;
					right: -128px;
				}
			}
		}

		.letter {
			display: inline-block;
			transform: translate3d(0px, 110%, 0px);
			transition: $transition-slow;
		}

		&.active {
			.word {
				&:before {
					transform: scale3d(1, 1, 1);
				}
			}

			.letter {
				transform: translate3d(0px, 0px, 0px);
			}
		}

	}

	.text {
		font: 300 rem(24px)/rem(30px) $ff-base;
		margin-bottom: 90px;

		@include up(xl) {
			font: 300 rem(40px)/rem(45px) $ff-base;
			width: 50%;
		}
	}

	.holder {
		height: 320px;
		overflow-y: scroll;

		@include hide-scrollbar;
	}

	.features {
		position: relative;
		height: 720px;
		display: flex;
		justify-content: center;

		@include up(xl) {
			position: absolute;
			width: 750px;
			height: 740px;
			top: -14%;
			right: -3%;
		}

		@include up(wide) {
			top: 50%;
		}
	}

	.feature {
		position: absolute;
		@include flex-center;

		width: 322px;
		height: 322px;

		@include up(xl) {
			width: 450px;
			height: 450px;
		}

		&:nth-child(1) {
			top: 0;
			@include up(xl) {
				right: 11%;
			}
		}

		&:nth-child(2) {
			top: 50%;
			transform: translateY(-50%);
			@include up(xl) {
				transform: none;
				top: 29%;
				left: 0;
			}
		}

		&:nth-child(3) {
			top: auto;
			bottom: 0;
			@include up(xl) {
				right: 0;
			}
		}

		&:before,
		&:after {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			border-radius: 50%;
			transform: translate(-50%, -50%);
			transition: $transition-slow;
			transition-duration: 0.7s;
		}

		&:before {
			width: 100%;
			height: 100%;
			border: 1px solid $color-gold-light;
			transform: translate(-50%, -50%) scale3d(.78, .78, 1);
		}

		&:after {
			width: 77%;
			height: 77%;
			border: 1px solid $white;
			transform: translate(-50%, -50%) scale3d(1.28, 1.28, 1);
		}

		&.active {
			&:before,
			&:after {
				transform: translate(-50%, -50%) scale3d(1, 1, 1);
			}
		}

		&-body {
			font: rem(18px)/rem(26px) $ff-base;
			width: 140px;
			height: 124px;
			@include flex-center;

			@include up(xl) {
				font: rem(22px)/rem(30px) $ff-base;
				width: 177px;
				height: 177px;
			}
		}
	}
}
</style>
