const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./common')

module.exports = merge(common, {
  mode: 'development',
  entry: [
    './src/client.js',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
  ],
  output: {
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
})
