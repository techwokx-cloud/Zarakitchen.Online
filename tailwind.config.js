/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'zara-red': '#DC2626',
        'zara-green': '#16A34A',
        'zara-yellow': '#FBBF24',
      },
    },
  },
  plugins: [],
};
