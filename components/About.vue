<template>
	<div class="about">
		<div class="text">
			<heading>
				Хамам - особый ритуал
			</heading>
			<p>
				На Востоке посещение хаммама считается не просто способом поддержания здоровья, а особым ритуалом.
			</p>
			<p>
				Стены, пол и потолок построены из изысканного кафеля и камней, а сравнительно невысокая температура —
				всего 30-50 градусов, создает комфортные условия для отдыха телом и душой.
			</p>
			<p>
				Расслабление в хамамe принесет пользу тем, кто хочет восстановиться после интенсивной тренировки,
				заботится о состоянии сердечно-сосудистой системы, следит за красотой своей кожи или мечтает ощутить
				состояние легкой медитации.
			</p>
		</div>
		<div class="img-holder">
			<nuxt-picture
				class="picture"
				loading="lazy"
				width="360"
				height="400"
				src="about@2x.jpg"
				sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw wide:100vw" />
			<h2
				class="h2">
				Уникальное место, <br>
				где вы можете
				<span>
					отдохнуть <br>
					душой и телом
				</span>
			</h2>
		</div>
		<div class="text">
			<heading>
				Пространство наслаждения
			</heading>
			<p>
				Благодаря целительному пару, это пространство наслаждения, помогает вывести токсины, очистить поры,
				стабилизировать давление и привести в порядок мысли.
			</p>
			<p>
				Постоянное посещение хаммама хорошо влияет на иммунитет, делая его крепче, а человека здоровее. Его
				благотворное влияние прогревает внутренние органы и очищает дыхательные пути.
			</p>
		</div>
	</div>
</template>

<script>
import Heading from '@/components/Heading.vue'

export default {
	components: {
		Heading,
	},
}
</script>

<style lang="scss">
.about {
	background: $color-yellow;
	padding-bottom: 30px;

	.picture {
		img {
			@include img-fluid;
		}
	}

	p {
		margin-bottom: 20px;
	}

	.text {
		@include c;
		@include cmax;
	}

	.img-holder {
		position: relative;
		margin: 65px 0;
	}

	.h2 {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		text-align: center;
		padding: 50px 15px;
		@include mob-h2;

		&:before {
			content: '';
			position: absolute;
			top: -20px;
			left: 50%;
			width: 100px;
			height: 1px;
			transform: translateX(-50%);
			background: $color-gold;
		}
	}

}
</style>
