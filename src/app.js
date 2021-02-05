import React from 'react'
import { Router } from '@reach/router'

import IndexPage from './pages'
import FetchPage from './pages/fetch'
import NotFoundPage from './pages/404'

/* As an optimization, look into code-splitting pages: https://reach.tech/router/large-scale */
const App = ({ serverData }) => (
  <Router>
    <IndexPage path="/" serverData={serverData} />
    <FetchPage path="/fetch" serverData={serverData} />
    <NotFoundPage default serverData={serverData} />
  </Router>
)

export default App
