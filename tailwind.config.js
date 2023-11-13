/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      keyframes: {
        slideLeft: {
          'from': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          'to': {
            transform: 'translateX(0)',
            opacity: '1',
          }
        },
        slideRight: {
          'from': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          'to': {
            transform: 'translateX(0)',
            opacity: '1',
          }
        }
      },
      animation: {
        'slideLeft': 'slideLeft 0.7s ease',
        'slideRight': 'slideRight 0.7s ease',
      }
    },
  },
  plugins: [],
}

