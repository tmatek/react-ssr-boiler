import express from 'express'
import webpack from 'webpack'
import devMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'
import clientConfig from './webpack/client.dev'
import app from './src/server'

const devServer = express()

/* Hot-reloading of client entrypoint */
const clientCompiler = webpack(clientConfig)
devServer.use(devMiddleware(clientCompiler))
devServer.use(hotMiddleware(clientCompiler))

/* hot-reloading of server entrypoint */
devServer.use((req, res, next) => app(req, res, next))
if (module.hot) {
  module.hot.accept('./src/server')
}

const port = process.env.PORT || 8000
devServer.listen(port, () => {
  console.log(`🚀 App is running at http://localhost:${port}`)
})
