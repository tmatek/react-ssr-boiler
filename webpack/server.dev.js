const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const { spawn } = require('child_process')
const { merge } = require('webpack-merge')
const commonConfig = require('./server.common')

// runs the development server after compiling server code for the first time
class RunServerPlugin {
  constructor() {
    this.serverRunning = false
  }

  apply(compiler) {
    compiler.hooks.afterEmit.tap('AfterEmitPlugin', () => {
      if (this.serverRunning) return
      this.serverRunning = true
      spawn('node', ['--inspect', path.resolve('./dist/server.js')], {
        stdio: [process.stdin, process.stdout, process.stderr],
      })
    })
  }
}

module.exports = merge(commonConfig, {
  mode: 'development',
  stats: 'minimal',
  watch: true,
  externals: [nodeExternals({ allowlist: ['webpack/hot/poll?1000'] })],
  entry: ['webpack/hot/poll?1000', './dev.js'],
  plugins: [new RunServerPlugin(), new webpack.HotModuleReplacementPlugin()],
})
