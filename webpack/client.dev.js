const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: ['./src/client.js', 'webpack-hot-middleware/client'],
  output: {
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js'],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
}
