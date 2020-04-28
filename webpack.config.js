const path = require("path");
const src = path.resolve(__dirname, "src");

module.exports = {
  devtool: "inline-source-map",
  entry: path.resolve(src, "index.ts"),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "~": src,
    },
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "."),
  },
};
