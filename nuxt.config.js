export default {
  ssr: false,   // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  target: 'static',   // Target: https://go.nuxtjs.dev/config-target
  head: {   // Global page headers: https://go.nuxtjs.dev/config-head
    title: 'woningfinder.nl',
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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap'
      }
    ]
  },  
  css: [ ], // Global CSS: https://go.nuxtjs.dev/config-css
  plugins: [ ], // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  components: true, // Auto import components: https://go.nuxtjs.dev/config-components
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss', // https://go.nuxtjs.dev/tailwindcss
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  tailwindcss: {
    jit: true
  },
}
