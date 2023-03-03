/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: {"0":"#00040f","50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"},
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        gototop: {
          '0%': { transform: 'translateY(-0.4rem)' },
          '100%': { transform: 'translateY(0.4rem)' },
        }
      },
      animation: {
        'gototop': 'gototop 1s linear infinite alternate-reverse',
      },
      boxShadow: {
        myShadow1: "4.1px -5px 0 0 rgb(17,24,39)",
        myShadow2: "-4.1px -5px 0 0 rgb(17,24,39)",
      },
      backgroundImage: {
        worldmap: "url('./assets/worldMap.png')",
        topimage: "url('./assets/topImage.jpg')",
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      msm: "960px",
      md: "1060px",
      lg: "1200px",
      mxl: "1360px",
      xl: "1700px",
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
