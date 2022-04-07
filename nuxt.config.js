export default {
	target: 'static',
	head: {
		title: 'hamam',
		htmlAttrs: {
			lang: 'ru',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
	},
	loading: {
		color: '#F8002E',
	},
	plugins: [
		// '~/plugins/http.js',
		// '~/plugins/filters.plugin.js',
		// '~/plugins/helpers.js',
		// '~/plugins/element-ui.js',
		// '~/plugins/vuelidate.js',
		// {
		// 	src: '~/plugins/nuxt-client-init.js',
		// 	mode: 'client',
		// },
	],
	components: true,
	css: [
		// 'bootstrap/scss/_reboot.scss',
		'bootstrap/scss/_grid.scss',
		'~/assets/styles/reset.scss',
		'~/assets/styles/_bootstrap-grid-custom.scss',
		'~/assets/styles/_svg-icon.scss',
	],
	buildModules: [
		'@nuxtjs/device',
	],
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/style-resources',
		'@nuxtjs/svg',
		'@nuxt/content',
		['@nuxtjs/svg-sprite', {
			elementClass: 'svg-icon',
			spriteClassPrefix: '',
		}],
		['@nuxt/image', {
			dir: 'static/images',
			staticFilename: '[publicPath]/images/[name]-[hash][ext]',
			screens: {
				xs: 360,
				sm: 576,
				md: 768,
				lg: 992,
				xl: 1200,
				xxl: 1400,
				wide: 1920,
			},
		}],
		['nuxt-polyfill', {
			features: [{
				require: 'smoothscroll-polyfill',
				detect: () => 'scrollBehavior' in document.documentElement.style
					&& window.__forceSmoothScrollPolyfill__ !== true,
				install: smoothscroll => smoothscroll.polyfill(),
			}],
		}],
	],
	styleResources: {
		scss: [
			'bootstrap/scss/_functions.scss',
			'bootstrap/scss/_variables.scss',
			'bootstrap/scss/_mixins.scss',
			'bootstrap/scss/_grid-framework.scss',
			'~/assets/styles/_variables.scss',
			'~/assets/styles/_functions.scss',
			'~/assets/styles/_mixins.scss',
		],
	},
	axios: {
		baseURL: '/',
	},

	router: {
		prefetchLinks: false,
		linkActiveClass: 'layout__link--active',
		linkExactActiveClass: 'layout__link--exact-active',
	},

	build: {
		css: {
			modules: true,
		},
		postcss: {
			order: 'cssnanoLast',
			preset: {
				browsers: 'cover 99.5%',
				autoprefixer: true,
			},
		},
	},
}
