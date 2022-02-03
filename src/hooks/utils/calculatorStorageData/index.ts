import getStoragePath from "../../../utils/getStoragePath"
import { storagePathOptions } from "../../../utils/setLocalStorageData/types"
import getDefaultStorageValue from "./utils/getDefaultStorageValue"

const calculatorStorageData = (storagePath: storagePathOptions) => {
  let defaultStorageValue = getDefaultStorageValue(storagePath)

  const storagePathValue = getStoragePath(storagePath)
  const storageValue = window.localStorage.getItem(storagePathValue)
  if (!storageValue) {
    return defaultStorageValue
  }

  const parsedStorageValue = JSON.parse(storageValue)
  if(!Number(parsedStorageValue) || !(typeof parsedStorageValue === 'string')) {
    return defaultStorageValue
  }

  return parsedStorageValue
}

export default calculatorStorageData