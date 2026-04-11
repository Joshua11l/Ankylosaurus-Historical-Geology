/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#1F3D2B',
        sand: '#E6D3A3',
        stone: '#5A5A5A',
        stoneText: '#3F3F39',
        background: '#F8F7F3',
      },
      fontFamily: {
        sans: ['Instrument Sans', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
