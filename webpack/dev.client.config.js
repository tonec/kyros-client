const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const LoadablePlugin = require('@loadable/webpack-plugin')
const baseConfig = require('./dev.base.config')
const config = require('../config')

const ROOT_DIRECTORY = path.resolve(__dirname, '../')
const DIST_DIRECTORY = path.resolve(ROOT_DIRECTORY, 'public/dist')

module.exports = merge(baseConfig, {
  entry: {
    main: [
      'webpack-hot-middleware/client?path=http://localhost:3001/__webpack_hmr',
      path.resolve(ROOT_DIRECTORY, 'src/client.tsx'),
    ],
  },

  output: {
    path: DIST_DIRECTORY,
    filename: '[name]-[hash].js',
    publicPath: config.paths.PUBLIC,
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
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: true,
    }),

    new LoadablePlugin(),
  ],
})
