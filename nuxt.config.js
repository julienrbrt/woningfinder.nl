// https://nuxtjs.org/docs/2.x/directory-structure/nuxt-config
export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'WoningFinder - Zoekopdracht voor je droomhuis',
    htmlAttrs: {
      lang: 'nl',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Bij WoningFinder creëer je één keer een zoekopdracht voor je droomhuis. Daarna reageert WoningFinder voor jou op alle aanbod van woningcorporaties dat matcht met je zoekopdracht. Jij hoeft verder niets meer te doen, makkelijk toch?',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap',
      },
    ],
    script: [
      {
        // Stripe recommends loading the script on every page 'to best leverage Stripe's advanced fraud functionality'
        src: 'https://js.stripe.com/v3',
        defer: true,
      },
    ],
    noscript: [
      {
        innerHTML:
          'This website requires JavaScript. <img src="https://sa.woningfinder.nl/noscript.gif" alt=""/>',
      },
    ],
    __dangerouslyDisableSanitizers: ['noscript'],
  },
  css: ['@/assets/css/main.css'],
  plugins: [{ src: '~/plugins/simple-analytics.js', ssr: false }],
  components: true,
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: ['@nuxtjs/axios', '@nuxtjs/sitemap'],
  axios: {
    baseURL: 'http://localhost:8080',
    // baseURL: 'https://woningfinder.nl/api/',
  },
  sitemap: {
    hostname: 'https://woningfinder.nl',
    gzip: true,
  },
  tailwindcss: {
    jit: true,
  },
  loading: {
    color: '#e46948',
    height: '5px',
  },
  env: {
    stripeKey: process.env.STRIPE_PUBLISHABLE_KEY,
  },
  build: {},
}
