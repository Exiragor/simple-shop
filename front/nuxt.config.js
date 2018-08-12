module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'simple-shop-front',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Frontend side of simple-shop' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
    ]
  },
  /*
  ** Including scss files
   */
  css: [
    // SCSS file in the project
    '@/assets/scss/app.scss'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['vue-notification/dist/ssr.js']
  },
  modules: [
    'bootstrap-vue/nuxt',
  ],
  plugins: [
    '~plugins/notifications',
    '~/plugins/eventbus.js'
  ]
}
