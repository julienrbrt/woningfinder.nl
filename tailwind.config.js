const colors = require('tailwindcss/colors')

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
        'wf-purple': {
          darkest: '#230033',
          dark: '#230033',
          DEFAULT: '#28003a',
          light: '#6a0099',
          lightest: '#b000ff',
        },
        'wf-orange': {
          darkest: '#852c14',
          dark: '#de4921',
          DEFAULT: '#e46948',
          light: '#eb927a',
          lightest: '#f8dbd3',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
