<template>
	<div class="top">
		<nuxt-picture
			class="backdrop"
			loading="lazy"
			src="top-bg-xs@2x.jpg"
			sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw wide:100vw" />
		<div class="container">
			<h1 class="h1">
				<div class="overflow">
					<div
						v-for="(letter, index) in word"
						class="letter"
						:class="{ show }"
						:style="`transition-delay: ${index * 120}ms`">
						{{ letter }}
					</div>
				</div>
			</h1>
			<div class="text">
				Мы предлагаем вам посетить роскошную парную с высокой влажностью
			</div>
			<div
				v-for="(text, index2) in features"
				:key="index2"

				class="feature">
				<div class="feature-body">
					{{ text }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		features: [
			'Очищение тела от токсинов и шлаков',
			'Улучшение работы сердца и сосудов',
			'Незабываемые ощущения и потрясающее удовольствие',
		],
		word: 'Хамам',
		show: false,
	}),
	mounted() {
		this.show = true
	},
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
		display: inline-block;
		@include mob-h1;

		margin-top: 84px;

		&:before {
			position: absolute;
			top: -34px;
			right: -56px;
			width: 70px;
			height: 41px;
			content: '';
			background: url('~assets/svg/auroragrandspa.svg') 100% / contain no-repeat;
		}

		.overflow {
			overflow: hidden;
		}

		.letter {
			display: inline-block;
			transform: translate3d(0px, 100px, 0px);
			transition: $transition-slow;

			&.show {
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

		&-body {
			width: 140px;
			height: 124px;

			@include flex-center;
		}
	}
}
</style>
