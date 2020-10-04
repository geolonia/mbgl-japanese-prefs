const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config.js')
const path = require("path");

module.exports = {
  ...config,
  entry: "./example/app.js",
  output: {
    path: path.join(__dirname, "docs"),
    filename: "app.[contenthash].js",
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname, "example", "index.html"),
  })],
  devServer: {
    open: true,
    // openPage: "docs/index.html",
    contentBase: __dirname,
    watchContentBase: true,
    host: "localhost",
    port: 3000,
    disableHostCheck: true,
  },
}
