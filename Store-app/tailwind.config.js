/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fallIntoCart: {
          '0%': { top: '0%', transform: 'translateX(0) rotate(0deg) scale(1)', opacity: '0' },
          '10%': { opacity: '1' },
          '70%': { opacity: '1' },
          '90%, 100%': { top: '75%', transform: 'translateX(5px) rotate(180deg) scale(0.3)', opacity: '0' },
        },
        cartGobble: {
          '0%, 100%': { transform: 'scale(1) translateY(0)' },
          '25%': { transform: 'scale(1.05, 0.95) translateY(2px)' },
          '50%': { transform: 'scale(0.95, 1.05) translateY(-4px)' },
          '75%': { transform: 'scale(1) translateY(0)' },
        }
      },
      animation: {
        'fall-item': 'fallIntoCart 2s infinite ease-in',
        'cart-gobble': 'cartGobble 1.5s infinite ease-in-out',
      }
    },
  },
  plugins: [],
}