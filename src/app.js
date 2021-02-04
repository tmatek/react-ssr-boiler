import React from 'react'
import { Router } from '@reach/router'

import IndexPage from './pages'
import NotFoundPage from './pages/404'

const App = ({ isServer }) => (
  <Router>
    <IndexPage path="/" isServer={isServer} />
    <NotFoundPage default />
  </Router>
)

export default App
