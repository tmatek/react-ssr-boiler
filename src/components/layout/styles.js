import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body,
  #app {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.textColor};
    font-size: 1.6rem;
    transition: color 0.15s ease-in, background-color 0.15s ease-in;
  }

  a {
    color: ${(props) => props.theme.linkColor};
  }
`

export const PageContainer = styled.main`
  max-width: 144rem;
  margin: 0 auto;
  padding: 2rem;
`
