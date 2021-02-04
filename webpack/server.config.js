const nodeExternals = require('webpack-node-externals')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isProd ? 'production' : 'development',
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/server.js',
  output: {
    filename: isProd ? 'server.js' : 'dev-server.js',
    libraryTarget: 'commonjs2',
  },
}
