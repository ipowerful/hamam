<template>
	<div class="app-observer">
		<slot />
	</div>
</template>

<script>
export default {
	props: {
		options: {
			type: Object,
			default: () => {
			},
		},
	},
	data: () => ({
		observer: null,
	}),
	mounted() {
		const options = this.options || {}
		this.observer = new IntersectionObserver(([ entry ]) => {
			if (entry && entry.isIntersecting) {
				this.$emit('enter')
			}
			else {
				this.$emit('leave')
			}
		}, options)

		this.observer.observe(this.$el)
	},
	destroyed() {
		this.observer.disconnect()
	},
}
</script>
