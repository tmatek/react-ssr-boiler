const path = require('path')
const serverConfig = require('./webpack/server')

const defaultPath = path.resolve(__dirname, 'dist')
const bundlePath = path.join(serverConfig.output.path || defaultPath, serverConfig.output.filename)
const { default: server } = require(bundlePath)

const port = process.env.PORT || 80
server.listen(port, () => console.log('🚀 App is running'))
