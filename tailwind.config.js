module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
      colors: {
        dark: "#111517",
        lightWhite: "rgba(255,255,255,.1)",
        lightDark: "rgba(0,0,0,.1)",
      },
      animation: {
        "slide-in": "slide-in 1s ease-out",
      },
      height: {
        "2xl": "35rem",
      },
    },
  },
};
