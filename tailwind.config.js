const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        rose: colors.rose,
        emerald: colors.emerald,
        kakao: '#fee500',
        facebook: '#1876f1',
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
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-focus'],
      borderColor: ['responsive', 'hover', 'focus', 'active', 'group-focus'],
      textColor: ['responsive', 'hover', 'focus', 'active', 'group-focus'],
      opacity: ['responsive', 'hover', 'focus', 'active', 'group-focus'],
      transform: ['responsive', 'hover', 'focus', 'active', 'group-focus'],
      scale: ['responsive', 'hover', 'focus', 'active', 'group-focus'],
    },
  },
  plugins: [],
}
