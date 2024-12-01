/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2px',
    },
    extend: {
      screens: {
        '2xl': '1280px',
      },
    },
  },
  plugins: [],
};
