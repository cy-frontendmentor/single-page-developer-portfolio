/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      sl: "1024px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-spaceGrotesk)"],
      },
      colors: {
        black: "#151515",
        green: "#4EE1A0",
        "dark-grey": "#242424",
        grey: "#D9D9D9",
        white: "#FFF",
      },
    },
  },
  plugins: [],
};
