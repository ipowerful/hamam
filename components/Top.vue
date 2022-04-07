<template>
	<div class="top">
		<div class="container">
			<h1 class="h1">Хамам</h1>
			<div class="text">
				мы предлагаем вам посетить роскошную парную с высокой влажностью
			</div>
			<div
				v-for="(text, i) in features"
				:key="i"

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
	}),
}
</script>

<style lang="scss">
.top {
	padding-bottom: 85px;
	color: $white;

	&:after {
		content: '';
		@include abs;
		position: fixed;
		height: 100vh;
		z-index: -1;
		background: url('~assets/images/top-bg-xs@2x.jpg') 100% / cover;
	}

	.h1 {
		display: inline-block;
		@include mob-h1;

		margin-top: 84px;
		margin-bottom: 43px;

		position: relative;

		&:before {
			position: absolute;
			top: -34px;
			right: -56px;
			width: 70px;
			height: 41px;
			content: '';
			background: url('~assets/svg/auroragrandspa.svg') 100% / contain no-repeat;
		}

		&:after {
			content: '';
			position: absolute;
			width: 100px;
			height: 1px;
			background: $color-gold;
			left: 0;
			bottom: -22px;
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
