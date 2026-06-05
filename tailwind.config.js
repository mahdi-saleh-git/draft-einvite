/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        invite: ['"Cormorant Upright"', 'serif'],
        corinthia: ['"Great Vibes"', 'cursive'],
        rouge: ['"Playfair Display"', 'serif'],
        tangerine: ['"Parisienne"', 'cursive'],
      },
    },
  },

  plugins: [],
}
