/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textIndent: {
        '1': '2rem',
        '2': '3rem',
        '3': '4rem',
        '4': '5rem',
        '5': '6rem',
        '6': '7rem',
        '7': '8rem',
      },
    },
  },
  plugins: [
    require('tailwindcss-text-indent')(),
  ],
}

