const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "dist/",
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, ""),
    index: "index.html",
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg)$/,
        use: ["url-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_moudles/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["transform-class-properties"],
          },
        },
      },
    ],
  },
};
