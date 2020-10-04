const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "mbgl-japanese-pref.js",
  },
  devtool: 'source-map'
};
