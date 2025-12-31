/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'coffee-dark': '#3d2817',
        'coffee-medium': '#8b6f47',
        'latte-light': '#f5e6d3',
        'earth-green': '#a8b5a2',
        'text-warm': '#4a3c2a',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};