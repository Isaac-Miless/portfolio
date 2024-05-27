/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

// Define your primary color
const primaryColor = colors.blue[500];

// Function to convert hex color to RGBA
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { ...colors.blue, DEFAULT: primaryColor },
        neutral: { ...colors.gray, DEFAULT: colors.gray[700] },
        surface: { ...colors.white, DEFAULT: colors.white },
      },
      keyframes: {
        blob: {
          "0%, 100%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
          },
        },
        slideInLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX(-50px)",
            visibility: "hidden",
          },
          "1%": {
            visibility: "visible",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
            visibility: "visible",
          },
        },
      },
      animation: {
        blob: "blob 5s ease-in-out infinite",
        slideInLeft: "slideInLeft 1s forwards",
      },
      boxShadow: {
        // custom: "0 5px 5px 5px rgba(13, 100, 0, 0.1)",
        custom: `0 10px 20px ${hexToRgba(primaryColor, 0.25)}`, // Increased blur and opacity for visibility
      },
    },
  },
  plugins: [],
};
