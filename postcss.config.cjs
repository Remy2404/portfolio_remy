module.exports = {
  plugins: [
    require("postcss-preset-env")({
      stage: 1,
      features: {
        "color-functional-notation": true,
      },
    }),
  ],
};
