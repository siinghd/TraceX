/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: '#EAEAF3',
        black: '#3D4048',
        grey: '#CCCDD9',
        'gradient-light': 'linear-gradient(90deg, #EBBAED 0%, #FFDAB6 100%)',
        'gradient-dark': 'linear-gradient(90deg, #F969FD 0%, #FFB973 100%);',
        'grad-light-1': '#EBBAED',
        'grad-light-2': '#FFDAB6',
        'grad-dark-1': '#F969FD',
        'grad-dark-2': '#FFB973',        
      }
    },
  },
  plugins: [],
}
