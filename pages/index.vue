<template>
	<div>
		<Top />
		<Temple />
		<Girl />
		<Gate />
		<About />
	</div>
</template>

<script>
import Top from '@/components/Top.vue'
import Temple from '@/components/Temple.vue'
import Girl from '@/components/Girl.vue'
import Gate from '@/components/Gate.vue'
import About from '@/components/About.vue'

export default {
	components: {
		Top,
		Temple,
		Girl,
		Gate,
		About,
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
