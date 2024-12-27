/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      backgroundImage: {
        "bg-gradient-lose":
          "linear-gradient(to bottom, rgba(0, 40, 159, 1) 100%, rgba(0, 31, 123, 1) 100%, rgba(9, 21, 87, 1) 100%)",

        "custom-gradient":
          "linear-gradient(to bottom, rgba(10, 31, 85, 0.4) 40%, rgba(16, 44, 115, 0.4) 40%, rgba(12, 26, 76, 0.4) 40%)",
        "bg-gradient-win": "#2187E5",
        "bg-gradient-draw": "#0038E0",
      },
      colors: {
        //Navbar
        navbar: {
          //BG
          "custom-blue-1": "#091557",
          "custom-blue-2": "#122690",
          "custom-blue-3": "#203397",

          //LOGO
          "custom-blue-4": "#1553EF", // Màu với độ trong suốt
          "custom-blue-5": "#0C3089",
          "custom-blue-6": "#0C1A4C",
        },
        //Matches
        matches: {
          "custom-blue-1": "#00289F",
          "custom-blue-2": "#001F7B",
          "custom-blue-3": "#091557",
        },

        // Màu nền
        background: {
          main: "#01040D",
          component: "#020C20",
        },
        // Màu chữ
        text: {
          main: "#FFFFFF",
          subtitle: "#8D8E92",
        },
        //Size chử
        size: {
          title: "14px",
          name: "13px",
          subname: "11px",
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
