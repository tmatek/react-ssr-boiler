const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./common')

module.exports = merge(common, {
  mode: 'development',
  entry: ['./src/client.js', 'webpack-hot-middleware/client'],
  output: {
    publicPath: '/',
    filename: 'bundle.js',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js'],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
})
