const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const LoadablePlugin = require('@loadable/webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const baseConfig = require('./dev.base.config')
const config = require('../config')

const ROOT_DIRECTORY = path.resolve(__dirname, '../')
const DIST_DIRECTORY = path.resolve(ROOT_DIRECTORY, 'public/dist')
const SRC_DIRECTORY = path.resolve(ROOT_DIRECTORY, 'src')

module.exports = merge(baseConfig, {
  entry: {
    main: [
      path.resolve(ROOT_DIRECTORY, 'src/client.js')
    ]
  },

  output: {
    path: DIST_DIRECTORY,
    filename: '[name]-[hash].js',
    publicPath: config.paths.PUBLIC
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
              publicPath: config.paths.PUBLIC
            },
          },
        ],
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false
    }),

    new LoadablePlugin(),

    new WorkboxPlugin.InjectManifest({
      swDest: '../sw.js',
      swSrc: path.resolve(SRC_DIRECTORY, 'sw-template.js'),
      include: ['/', /\.js$/, /\.css$/, /\.svg$/],
      templatedURLs: {
        '/': new Date().toString(),
      }
    }),
  ]
})
