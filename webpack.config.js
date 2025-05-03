module.exports = {
  mode: "development",
  entry: {
    main: "./src/main.js",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
