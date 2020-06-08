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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    bodyAttrs: {
      class: [
        'font-body bg-light-mode-background-color dark:bg-dark-mode-background-color text-light-mode-on-background-color dark:text-dark-mode-on-background-color'
      ]
    }
  },
  loading: { color: '#fff' },
  css: [],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss'
  ],
  modules: ['@nuxt/content'],
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
