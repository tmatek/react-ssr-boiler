import React from 'react'
import { hydrate } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'

/**
 * This is the client entrypoint. This gets included in the <script> tag in HTML
 * document. The React app is hydrated with the props set on the server.
 */
const serverData = window.__DATA__
delete window.__DATA__

const render = (Component) =>
  hydrate(
    <AppContainer>
      <Component serverData={serverData} />
    </AppContainer>,
    document.getElementById('app')
  )

render(App)

if (module.hot) {
  module.hot.accept('./app.js', () => {
    const NextApp = require('./app').default
    render(NextApp)
  })
}
