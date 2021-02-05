import React from 'react'
import { Router } from '@reach/router'

import IndexPage from './pages'
import FetchPage from './pages/fetch'
import NotFoundPage from './pages/404'

const App = ({ serverData }) => (
  <Router>
    <IndexPage path="/" serverData={serverData} />
    <FetchPage path="/fetch" serverData={serverData} />
    <NotFoundPage default serverData={serverData} />
  </Router>
)

export default App
