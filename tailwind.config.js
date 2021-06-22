const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightBlue: colors.lightBlue,
        rose: colors.rose,
        emerald: colors.emerald,
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest: '.25em',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
