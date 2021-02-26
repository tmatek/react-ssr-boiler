// serve GZIPed client bundles in production
const compressionMiddleware = (req, res, next) => {
  req.url = req.url + '.gz'
  res.set('Content-Encoding', 'gzip')
  res.set('Content-Type', 'text/javascript')
  next()
}

export default compressionMiddleware
