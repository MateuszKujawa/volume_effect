/** @type {import('tailwindcss').Config} */
const glassmorphism = require('tailwindcss-glassmorphism');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Amethysta: ['"Amethysta"', 'serif'], // Upewnij się, że rodzina czcionek jest poprawna
      },
    },
  },
  plugins: [glassmorphism],
};