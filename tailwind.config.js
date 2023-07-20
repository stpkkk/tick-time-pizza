/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#49535c",
        secondary: "#de3f3b",
        secondaryLight: "#f15f5b",
        black: "#1e1e1e",
        yellow: "#ffd600",
        yellowLight: "#ffe24b",
        grayLight: "#f3f6f9",
        gray: "#EAEFF3",
        grayDark: "#a0adba",
      },
      dropShadow: {
        custom: "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        sm: { max: "768px" },
        md: { max: "1280px" },
      },
      fontFamily: {
        zheldor: ["ALS-Zheldor", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },

  plugins: [],
};
