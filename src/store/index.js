import { createContext, useContext } from 'react'
import { makeAutoObservable } from 'mobx'
import ImagesStore from './images'

export class RootStore {
  constructor(isServer, initialState) {
    this.imagesStore = new ImagesStore(initialState)
    this.isServer = isServer
    makeAutoObservable(this)
  }
}

const StoreContext = createContext()

export const StoreProvider = StoreContext.Provider
export const useStore = () => useContext(StoreContext)
