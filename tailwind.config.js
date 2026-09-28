/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'zara-red': '#E2030A',
        'zara-red-dark': '#B90208',
        'zara-green': '#00B35E',
        'zara-green-dark': '#009A50',
        'zara-yellow': '#FBCB23',
        'zara-blush': '#FDEDED',
        'zara-blush-border': '#F5B8BC',
      },
      fontFamily: {
        sans: ['Nunito', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
        script: ['"Kaushan Script"', 'cursive'],
      },
    },
  },
  plugins: [],
};
