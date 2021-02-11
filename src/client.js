import React from 'react'
import { hydrate } from 'react-dom'
import { configure as configureMobX } from 'mobx'

import App from './app'
import { RootStore } from './store'

// support IE 11
configureMobX({
  useProxies: 'never',
})

/**
 * This is the client entrypoint. This gets included in the <script> tag in HTML
 * document. The React app is hydrated with the props set on the server.
 */
const store = new RootStore(false, window.__DATA__)
delete window.__DATA__

hydrate(<App store={store} />, document.getElementById('app'))
