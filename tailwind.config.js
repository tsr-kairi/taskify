module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    fontFamily: {
      Neucha: ["Neucha", "cursive"],
    },

    extend: {
      boxShadow: {
        "3xl": "inset 0 0 5px black",
        "4xl": "0 0 10px 1000px rgba(0,0,0,0.5)",
        "5xl": "0 0 10px black",
        "6xl": "0 0 5px black",
      },
    },
  },
  plugins: [],
};
