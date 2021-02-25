const CompressionPlugin = require('compression-webpack-plugin')
const { merge } = require('webpack-merge')
const commonConfig = require('./client.common')

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: ['./src/client.js'], // needs to be an array for webpack-merge to work
  output: {
    publicPath: '/',
    filename: '[name].js',
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [new CompressionPlugin({ include: /\.js$/ })],
})
