const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./dev.base.config.js')
const config = require('../config')

const ROOT_DIRECTORY = path.resolve(__dirname, '../')

module.exports = merge(baseConfig, {
  target: 'node',

  node: {
    __dirname: false,
  },

  entry: './src/server.ts',

  output: {
    filename: 'bundle.js',
    path: path.resolve(ROOT_DIRECTORY, 'build'),
  },

  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name]-[hash].[ext]',
              useRelativePath: false,
              publicPath: config.paths.PUBLIC,
              emitFile: false,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__: false,
      __SERVER__: true,
      __DEVELOPMENT__: true,
    }),
  ],
})
