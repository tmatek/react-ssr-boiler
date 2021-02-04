const { merge } = require('webpack-merge')
const modules = require('./modules')
const clientPlugins = require('./client-plugins')

module.exports = merge(
  modules,
  merge(clientPlugins, {
    mode: 'production',
    entry: './src/client.js',
    output: {
      publicPath: '/',
      filename: '[name].js',
    },
    resolve: {
      modules: ['src', 'node_modules'],
      extensions: ['.js'],
    },
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all',
      },
    },
  })
)
