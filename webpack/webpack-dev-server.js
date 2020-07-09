const webpack = require('webpack')
const express = require('express')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./dev.client.config')

const compiler = webpack(webpackConfig)

const app = express()

app.use(devMiddleware(compiler, {
  contentBase: 'http://localhost:3000',
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  headers: { 'Access-Control-Allow-Origin': '*' },
  writeToDisk: true
}))

app.use(hotMiddleware(compiler))

app.listen(3001, () => console.log('Example app listening on port 3001!'))
