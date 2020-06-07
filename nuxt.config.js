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
    '~/assets/styles/vars.scss',
    '~/assets/styles/reset.scss',
    '~/assets/styles/base.scss',
    '~/assets/styles/font-face.scss'
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
    '@nuxtjs/color-mode',
    '@nuxtjs/style-resources'
  ],
  modules: ['@nuxt/content'],
  styleResources: {
    scss: ['~/assets/styles/_tokens.scss']
  },
  components: true,
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-a11y-dark.css'
      }
    }
  },
  build: {
    extend(config, ctx) {}
  }
}
