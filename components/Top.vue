<template>
	<div class="top">
		<nuxt-picture
			class="backdrop"
			loading="lazy"
			src="top-bg-xs@2x.jpg"
			sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw wide:100vw" />
		<div class="container">
			<observer
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
			</observer>
			<div class="text">
				Мы предлагаем вам посетить роскошную парную с высокой влажностью
			</div>
			<div
				v-for="(feature, index2) in features"
				:key="index2"
				class="feature"
				:class="{ active: feature.active }">
				<observer
					class="feature-body"
					@enter="features[index2].active = true"
					@leave="features[index2].active = false">
					{{ feature.text }}
				</observer>
			</div>
		</div>
	</div>
</template>

<script>
import Observer from '@/components/Observer.vue'

export default {
	components: {
		Observer,
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
	}),
}
</script>

<style lang="scss">
.top {
	padding-bottom: 85px;
	color: $white;
	position: relative;

	.backdrop {
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
		position: fixed;
		z-index: -1;
	}

	.h1 {
		@include mob-h1;

		margin-top: 48px;
		padding-top: 36px;

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
			}
		}

		.letter {
			display: inline-block;
			transform: translate3d(0px, 100px, 0px);
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
		margin-bottom: 170px;
	}

	.holder {
		height: 320px;
		overflow-y: scroll;

		@include hide-scrollbar;
	}

	.feature {
		font: rem(18px)/rem(26px) $ff-base;
		position: relative;
		@include flex-center;
		margin-bottom: 75px;

		&:before,
		&:after {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			border-radius: 50%;
			transform: translate(-50%, -50%);
			transition: $transition-slow;
		}

		&:before {
			width: 322px;
			height: 322px;
			border: 1px solid rgba(240, 208, 136, 0.2);
		}

		&:after {
			width: 250px;
			height: 250px;
			border: 1px solid $white;
		}

		&.active {
			&:before,
			&:after {
				transform: translate(-50%, -50%) scale3d(1.1, 1.1, 1);
			}
		}

		&-body {
			width: 140px;
			height: 124px;

			@include flex-center;
		}
	}
}
</style>
