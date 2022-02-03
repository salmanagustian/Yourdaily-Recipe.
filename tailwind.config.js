const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
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
      truGray: colors.trueGray,
      amber: colors.amber,
      green: colors.green,
    },
    fontFamily: {
      'sans': 'Poppins, sans-serif',
    },
    extend: {},
  },
  plugins: [],
}
