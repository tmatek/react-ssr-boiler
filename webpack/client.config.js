const webpack = require('webpack')

const isProd = process.env.NODE_ENV === 'production'
const entries = isProd ? [] : ['webpack-hot-middleware/client']
const plugins = isProd ? [] : [new webpack.HotModuleReplacementPlugin()]

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: ['./src/client.js', ...entries],
  output: {
    publicPath: '/',
    filename: 'bundle.js',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js'],
  },
  plugins,
}
