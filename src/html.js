import React from 'react'
import { ServerLocation } from '@reach/router'
import App from './app'

/**
 * Server-rendered HTML document. Receives the page URL to initialize the
 * router. Each Javascript bundle is appended to the head as a <script> element.
 * Here you would add any SSR APIs such as CSS-in-JS libraries or global store
 * providers.
 */
const HtmlDoc = ({ url, manifest }) => (
  <html>
    <head>
      <title>Test app</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {manifest.map((chunk) => (
        <script key={chunk} type="text/javascript" src={`/${chunk}`} defer />
      ))}
      {console.log(manifest)}
    </head>
    <body>
      <div id="app">
        <ServerLocation url={url}>
          <App isServer />
        </ServerLocation>
      </div>
    </body>
  </html>
)

export default HtmlDoc
