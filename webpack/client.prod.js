const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./common')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  entry: './src/client.js',
  output: {
    publicPath: '/',
    filename: 'bundle.js',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '..', 'static'),
        },
      ],
    }),
  ],
})
