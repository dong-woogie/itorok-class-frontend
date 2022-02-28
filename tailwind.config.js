const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
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
      boxShadow: {
        deep: 'rgb(0 0 0 / 10%) 0px 0px 8px',
      },
      flexWrap: {
        unset: 'unset',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-focus'],
      backgroundOpacity: ['responsive', 'hover', 'focus', 'active', 'group-focus'],
      borderColor: ['responsive', 'hover', 'focus', 'active', 'group-focus'],
      textColor: ['responsive', 'hover', 'focus', 'active', 'group-focus'],
      opacity: ['responsive', 'hover', 'focus', 'active', 'group-focus'],
      transform: ['responsive', 'hover', 'focus', 'active', 'group-focus'],
      scale: ['responsive', 'hover', 'focus', 'active', 'group-focus'],
    },
  },
  plugins: [],
}
