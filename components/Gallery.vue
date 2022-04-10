<template>
	<div class="gallery">
		<nuxt-picture
			class="backdrop"
			loading="lazy"
			width="360px"
			height="400px"
			src="gallery-plug@2x.jpg"
			sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw wide:100vw" />
	</div>
</template>

<script>
</script>

<style lang="scss">
.gallery {
	position: relative;

	.backdrop {
		img {
			@include img-fluid;
		}
	}
}
</style>
