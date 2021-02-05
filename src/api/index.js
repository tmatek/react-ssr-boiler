import express from 'express'
import fetch from 'isomorphic-unfetch'

const router = express.Router()

/**
 * This is just a regular backend function, so you can do pretty much anything
 * here, connect to the database, call a service, etc.
 */
const fetchImages = async () => {
  const res = await fetch('https://picsum.photos/v2/list')
  const data = await res.json()
  return data
}

/**
 * This endpoint is used for initial server-side fetching and delegates rendering
 * to React middleware.
 */
router.get('/fetch', async (req, res, next) => {
  req.serverData = { imagesStore: await fetchImages() }
  next() // delegates to React-rendering middleware
})

/**
 * This endpoint is used for client-side fetching and returns JSON only.
 */
router.get('/fetch.json', async (req, res) => {
  res.status(200).send(await fetchImages())
})

export default router
