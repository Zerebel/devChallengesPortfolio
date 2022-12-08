/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', ...defaultTheme.fontFamily.sans],
        quantico: ['Quantico', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray1: '#4F4F4F',
        gray2: '#F2F2F2',
        gray3: '#828282',
        gray4: '#E0E0E0',
        gray5: '#333333',
      },
    },
  },
  plugins: [],
};
