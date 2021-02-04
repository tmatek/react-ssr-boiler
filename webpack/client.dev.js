const webpack = require('webpack')

module.exports = {
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
}
