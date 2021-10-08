module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Poppins', 'Helvetica', 'sans-serif'],
     },
    colors: {
      blue: {
        // light: '#85d7ff',
        DEFAULT: '#366177',
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
  plugins: [],
}
