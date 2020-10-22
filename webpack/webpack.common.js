const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: {
    main: ["@babel/polyfill", path.join(__dirname, "..", "src", "index.js")],
  },
  output: {
    filename: "js/[name].[hash].js",
    chunkFilename: "js/[name].[contenthash:8].js",
    path: path.join(__dirname, "..", "build"),
    publicPath: "/",
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      name: "vendor",
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: "url-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "./static",
              limit: "10000",
            },
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: ["cache-loader", "babel-loader"],
          },
          {
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "./static",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "..", "public", "index.html"),
    }),
    new CleanWebpackPlugin(),
    new CompressionPlugin(),
  ],
};
