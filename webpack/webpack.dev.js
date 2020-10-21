const { merge } = require("webpack-merge");

const configCommon = require("./webpack.common");

const configDev = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    publicPath: "/",
    overlay: true,
    port: 9000,
    historyApiFallback: true,
    open: true,
  },
};

module.exports = merge(configCommon, configDev);
