module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Poppins', 'Helvetica', 'sans-serif'],
     },
    colors: {
      gray: {
        DEFAULT: '#bfbebe',
      },
      lightblue: {
        DEFAULT: '#52aee0',
      },
      blue: {
        DEFAULT: '#366177',
      },
      darkblue: {
        DEFAULT: '#2c5063',
      },
      red: {
        DEFAULT: '#e05265',
      },
      white: {
        DEFAULT: '#ffffff',
      }
     }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
