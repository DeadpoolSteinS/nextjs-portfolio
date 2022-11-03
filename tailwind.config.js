/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "bottom-to-top": "BottomToTop 6s linear infinite 0s",
      },
      keyframes: {
        BottomToTop: {
          "0%, 80%, 100%": { opacity: "0" },
          "5%, 30%": { opacity: "0", transform: "translateY(5px)" },
          "10%, 25%": { opacity: "1", transform: "translateY(0px)" },
        },
      },
    },
    fontFamily: {
      mavens: ["Maven Pro", "sans-serif"],
    },
  },
  plugins: [],
};
