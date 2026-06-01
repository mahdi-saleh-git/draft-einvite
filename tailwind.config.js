/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        invite: ['"Tilt Neon"', 'sans-serif'],
        corinthia: ['"Tilt Neon"', 'sans-serif'],
        rouge: ['"Tilt Neon"', 'sans-serif'],
        tangerine: ['"Tilt Neon"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
