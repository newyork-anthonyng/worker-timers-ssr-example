const path = require("path");
const webpack = require("webpack");

module.exports = {
  context: path.join(__dirname, "routes"),

  entry: "./index.js",

  output: {
    path: path.join(__dirname, "dist"),
    filename: "indexRoute.js",
    libraryTarget: "commonjs2"
  },

  module: {
    rules: [
      {
        use: "babel-loader",
        exclude: /node_modules/,
        test: /\.js$/
      }
    ]
  },

  target: "node",

  plugins: [
    // On the server, replace any instance of "worker-timers" import with our own mock
    // https://webpack.js.org/plugins/normal-module-replacement-plugin/
    new webpack.NormalModuleReplacementPlugin(
      /worker-timers$/,
      "./mock-worker-timers.js"
    )
  ]
};
