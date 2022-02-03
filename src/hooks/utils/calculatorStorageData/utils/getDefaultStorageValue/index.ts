import { storagePathOptions } from "../../../../../utils/setLocalStorageData/types"

const getDefaultStorageValue = (storagePath: storagePathOptions) => {
  const defaultStorageValue = (
    storagePath === 'doorsNumber' || storagePath === 'windowsNumber' ?
    '0'
    :
    ''
  )

  return defaultStorageValue
}

export default getDefaultStorageValue