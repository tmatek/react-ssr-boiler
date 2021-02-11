const webpack = require('webpack')
const PreactRefreshPlugin = require('@prefresh/webpack')
const { merge } = require('webpack-merge')
const common = require('./common')

module.exports = merge(common(true), {
  mode: 'development',
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
