const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./common')

module.exports = merge(common, {
  mode: 'development',
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
