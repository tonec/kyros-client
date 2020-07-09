const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('../config')

module.exports = {
  mode: 'development',

  context: path.resolve(__dirname, '..'),

  resolve: {
    modules: [
      'src',
      'node_modules'
    ],
    extensions: ['.json', '.js'],
    alias: { 'react-dom': '@hot-loader/react-dom' }
  },

  devtool: 'inline-source-map',

  stats: {
    warningsFilter: warning => {
      let block = false

      const blockedFiles = [
        'node_modules/express/lib/view.js',
        'node_modules/require_optional/index.js'
      ]

      blockedFiles.forEach(modulePath => {
        if (RegExp(modulePath).test(warning) === true) {
          block = true
        }
      })

      return block
    }
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: config.paths.PUBLIC,
              hmr: true
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        }
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),

    new webpack.HotModuleReplacementPlugin(),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false
    })
  ]
}
