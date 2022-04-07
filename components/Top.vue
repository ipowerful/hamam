<template>
	<div class="top">
		<div class="container">

			<h1 class="h1">Хамам</h1>
			<div class="text">
				мы предлагаем вам посетить роскошную парную с высокой влажностью
			</div>
		</div>
	</div>
</template>

<script>
export default {
	// computed: {
	// 	backgroundStyles() {
	// 		const imgUrl = this.$img('top-bg.jpg', { width: 720, quality: 100 })
	// 		return {
	// 			backgroundImage: `url('${imgUrl}')`,
	// 		}
	// 	},
	// },
}
</script>

<style lang="scss">
.top {
	height: 700px;
	position: relative;
	background-position: center;
	background-repeat: no-repeat;
	background-size: auto 100%;

	background: url('~assets/images/top-bg-xs@2x.jpg') 100% / cover;

	color: $white;

	&:before,
	&:after {
		content: '';
		@include absolute-contain;
	}

	//	&:after {
	///		background: url('~assets/svg/top-overlay.svg') 100% / cover;
	//	}
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
	}
}
</style>
