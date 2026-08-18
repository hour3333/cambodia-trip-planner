/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        khmer: {
          gold: '#D4AF37',
          'gold-light': '#F3E5AB',
          ruby: '#9B111E',
          emerald: '#046A38',
          dark: '#1C1917',
          card: '#26221F',
          amber: '#E5A93B',
          temple: '#C27D38'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
