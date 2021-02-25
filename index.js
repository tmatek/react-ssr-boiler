import server from './src/server'

const port = process.env.PORT || 80
server.listen(port, () => console.log('🚀 App is running'))
