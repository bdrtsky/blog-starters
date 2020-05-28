export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: [
    '~/assets/styles/_tokens.css',
    '~/assets/styles/reset.css',
    '~/assets/styles/base.css',
    '~/assets/styles/typography.css',
    '~/assets/styles/app.css'
  ],
  plugins: [],
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/svg', '@nuxtjs/color-mode'],
  modules: ['@nuxt/content'],
  components: true,
  build: {
    extend(config, ctx) {}
  }
}
