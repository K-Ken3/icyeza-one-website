/** @type {import('tailwindconfig').Config} */
module.exports = {
  darkMode: 'class', // ← this line is required for dark: prefix to work
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'coffee-dark':    '#3d2817',
        'coffee-medium':  '#8b6f47',
        'latte-light':    '#f5e6d3',     // ← light cream background
        'text-warm':      '#4a3c2a',
        'accent-gold':    '#d4a574',
        'earth-green':    '#a8b5a2',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans:  ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}