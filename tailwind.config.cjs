/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        gradient:
          "linear-gradient(to right, #04feff 5%, #1f97ff 20%, #902feb 32%, #f20c0c 68%, #e8d1d1 100%)",
      }),
    },
  },
  plugins: [],
};

// "linear-gradient(to right, #0fffff 15%, #00e4ff 15%, #1f96ff 30%, #7345ff 42%, #da00ff 100%)",

// CSS
