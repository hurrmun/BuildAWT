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
        // light: '#85d7ff',
        DEFAULT: '#bfbebe',
        // dark: '#009eeb',
      },
      lightblue: {
        // light: '#85d7ff',
        DEFAULT: '#52aee0',
        // dark: '#009eeb',
      },
      blue: {
        // light: '#85d7ff',
        DEFAULT: '#366177',
        // dark: '#009eeb',
      },
      darkblue: {
        // light: '#85d7ff',
        DEFAULT: '#2c5063',
        // dark: '#009eeb',
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
