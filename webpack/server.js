const nodeExternals = require('webpack-node-externals')
const { merge } = require('webpack-merge')
const common = require('./common')

module.exports = merge(common, {
  mode: 'development', // Since we're not serving the code to clients, keep the code unoptimized
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/server.js',
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
})
