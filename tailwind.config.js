module.exports = {
  content: ["./src/app/**/*.{html,ts,js}"], // purge css look for them to remove unused classes
  safelist: ["bg-blue-400", "bg-green-400", "bg-red-400"],
  theme: {
    extend: {},
  },
  plugins: [],
};
