import fs from 'fs'
import path from 'path'

import React from 'react'
import { renderToString } from 'react-dom/server'
import HtmlDoc from '../html'

const reactSSRMiddleware = (req, res) => {
  // read the client-side bundles that need to be added as scripts
  const manifest = JSON.parse(
    fs.readFileSync(path.resolve('./dist/manifest.json'), {
      encoding: 'utf8',
    })
  )

  const clientBundles = Object.values(manifest).filter((f) =>
    /^[A-Za-z0-9]+\.js$/.test(f)
  )

  const html = renderToString(
    <HtmlDoc
      url={req.originalUrl}
      serverData={req.serverData}
      clientBundles={clientBundles}
    />
  )
  res.status(200).send(`<!DOCTYPE html>${html}`)
}

export default reactSSRMiddleware
