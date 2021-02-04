import express from 'express'
import path from 'path'

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
  const html = renderToString(<HtmlDoc url={req.originalUrl} />)
  res.status(200).send(`<!DOCTYPE html>${html}`)
})

export default server
