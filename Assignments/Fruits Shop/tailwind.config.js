/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: '480',
      md: '720',
      lg: '1080',
    },
    extend: {
      colors:{
        OrangeColor:'#ff5c34',
        WhiteColor: '#f7f7f7',
      }
      
    },
    keyframes:{
      move:{
        '100%': {transform: 'rotate(40deg) '}
      }
    },
    animation:{
      'movingy': 'move 1s linear'
    },
    fontFamily:{
      Roboto:['Roboto', 'sans-serif'],
      Kanit: ["Kanit", 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem'
      }
    }
  },
  plugins: [],
}

