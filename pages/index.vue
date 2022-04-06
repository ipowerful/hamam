<template>
	<div>
		<h1 class="f1">Хамам</h1>
		<h1 class="f2">Хамам</h1>
		<h1 class="f3">01/13</h1>
		<h1 class="f4">Хамам</h1>
		<p>Турецкий хамам способствует улучшению работы сердца, улучшает состояние сосудов, помогает при лечении
			простуды,
			очищая наше тело от шлаков.</p>
	</div>
</template>

<script>
import Top from '@/components/Top.vue'

export default {
	components: {
		Top,
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
