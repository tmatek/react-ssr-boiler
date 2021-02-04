const path = require('path')
const webpack = require('webpack')
const express = require('express')
const serverConfig = require('./webpack/server.config')

const defaultPath = path.resolve(__dirname, 'dist')
const bundlePath = path.join(serverConfig.output.path || defaultPath, serverConfig.output.filename)

/* Hot-reloading of main server entrypoint, without restarting the server */
const devServer = express()
devServer.use('/', (req, res, next) => {
  delete require.cache[bundlePath]
  require(bundlePath).default(req, res, next)
})

const compiler = webpack(serverConfig)
const watcher = compiler.watch(
  {
    aggregateTimeout: 300,
  },
  () => null
)

process.on('exit', () => {
  watcher.close()
})

const port = process.env.PORT || 8000
devServer.listen(port, () => {
  console.log(`🚀 App is running at http://localhost:${port}`)
})
