import { makeAutoObservable, runInAction } from 'mobx'
import fetch from 'isomorphic-unfetch'

class ImagesStore {
  constructor(initialState = {}) {
    this.loading = false
    this.images = initialState.imagesStore
    makeAutoObservable(this)
  }

  async fetchImages() {
    this.loading = true
    try {
      const res = await fetch('/fetch.json')
      const images = await res.json()
      runInAction(() => (this.images = images))
    } catch (err) {
      console.error(err)
    }

    runInAction(() => (this.loading = false))
  }
}

export default ImagesStore
