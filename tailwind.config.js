
const customVariants = require('./src/components/variants.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      // Adding custom variants
      backgroundColor: ['active', 'group-focus'],
      textColor: ['visited'],
      borderColor: ['focus-visible', 'first'],
      // Any other variants you need
    },
  },
  plugins: [],
}
