module.exports = {
  purge: ['./index.html', './assets/index.css', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
    },
    fontFamily: {
    },
    extend: {
      margin: {
        '-ts': '-0.2rem',
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
