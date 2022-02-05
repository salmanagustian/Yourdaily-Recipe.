const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
  },
  theme: {
    container: {
      center: true,
      padding: '8rem',
    },
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      red: colors.red,
      truGray: colors.trueGray,
      amber: colors.amber,
      green: colors.green,
    },
    fontFamily: {
      'sans': 'Poppins, sans-serif',
      'display': 'Pacifico, cursive',
    },
    extend: {},
  },
  plugins: [],
}
