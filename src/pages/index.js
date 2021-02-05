import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

const Button = styled.button`
  background: #1f6feb;
  color: #fff;
  border: 0;
  border-radius: 3rem;
  padding: 1rem 2rem;
  cursor: pointer;
`

const IndexPage = ({ serverData, toggleTheme }) => {
  const isServer = !!serverData

  // https://www.joshwcomeau.com/react/the-perils-of-rehydration/
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <>
      <h2>hello from {isServer || !mounted ? 'server' : 'client'}</h2>
      <p>
        <Link to="/fetch">Fetch some images</Link>
      </p>
      <Button type="button" onClick={toggleTheme}>
        Toggle dark/light theme
      </Button>
    </>
  )
}

export default IndexPage
