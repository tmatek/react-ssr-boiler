const webpack = require('webpack')
const { merge } = require('webpack-merge')
const modules = require('./modules')
const clientPlugins = require('./client-plugins')

module.exports = merge(
  modules,
  merge(clientPlugins, {
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
)
