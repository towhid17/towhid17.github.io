/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      borderRadius: {
        xl: '15px',
      },
      spacing: {
        '0.5': '0.125rem',
        '1.5': '0.375rem',
      },
      opacity: {
        '45': '0.45',
        '65': '0.65',
      },
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        glass: {
          light: 'rgba(255, 255, 255, 0.1)',
          DEFAULT: 'rgba(255, 255, 255, 0.2)',
          dark: 'rgba(255, 255, 255, 0.3)',
        },
      },
    },
  },
  plugins: [],
};