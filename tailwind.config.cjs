/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xsm: { max: "480px" },
        sm: "480px",
        xmd: { max: "547px" },
        md: "547px",
        xlg: { max: "768px" },
        lg: "768px",
        xxl: { max: "1024px" },
        xl: "1024px",
        x2xl: { max: "1680px" },
        "2xl": "1680px",
      },
      colors: {
        primary: "#B1B2FF",
        secondary: "#F1F6F5",
        "dark-1": "#212024",
        "dark-2": "#333",
        grey: "#777",
      },
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(300px, 1fr))",
      },
      keyframes: {
        click: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        clicking: "click 0.3s ease",
      },
      spacing: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
    },
  },
};
