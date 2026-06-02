/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        invite: ['"Arial Monstera"', 'sans-serif'],
        corinthia: ['"Arial Monstera"', 'sans-serif'],
        rouge: ['"Arial Monstera"', 'sans-serif'],
        tangerine: ['"Arial Monstera"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
