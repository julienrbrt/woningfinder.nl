const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
    'nuxt.config.js',
  ],
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
  plugins: [require('daisyui'), require('@tailwindcss/forms')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#e46948',
          'primary-focus': '#de4921',
          'primary-content': '#ffffff',
          secondary: '#28003a',
          'secondary-focus': '#230033',
          'secondary-content': '#ffffff',
          accent: '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          neutral: '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': 'rgb(17, 24, 39)',
          info: '#2094f3',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',
        },
      },
    ],
  },
}
