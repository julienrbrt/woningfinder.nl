// https://nuxtjs.org/docs/2.x/directory-structure/nuxt-config
export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'WoningFinder - Reageer automatisch op woningen',
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
          'Bij WoningFinder creëer je één keer een zoekopdracht voor je droomhuis. Daarna reageert WoningFinder automatisch op alle aanbod van woningcorporaties dat matcht met je zoekopdracht. Jij hoeft verder niets meer te doen, makkelijk toch?',
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
      {
        // Cookiebot consent banner
        id: 'Cookiebot',
        src: 'https://consent.cookiebot.com/uc.js',
        'data-cbid': '7df61b83-2819-4bae-9f32-86971fea4bc5',
        type: 'text/javascript',
        async: true,
      },
    ],
    noscript: [
      {
        innerHTML: 'This website requires JavaScript.',
      },
    ],
    __dangerouslyDisableSanitizers: ['noscript'],
  },
  css: ['@/assets/css/main.css'],
  plugins: [{ src: '~/plugins/vue-autocomplete.js', ssr: false }],
  components: true,
  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-analytics'],
  modules: ['@nuxtjs/axios', '@nuxtjs/sitemap', '@nuxt/content'],
  axios: {
    baseURL: 'https://woningfinder.nl/api/',
  },
  sitemap: {
    hostname: 'https://woningfinder.nl',
    gzip: true,
    exclude: ['/start/**', '/voorwaarden', '/voorwaarden/**'],
  },
  tailwindcss: {
    mode: 'jit',
  },
  googleAnalytics: {
    id: 'UA-202002328-1',
  },
  loading: {
    color: '#e46948',
    height: '5px',
  },
  env: {
    stripeKey: process.env.STRIPE_PUBLISHABLE_KEY,
    mapboxKey: process.env.MAPBOX_API_KEY,
  },
  build: {},
  generate: {
    fallback: '404.html',
  },
}
