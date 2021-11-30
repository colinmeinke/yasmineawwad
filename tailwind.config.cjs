const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Roboto Slab', 'serif'],
    },
    extend: {},
  },

  plugins: [],
};

module.exports = config;
