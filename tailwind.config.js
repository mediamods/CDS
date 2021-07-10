
//how to create standard colors and re-use in box-shadow
//https://github.com/tailwindlabs/tailwindcss/issues/654

const ourColors = {
  black: {
    DEFAULT: `#13100b`
  },
  beige: {
    DEFAULT: `#d8d5cc`
  },
  brown: {
    DEFAULT: `#b1863d`
  },
  crimson: {
    DEFAULT: `#a51c30`
  },
  white: {
    DEFAULT: `#fff`
  }
};

module.exports = {
  purge: {
    enabled: true,
    content: [
      './pages/api/**/*.js'
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: ourColors,

      //shadow-
      boxShadow: {
        'buttonCrimson': `0 0 0 5pt ${ourColors.crimson.DEFAULT}`,
        'noButtonCrimson': `0 0 0 0 ${ourColors.crimson.DEFAULT}`,
      },

      //ease-
      transitionTimingFunction: {
        'bop': `cubic-bezier(0.215, 0.61, 0.355, 1)`
      },

      //https://github.com/tailwindlabs/tailwindcss/discussions/2727
      //w-
      width: {
        'fit': 'fit-content'
      }
    }

  },
  plugins: [],
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
      translate: ['group-hover']
    },
  }
}
