/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "24px",
          
        },
        center: true,
        screens: {
          sm: "540px",
          md: "720px",
          lg: "960px",
          xl: "1188px",
        },
      },
      screens: {
        xsm: "400px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      
      fontFamily: {
        lato: ["lato", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        PT: ["PT Sans", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        
      },
      boxShadow: {

      },
      colors: {
        orange: "#FF4C24",
        black: "#010101",
        gray: "#5F5F5F",
        btnOrange: "#FF9748",
      },
      backgroundSize: {
        full: "100% 100%",
      },
      backgroundImage: {
        headerBg: `url("./assets/images/webp/Hero.webp")`,
      },
      fontSize: {
        "10xl": "44px",
        "11xl": "56px"
      }
    },

    animation: {
      'move-up': 'moveUp 2s infinite alternate',
      'move-down': 'moveDown 2s infinite alternate',
      'move-left': 'moveLeft 2s infinite alternate',
      'move-right': 'moveRight 2s infinite alternate',
      'move-diagonal': 'moveDiagonal 2s infinite alternate',
    },
    keyframes: {
      moveUp: {
        '0%': { transform: 'translateY(290)' },
        '100%': { transform: 'translateX(500px)' },
      },
      moveDown: {
        '0%': { transform: 'translateY(100)' },
        '100%': { transform: 'translateX(150px)' },
      },
      moveLeft: {
        '0%': { transform: 'translateY(60)' },
        '100%': { transform: 'translateX(90px)' },
      },
      moveRight: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(50px)' },
      },
      moveDiagonal: {
        '0%': { transform: 'translate(0, 0)' },
        '100%': { transform: 'translate(30px, 30px)' },
      },
    },
  },
  plugins: [],
}

