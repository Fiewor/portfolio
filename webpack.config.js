const path = require("path");

module.exports = {
  module: {
    entry: "./src/App.js",
    output: {
      filename: "bundle.js",
      path: path.join(__dirname, "public"),
    },
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
};
