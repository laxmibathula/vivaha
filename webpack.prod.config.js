const path = require('path');
const webpack = require('webpack');
const combineLoaders = require('webpack-combine-loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'public'),    
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.es6', '.jsx']
  },
  optimization: {
    minimize: false
  }, 
  plugins: [
    new webpack.ProvidePlugin({
      "React": "react",
    }),
    new DuplicatePackageCheckerPlugin()  
  ], 
  module: {
    rules: [
      { 
        test: /\.jsx$|\.js$/,       
        exclude: /node_modules/,       
        use: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }      
    ]
  } 
};
