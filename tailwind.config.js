/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '1': '1',
      },
    },
    fontFamily: {
      cabin: ['Cabin', 'sans-serif'],
    }
  },
  plugins: [
    require('tailwindcss-aspect-ratio'),
  ],
}

