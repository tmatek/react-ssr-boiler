const webpack = require('webpack')
const { merge } = require('webpack-merge')
const commonConfig = require('./client.common')

module.exports = merge(commonConfig, {
  mode: 'development',
  stats: 'none',
  entry: [
    'eventsource-polyfill', // IE 11 hot reloading
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/client.js',
  ],
  output: {
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
})
