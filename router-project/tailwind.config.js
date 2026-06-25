/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // These are the exact custom shades used across the StudyNotion template layout
        richblack: {
          5:  "#F1F2FF",
          25: "#A1A2A3",
          50: "#C5C7D4",
          100: "#AFB2BF",
          200: "#999DAA",
          300: "#838894",
          400: "#6E727F",
          500: "#585D69",
          600: "#424854",
          700: "#2C333F",
          800: "#161D29",
          900: "#000814", // This is the exact dark background shade for your core screens
        },
      },
    },
  },
  plugins: [],
}