import React, { useState, useEffect, useCallback } from 'react'
import { Link } from '@reach/router'
import fetch from 'isomorphic-unfetch'

/**
 * When accessing the /fetch page directly, this component receives the images array
 * inside "serverData" prop. But when navigating to this page on the client-side, the
 * "serverData" prop is null, so we have to re-fetch the data.
 */
const FetchPage = ({ serverData }) => {
  const [images, setImages] = useState(serverData && serverData.images)
  const [loading, setLoading] = useState(false)

  // client-side fetch after client-side navigation
  useEffect(async () => {
    if (!images) {
      setLoading(true)
      const res = await fetch('/fetch.json')
      setImages(await res.json())
      setLoading(false)
    }
  }, [images])

  return (
    <div>
      <h2>API fetch test</h2>
      <p>
        <Link to="/">Go back</Link>
      </p>
      {loading && <p>Loading images ...</p>}
      {images &&
        images.map((img) => (
          <img
            key={img.id}
            src={`https://picsum.photos/id/${img.id}/200/200`}
            width={200}
            height={200}
            style={{ objectFit: 'cover' }}
          />
        ))}
    </div>
  )
}

export default FetchPage
