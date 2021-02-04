import React from 'react'
import App from './app'

const HtmlDoc = ({ url }) => (
  <html>
    <head>
      <title>Test app</title>
      <script type="text/javascript" src="/bundle.js" defer />
    </head>
    <body>
      <div id="app">
        <App isServer />
      </div>
    </body>
  </html>
)

export default HtmlDoc
