/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          100: "#135B54",
          200: "#104B46",
        },
        beige: "#FCFCD4",
        customRed: "#FB7B7B",
        customGreen: "#7BFB80",
        customBlack: "#1E1E1E",
      }
    },
  },
  plugins: [],
}

