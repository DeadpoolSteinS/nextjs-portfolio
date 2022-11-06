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
      backgroundImage: {
        "portfolio-gradient":
          "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 33.33%, rgba(255,255,255,0.8) 66.66%, rgba(255,255,255,0) 99.99%)",
      },
    },
    fontFamily: {
      mavens: ["Maven Pro", "sans-serif"],
    },
    backgroundSize: {
      "size-300": "300% 300%",
    },
    backgroundPosition: {
      "position-100": "0% 100%",
      "position-0": "0% 0%",
    },
  },
  plugins: [],
};
