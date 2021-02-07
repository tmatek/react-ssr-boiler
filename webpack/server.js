const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'development', // Since we're not serving the code to clients, keep the code unoptimized
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/server.js',
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
    libraryTarget: 'commonjs2',
  },
  node: {
    __filename: true,
    __dirname: true,
  },
}
