const nodeExternals = require('webpack-node-externals')
const { merge } = require('webpack-merge')
const commonConfig = require('./server.common')

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: ['./index.js'],
  externals: [nodeExternals()],
})
