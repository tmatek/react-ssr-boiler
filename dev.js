const path = require('path')
const express = require('express')
const webpack = require('webpack')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const serverConfig = require('./webpack/server')
const clientConfig = require('./webpack/client.dev')

const defaultPath = path.resolve(__dirname, 'dist')
const bundlePath = path.join(serverConfig.output.path || defaultPath, serverConfig.output.filename)

const devServer = express()

/* Hot-reloading of client entrypoint */
const clientCompiler = webpack(clientConfig)
devServer.use(devMiddleware(clientCompiler))
devServer.use(hotMiddleware(clientCompiler))

/* Hot-reloading of main server entrypoint, without restarting the server */
devServer.use('/', (req, res, next) => {
  delete require.cache[bundlePath]
  require(bundlePath).default(req, res, next)
})

const serverCompiler = webpack(serverConfig)
const watcher = serverCompiler.watch(
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
