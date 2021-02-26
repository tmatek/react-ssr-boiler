import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Router } from '@reach/router'

import IndexPage from './pages'
import FetchPage from './pages/fetch'
import NotFoundPage from './pages/404'

/* As an optimization, look into code-splitting pages: https://reach.tech/router/large-scale */
const App = ({ serverData }) => (
  <Router>
    <IndexPage path="/" serverData={serverData} />
    <FetchPage path="/fetch" serverData={serverData} />
    <NotFoundPage default />
  </Router>
)

export default hot(App)
