import { makeAutoObservable } from 'mobx'
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
      this.images = await res.json()
    } catch (err) {
      console.error(err)
    }

    this.loading = false
  }
}

export default ImagesStore
