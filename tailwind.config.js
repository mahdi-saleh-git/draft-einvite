/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        invite: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        corinthia: ['"corinthia"', 'cursive'],
        rouge: ['"Rouge Script"', 'cursive'],
        tangerine: ['"Tangerine"', 'cursive'],
      }
    },
  },
  plugins: [],
}
