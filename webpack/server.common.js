module.exports = {
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: { node: 'current' } }],
              '@babel/preset-react',
            ],
            plugins: ['babel-plugin-styled-components'],
          },
        },
      },
    ],
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js'],
  },
  output: {
    filename: 'server.js',
  },
  node: {
    __filename: true,
    __dirname: true,
  },
}
