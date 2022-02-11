import getStoragePath from "../getStoragePath"
import { storagePathOptions } from "./types"

const setLocalStorageData = (
  storagePath: storagePathOptions,
  value: string
) => {
  const currentStoragePath = getStoragePath(storagePath)

  if (currentStoragePath) {
    window.localStorage.setItem(
      currentStoragePath,
      JSON.stringify(value)
    )
  }
}

export default setLocalStorageData