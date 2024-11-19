module.exports = {
  darkMode: 'class', // Enables class-based dark mode
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          light: '#BDB2FF',
          DEFAULT: '#7B2CBF',
          dark: '#4A1F88',
        },
        yellow: {
          light: '#FFF9C4',
          DEFAULT: '#F4D06F',
          dark: '#E1B12C',
        },
        gray: {
          background: '#F9F9F9',
          dark: '#1E1E1E',
          text: '#4B4B4B',
          textDark: '#D1D1D1',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
