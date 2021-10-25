module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      position: ['focus-within'],
      twScaleX: ['focus-within'],
      twScaleY: ['focus-within'],
      left: ['focus-within'],
      top: ['focus-within'],
    },
  },
  plugins: [],
}
