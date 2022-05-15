<template>
	<div>
		<top-section />
		<temple-section />
		<girl-section />
		<gate-section-top />
		<about-section />
		<gate-section-bottom />
		<gallery-section />
	</div>
</template>

<script>
import TopSection from '@/components/TopSection.vue'
import TempleSection from '@/components/TempleSection.vue'
import GirlSection from '@/components/GirlSection.vue'
import GateSectionTop from '@/components/GateSectionTop.vue'
import GateSectionBottom from '@/components/GateSectionBottom.vue'
import AboutSection from '@/components/AboutSection.vue'
import GallerySection from '@/components/GallerySection.vue'

export default {
	components: {
		TopSection,
		TempleSection,
		GirlSection,
		GateSectionTop,
		GateSectionBottom,
		AboutSection,
		GallerySection,
	},
	layout: 'layout',
}
</script>

<style lang="scss">
.f1 {
	font-family: $ff-base;
	font-size: 30px;
}

.f2 {
	font-family: $ff-base;
	font-weight: 300;
	font-size: 30px;
}

.f3 {
	font-family: $ff-number;
	font-size: 30px;
}

.f4 {
	font-family: $ff-heading;
	font-size: 30px;
	text-transform: uppercase;

}
</style>
