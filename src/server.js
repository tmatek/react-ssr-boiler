import express from 'express'
import path from 'path'

const server = express()

server.get('*', (req, res) => {
  console.log('hello from server')
  res
    .status(200)
    .send(
      '<!DOCTYPE html><html><head><script src="/bundle.js"></script></head><body></body></html>'
    )
})

export default server
