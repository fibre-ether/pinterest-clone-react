module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    namedGroups: ["outer", "inner"],
    extend: {},
  },
  variants: {
    extend: {
      animation: ['hover'],
      position: ['focus-within'],
      scale: ['group-focus'],
      opacity: ['group-focus'],
      pointerEvents: ['hover', 'focus']
    },
  },
  plugins: [
    require("tailwindcss-named-groups"),
  ],
}
