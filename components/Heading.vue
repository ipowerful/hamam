<template>
	<observer
		:options="{ rootMargin: '-35% 0px' }"
		@enter="active = true"
		@leave="active = false">
		<h3
			:class="{ active }"
			class="heading">
			<slot />
		</h3>
	</observer>
</template>

<script>
import Observer from '@/components/Observer.vue'

export default {
	components: {
		Observer,
	},
	data: () => ({
		active: false,
	}),
}
</script>

<style lang="scss">
.heading {
	@include mob-h3;
}
</style>
