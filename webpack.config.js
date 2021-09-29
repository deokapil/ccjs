const path = require("path");
module.exports = {
  entry: path.resolve(__dirname, "app/app.js"),
  output: {
    filename: "index_bundle.js",
    path: path.resolve(__dirname, "build"),
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode: "development",
};
