/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bred: "#a50000",
        dark: "#111111",
      },
      fontFamily: {
        nunito: ['"Nunito"'],
        body: ["Open Sans", "ui-sans-serif"],
      },
      backgroundImage: {
        bradley: "url('/public/img/bradley-hall-hero.jpg')",
      },
    },
  },
  plugins: [],
};
