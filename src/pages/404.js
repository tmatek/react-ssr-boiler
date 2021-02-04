import React from 'react'
import { Link } from '@reach/router'

const NotFoundPage = () => (
  <>
    <h1>What you are looking for is not here</h1>
    <p>
      <Link to="/">Return home</Link>
    </p>
  </>
)

export default NotFoundPage
