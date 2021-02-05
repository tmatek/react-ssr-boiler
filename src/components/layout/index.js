import React from 'react'
import { GlobalStyles, PageContainer } from './styles'

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <PageContainer>{children}</PageContainer>
  </>
)

export default Layout
