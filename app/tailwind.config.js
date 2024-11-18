/** @type {import('tailwindcss').Config} */
const glassmorphism = require('tailwindcss-glassmorphism');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Amethysta: ['"Amethysta"', 'serif'], 
        DmSans: ['"DMSans', 'serif']
      },
    },
  },
  plugins: [glassmorphism],
};