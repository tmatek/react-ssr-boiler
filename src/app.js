import React from 'react'
import { Router } from '@reach/router'
import { StoreProvider } from './store'

import IndexPage from './pages'
import FetchPage from './pages/fetch'
import NotFoundPage from './pages/404'

/* As an optimization, look into code-splitting pages: https://reach.tech/router/large-scale */
const App = ({ store }) => (
  <StoreProvider value={store}>
    <Router>
      <IndexPage path="/" />
      <FetchPage path="/fetch" />
      <NotFoundPage default />
    </Router>
  </StoreProvider>
)

export default App
