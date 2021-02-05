import express from 'express'
import path from 'path'
import fs from 'fs'
import api from './api'

import React from 'react'
import { renderToString } from 'react-dom/server'
import HtmlDoc from './html'

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

server.use('/', express.static(path.join(__dirname)))
server.use('/', api)

// the React-rendering middleware
server.get('*', (req, res) => {
  // read the client-side bundles that need to be added as scripts
  const manifest = JSON.parse(
    fs.readFileSync(path.join(__dirname, './manifest.json'), {
      encoding: 'utf8',
    })
  )

  const html = renderToString(
    <HtmlDoc
      url={req.originalUrl}
      serverData={req.serverData}
      manifest={Object.values(manifest).filter((f) => f.endsWith('.js'))}
    />
  )
  res.status(200).send(`<!DOCTYPE html>${html}`)
})

export default server
