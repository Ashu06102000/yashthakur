/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "road-rage": ['"Road Rage"', "sans-serif"],
        splash: ['"Splash"', "cursive"],
        istok: ['"Istok Web"', "sans-serif"],
      },
      backgroundImage: {
        "grid-paper":
          "linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "36px 36px",
      },
      colors: {
        page: "#e8e8e3",
      },
    },
  },
  plugins: [],
};
