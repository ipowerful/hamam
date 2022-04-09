<template>
	<div class="about">
		<!--		<div class="picture-top">-->
		<!--			<nuxt-picture-->
		<!--				class="picture"-->
		<!--				loading="lazy"-->
		<!--				src="about-bg@2x.jpg"-->
		<!--				sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw wide:100vw" />-->


		<!--			<div-->
		<!--				v-parallax="0.2"-->
		<!--				class="bg flowers1" />-->
		<!--			<div-->
		<!--				v-parallax="0.3"-->
		<!--				class="bg flowers2" />-->
		<!--			<div-->
		<!--				v-parallax="0.05"-->
		<!--				class="bg flowers3" />-->

		<!--			<nuxt-picture-->
		<!--				v-parallax="0.01"-->
		<!--				class="gate"-->
		<!--				width="248px"-->
		<!--				height="279px"-->
		<!--				loading="lazy"-->
		<!--				src="about-top-gate@2x.png"-->
		<!--				sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw wide:100vw" />-->
		<!--			<div-->
		<!--				v-parallax="0.01"-->
		<!--				class="gate-shape" />-->
		<!--			<clip-path-svg />-->
		<!--		</div>-->
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
				width="720"
				height="800"
				src="about-3@2x.jpg"
				sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw wide:100vw" />
			<h2 class="h2">
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
		<nuxt-picture
			class="picture"
			loading="lazy"
			src="about-bottom.png"
			sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw wide:100vw" />
	</div>
</template>

<script>
import Heading from '@/components/Heading.vue'
import ClipPathSvg from '@/assets/svg/about-clip-path.svg?inline'

export default {
	components: {
		Heading,
		ClipPathSvg,
	},
}
</script>

<style lang="scss">
.about {
	background: $color-yellow;

	#aboutClipPath {
		transform: scale(0.0028, 0.0032);
	}

	//.picture-top {
	//	margin-bottom: 100px;
	//	position: relative;
	//
	//	.picture img {
	//		clip-path: url(#aboutClipPath)
	//	}
	//
	//	.bg {
	//		position: absolute;
	//		z-index: 2;
	//	}
	//
	//	.flowers1 {
	//		left: 0;
	//		top: 39%;
	//		width: 99px;
	//		height: 159px;
	//		background: url('~assets/images/flowers-bg4.png') left center no-repeat;
	//	}
	//
	//	.flowers2 {
	//		left: 15.5%;
	//		top: 83%;
	//		width: 115px;
	//		height: 108px;
	//		background: url('~assets/images/flowers-bg5.png') left bottom no-repeat;
	//	}
	//
	//	.flowers3 {
	//		left: 64.5%;
	//		top: -8%;
	//		width: 65px;
	//		height: 62px;
	//		background: url('~assets/images/flowers-bg6.png') right top no-repeat;
	//	}
	//
	//	.gate {
	//		position: absolute;
	//		z-index: 3;
	//		left: 15.5%;
	//		top: 29%;
	//	}
	//
	//	.gate-shape {
	//		position: absolute;
	//		left: 18.5%;
	//		top: 32%;
	//		width: 249px;
	//		height: 280px;
	//		background: url('~assets/svg/about-gate-shape.svg') no-repeat;
	//	}
	//}

	.picture {
		img {
			@include img-fluid;
		}
	}

	.h3 {
		@include mob-h3;
		color: #0D0054;
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
		padding: 35px;
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
