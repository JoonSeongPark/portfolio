const WebpackManifestPlugin = require("webpack-manifest-plugin");
const { HotModuleReplacementPlugin } = require("webpack");

const { merge } = require("webpack-merge");

const configCommon = require("./webpack.common");

const configProd = {
  mode: "production",
  devtool: false,
  plugins: [
    new WebpackManifestPlugin(),
    new HotModuleReplacementPlugin(),
  ],
};

module.exports = merge(configCommon, configProd);
