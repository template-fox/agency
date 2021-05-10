const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: colors.blueGray[50],
        theme: colors.blueGray[800],
        focused: colors.blueGray[700],
        light: colors.blueGray[600],
        lighter: colors.blueGray[400],
        lightest: colors.blueGray[200],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
