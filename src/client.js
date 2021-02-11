import React from 'react'
import { hydrate } from 'react-dom'
import App from './app'

/**
 * This is the client entrypoint. This gets included in the <script> tag in HTML
 * document. The React app is hydrated with the props set on the server.
 */
const serverData = window.__DATA__
delete window.__DATA__

hydrate(<App serverData={serverData} />, document.getElementById('app'))
