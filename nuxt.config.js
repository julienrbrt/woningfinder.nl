// https://nuxtjs.org/docs/2.x/directory-structure/nuxt-config
export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'WoningFinder - Reageer automatisch op huurwoningen',
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
          'Vind je perfecte huurwoning zonder elke dag alle woningaanbod websites zelf te bezoeken om te reageren. Je reageert automatisch via WoningFinder op alle woningen die matchen met je zoekopdracht.',
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
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap',
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
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxt/content',
    '@nuxtjs/sentry',
    'cookie-universal-nuxt',
  ],
  axios: {
    baseURL: 'https://woningfinder.nl/api/',
  },
  sitemap: {
    hostname: 'https://woningfinder.nl',
    gzip: true,
    exclude: [
      '/start/**',
      '/voorwaarden',
      '/voorwaarden/**',
      '/mijn-zoekopdracht/**',
    ],
  },
  sentry: {
    dsn: process.env.SENTRY_DSN,
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
