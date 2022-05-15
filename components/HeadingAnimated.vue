<template>
	<app-observer
		:options="{ rootMargin: '-35% 0px' }"
		@enter="active = true"
		@leave="active = false">
		<h3
			:class="{ active }"
			class="heading-animated">
			<slot />
		</h3>
	</app-observer>
</template>

<script>
import AppObserver from '@/components/AppObserver.vue'

export default {
	components: {
		AppObserver,
	},
	data: () => ({
		active: false,
	}),
}
</script>

<style lang="scss">
.heading-animated {
	@include mob-h3;
}
</style>
