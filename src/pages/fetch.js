import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Link } from '@reach/router'
import { useStore } from 'store'

const FetchPage = () => {
  const { imagesStore } = useStore()

  // client-side fetch after client-side navigation
  useEffect(() => {
    if (!imagesStore.images) {
      imagesStore.fetchImages()
    }
  }, [imagesStore.images])

  return (
    <div>
      <h2>API fetch test</h2>
      <p>
        <Link to="/">Go back</Link>
      </p>
      {imagesStore.loading && <p>Loading images ...</p>}
      {imagesStore.images &&
        imagesStore.images.map((img) => (
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

export default observer(FetchPage)
