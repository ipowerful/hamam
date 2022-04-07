<template>
	<div class="temple">
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
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.temple {
	height: 450px;

	@include flex-center;
	text-align: center;

	background: #1D144C url('~assets/svg/temple.svg') center bottom ;

	.h2 {
		margin-top: 50px;
		@include mob-h2;
	}
}
</style>
