<template>
	<div class="girl">
		<div
			v-parallax="0.1"
			class="bg flowers1" />
		<div
			v-parallax="0.15"
			class="bg steam" />
		<div
			v-parallax="0.2"
			class="bg flowers2" />
		<div
			v-parallax="0.3"
			class="bg flowers3" />
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.girl {
	height: 420px;
	background: url('~assets/images/girl-bg-xs@2x.jpg') center / cover no-repeat;
	position: relative;
	overflow: hidden;

	.bg {
		@include abs;
	}

	.steam {
		background: url('~assets/images/steam.png') center / cover no-repeat;
	}

	.flowers1 {
		background: url('~assets/images/flowers-bg1.png') left center no-repeat;
	}

	.flowers2 {
		background: url('~assets/images/flowers-bg2.png') left bottom no-repeat;
	}

	.flowers3 {
		background: url('~assets/images/flowers-bg3.png') right top no-repeat;
	}
}
</style>
