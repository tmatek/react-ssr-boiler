const webpack = require('webpack')
const PreactRefreshPlugin = require('@prefresh/webpack')
const { merge } = require('webpack-merge')
const commonConfig = require('./client.common')

module.exports = merge(commonConfig, {
  mode: 'development',
  stats: 'none',
  entry: [
    'preact/debug',
    'eventsource-polyfill', // IE 11 hot reloading
    'webpack-hot-middleware/client',
    './src/client.js',
  ],
  output: {
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new PreactRefreshPlugin(),
  ],
})
