const path = require("path");
const webpack = require("webpack");
const combineLoaders = require("webpack-combine-loaders");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   devtool: "eval",
   mode: "development",
   entry: "./src/index.js",
   output: {
      filename: "bundle.min.js",
      path: path.resolve(__dirname, "public"),
      publicPath: "/",
   },
   devServer: {
      historyApiFallback: true,
      contentBase: "./public",
      hot: true,
   },
   node: {
      fs: "empty",
      net: "empty",
   },
   watch: true,
   resolve: {
      extensions: [".js", ".es6", ".jsx"],
   },
   plugins: [
      new webpack.ProvidePlugin({
         React: "react",
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new HtmlWebpackPlugin({
         inject: true,
         template: "public/index.html",
      }),
   ],
   module: {
      rules: [
         {
            test: /\.jsx$|\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"],
         },
         {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"],
         },
      ],
   },
};
