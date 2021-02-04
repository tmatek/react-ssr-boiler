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
}
