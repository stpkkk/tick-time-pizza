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
        black: "#1e1e1e",
        button: "#ffd600",
      },
      screens: {
        sm: { max: "768px" },
        md: { max: "1250px" },
      },
      fontFamily: {
        zheldor: ["ALS-Zheldor", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },

  plugins: [],
};
