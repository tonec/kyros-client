/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('../config')

module.exports = {
  mode: 'development',

  context: path.resolve(__dirname, '..'),

  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.json', '.js', '.ts', '.tsx'],
  },

  devtool: 'source-map',


  ignoreWarnings: [
    {
      message: /require\.extensions/
    }
  ],
  

  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: config.paths.PUBLIC,
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),

    new webpack.HotModuleReplacementPlugin(),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),

    new webpack.ContextReplacementPlugin(
      /express\/lib/, 
      path.resolve('node_modules'),
      { 'ejs': 'ejs' }                                 
    )           
  ],
}
