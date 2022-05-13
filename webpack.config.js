const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  //entry: ['./src/index.js', './src/index1.js'],
  entry: './src/index.js',
  mode:'development',
  module: {
    rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(jpg|png|svg|jpeg)$/,
          loader:'file-loader',
          options:{
            name: '[name].[ext]'
          },
        },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename:'index.html'
    }),
    /*new HtmlWebpackPlugin({
      template: 'src/index1.html',
      filename:'index1.html',
      chunks:[]
    }),*/
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new CopyWebpackPlugin({
      patterns:[
        { 
          from: './src/images',
          to: 'assets/images'
        }
      ]
    })
  ]
};