import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'
import { useStore } from 'store'

const IndexPage = () => {
  const store = useStore()

  // https://www.joshwcomeau.com/react/the-perils-of-rehydration/
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <>
      <h2>hello from {store.isServer || !mounted ? 'server' : 'client'}</h2>
      <p>
        <Link to="/fetch">Fetch some images</Link>
      </p>
    </>
  )
}

export default IndexPage
