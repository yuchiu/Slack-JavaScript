const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: path.join(__dirname, "src", "public", "components", "index.js")
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].bundle.js",
    sourceMapFilename: "[name].bundle.map"
  },
  mode: "development",
  devtool: "#source-map",
  plugins:
    process.env.NODE_ENV === "production"
      ? [
          new webpack.DefinePlugin({
            "process.env": {
              NODE_ENV: JSON.stringify("production")
            }
          }),
          new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "views", "index.html")
          }),
          new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
              warnings: true,
              drop_console: true
            }
          })
        ]
      : [
          new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "views", "index.html")
          }),
          new webpack.HotModuleReplacementPlugin()
        ]
};
