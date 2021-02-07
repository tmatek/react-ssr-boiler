import React from 'react'
import { ServerLocation } from '@reach/router'
import { enableStaticRendering } from 'mobx-react-lite'

import App from './app'
import { RootStore } from './store'

// disable MobX observers on server
enableStaticRendering(true)

/**
 * Server-rendered HTML document. Receives the page URL to initialize the router
 * and the initial server data to re-hydrate the pages on the client. Each Javascript
 * bundle is appended to the head as a <script> element. Here you would add any
 * SSR APIs such as CSS-in-JS libraries or global store providers.
 */
const HtmlDoc = ({ url, serverData, manifest }) => (
  <html>
    <head>
      <title>Test app</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script
        defer
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `window.__DATA__ = ${JSON.stringify(serverData)}`,
        }}
      />
      {manifest.map((chunk) => (
        <script key={chunk} type="text/javascript" src={`/${chunk}`} defer />
      ))}
    </head>
    <body>
      <div id="app">
        <ServerLocation url={url}>
          <App store={new RootStore(true, serverData)} />
        </ServerLocation>
      </div>
    </body>
  </html>
)

export default HtmlDoc
