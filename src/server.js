import express from 'express'
import path from 'path'
import api from './api'
import { compressionMiddleware, reactSSRMiddleware } from './middleware'

/**
 * The server serves static assets, the API endpoints and the main React app.
 * The API by default generates server-side props and passes them to the
 * middleware that renders the React app on the server, with the generated
 * props. The API may choose to just output JSON instead (by not calling next
 * middleware) and therefore just become a regular endpoint.
 */
const server = express()

// prevent serving this file to clients, since its compiled version is also in dist/ folder
server.get('/server.js', (req, res) => res.status(404).end())

server.use('*.js', compressionMiddleware)
server.use(express.static(path.resolve('./dist')))
server.use(api)

// the React-rendering middleware
server.use(reactSSRMiddleware)

export default server
