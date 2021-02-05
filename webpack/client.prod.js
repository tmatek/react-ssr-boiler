const { merge } = require('webpack-merge')
const common = require('./common')

module.exports = merge(common, {
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
})
