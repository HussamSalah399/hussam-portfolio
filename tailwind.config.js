/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    container: {
      center: true,
    },


    extend: {

      animation: {
        'infinite-scroll': 'infinite-scroll 5s linear infinite',
        'online' : 'online .8s ease-in-out infinite alternate'
      },
      
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        },

        'online' : {
          from: { opacity: '1' },
          to: { opacity: '0' }
      }

      }
    },
  },
  plugins: [],
}

