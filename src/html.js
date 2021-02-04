import React from 'react'
import { ServerLocation } from '@reach/router'
import App from './app'

const HtmlDoc = ({ url }) => (
  <html>
    <head>
      <title>Test app</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script type="text/javascript" src="/bundle.js" defer />
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
