// https://nuxtjs.org/docs/2.x/directory-structure/nuxt-config
const createSitemapRoutes = async () => {
  var routes = []
  const { $content } = require('@nuxt/content')
  const posts = await $content('posts').fetch()
  for (const post of posts) {
    routes.push(`nieuws/${post.slug}`)
  }
  return routes
}

export default {
  ssr: true,
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
        as: 'style',
        rel: 'stylesheet preload',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap',
      },
    ],
  },
  css: ['@/assets/css/main.css'],
  plugins: [
    { src: '~/plugins/vue-autocomplete.js', ssr: false },
    { src: '~/plugins/vue-mapbox.js', ssr: false },
  ],
  components: true,
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/sentry',
    '@nuxtjs/sitemap',
    'cookie-universal-nuxt',
  ],
  axios: {
    baseURL: 'https://woningfinder.nl/api',
  },
  sitemap: {
    defaults: {
      changefreq: 'monthly',
      priority: 1,
      lastmod: new Date(),
    },
    hostname: 'https://woningfinder.nl',
    gzip: true,
    routes: createSitemapRoutes,
    exclude: ['/start/**', '/voorwaarden/**', '/mijn-zoekopdracht/**'],
  },
  sentry: {
    dsn: process.env.SENTRY_DSN,
  },
  loading: {
    color: '#e46948',
    height: '5px',
  },
  env: {
    mapboxKey: process.env.MAPBOX_API_KEY,
  },
  build: {},
  generate: {
    exclude: [
      /^\/mijn-zoekopdracht/, // path starting with /mijn-zoekopdracht
    ],
    fallback: '404.html',
  },
  watchers: {
    webpack: {
      ignored: /(node_modules)|(.git)/,
    },
  },
}
