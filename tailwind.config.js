const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
      `modules/**/*.{vue,js,ts}`,
    ],
  },
  darkMode: false,
  mode: 'jit',
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      gray: {
        ...colors.trueGray,
        50: '#f8fafb',
      },
      green: {
        25: '#0ACA40',
        50: '#E7F7EA',
        100: '#D7FFDF',
        200: '#0DB431',
        300: '#087A36',
        400: '#006B17',
        500: '#026417',
        600: '#08591F',
        700: '#004810',
        800: '#003E0E',
        900: '#002510',
      },
      red: {
        50: '#FFECEE',
        100: '#E30319',
      },
      current: 'currentColor',
    },
    fontFamily: {
      sans: ['"Red Hat Display"', 'sans-serif'],
      rope: ['"Manrope"'],
    },
    fontWeight: {
      100: '100',
      200: '200',
      300: '300',
      400: '400',
      500: '500',
      600: '600',
      700: '700',
      800: '800',
      900: '900',
    },
    extend: {
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-expo': 'cubic-bezier(0.7, 0, 0.84, 0)',
        'in-out-back': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
      },
      fontSize: {
        '3xl': '28px',
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
