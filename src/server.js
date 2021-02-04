import express from 'express'
import path from 'path'

const server = express()

// prevent serving this file to clients, since its compiled version is also in dist/ folder
server.get('/server.js', (req, res) => res.status(404).end())

// serve all static assets
server.use('/', express.static(path.join(__dirname)))

// handle all React routes
server.get('*', (req, res) => {
  console.log('hello from server')
  res
    .status(200)
    .send(
      '<!DOCTYPE html><html><head><script src="/bundle.js"></script></head><body></body></html>'
    )
})

export default server
