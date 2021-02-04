const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
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
}
