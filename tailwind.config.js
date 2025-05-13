/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {  
        primary: '#9GCFE6',
        secondary: '#F0D39A',
        accent: '#90C897',
        'primary-light': '#B5DCF0',
        'primary-dark': '#7BABC2',
        'secondary-light': '#F7E2BC',
        'secondary-dark': '#C9B082',
        'accent-light': '#A8D4AE',
        'accent-dark': '#78A77F',
        black: '#000000'
      },
    },
  },
  plugins: [],
  safelist: [
    'text-primary',
    'text-secondary',
    'text-accent',
  ]
};
