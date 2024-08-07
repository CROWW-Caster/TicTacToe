/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      rotate: {
        '225' : '-45deg'
      }
    },
  },
  plugins: [],
}

