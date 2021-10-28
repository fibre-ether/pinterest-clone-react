module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
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
      pointerEvents: ['hover', 'focus'],
      justifyContent: ['focus', 'dark']
    },
  },
  plugins: [
    require("tailwindcss-named-groups"),
  ],
}
