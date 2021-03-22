module.exports = {
  purge: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
    'nuxt.config.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
          'wf-purple': '#28003A',
          'wf-orange': 'E46948',
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
