import React, { useState, useEffect } from 'react'

const IndexPage = ({ isServer }) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return <h2>hello from {isServer || !mounted ? 'server' : 'client'}</h2>
}

export default IndexPage
