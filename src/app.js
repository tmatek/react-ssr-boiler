import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import { Router } from '@reach/router'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme'

import Layout from 'components/layout'
import IndexPage from './pages'
import FetchPage from './pages/fetch'
import NotFoundPage from './pages/404'

/* As an optimization, look into code-splitting pages: https://reach.tech/router/large-scale */
const App = ({ serverData }) => {
  const [useDarkTheme, setDarkTheme] = useState(false)

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
      <Layout>
        <Router>
          <IndexPage
            path="/"
            serverData={serverData}
            toggleTheme={() => setDarkTheme(!useDarkTheme)}
          />
          <FetchPage path="/fetch" serverData={serverData} />
          <NotFoundPage default />
        </Router>
      </Layout>
    </ThemeProvider>
  )
}

export default hot(App)
