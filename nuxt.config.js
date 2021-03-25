// https://nuxtjs.org/docs/2.x/directory-structure/nuxt-config
export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'WoningFinder - Zoekopdracht voor je droomhuis',
    htmlAttrs: {
      lang: 'nl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'WoningFinder - Zoekopdracht voor je droomhuis' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap' },
    ]
  },  
  css: [
      '@/assets/css/main.css',
  ],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {},
  build: {},
  tailwindcss: {
    jit: true
  },
}
