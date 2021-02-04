import express from 'express'
import path from 'path'
import fs from 'fs'

import React from 'react'
import { renderToString } from 'react-dom/server'
import HtmlDoc from './html'

const server = express()

// prevent serving this file to clients, since its compiled version is also in dist/ folder
server.get('/server.js', (req, res) => res.status(404).end())

// serve all static assets
server.use('/', express.static(path.join(__dirname)))

// handle all React routes
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
      manifest={Object.values(manifest).filter((f) => f.endsWith('.js'))}
    />
  )
  res.status(200).send(`<!DOCTYPE html>${html}`)
})

export default server
