const eventList = require('./static/event-data/event-list.json')
// import colors from 'vuetify/es5/util/colors'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  // mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: '%s｜' + process.env.SITE_NAME,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { property: 'og:locale', content: 'ja_JP' },
      { property: 'og:type', content: 'article' },
      { property: 'og:site_name', content: process.env.SITE_NAME },
      { property: 'og:image', content: process.env.SITE_OG_IMAGE }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: process.env.SITE_SHORTCUT_ICON },
      { rel: 'apple-touch-icon', type: 'image/png', href: process.env.SITE_APPLE_ICON },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  // vuetify: {
  //   // エラーが出たためコメントアウト
  //   // 参考：https://github.com/nuxt-community/vuetify-module/issues/82
  //   // customVariables: ['~/assets/variables.scss'],
  //   theme: {
  //     // dark: true,
  //     themes: {
  //       dark: {
  //         primary: colors.blue.darken2,
  //         accent: colors.grey.darken3,
  //         secondary: colors.amber.darken3,
  //         info: colors.teal.lighten1,
  //         warning: colors.amber.base,
  //         error: colors.deepOrange.accent4,
  //         success: colors.green.accent3
  //       }
  //     }
  //   }
  // },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  generate: {
    routes() {
      return eventList.map(item => {
        return `event/${item.link}`
      })
    }
  },
  router: {
    base: process.env.SITE_ROOT_PATH,
    trailingSlash: true,
    middleware: 'redirect',
  }
}
