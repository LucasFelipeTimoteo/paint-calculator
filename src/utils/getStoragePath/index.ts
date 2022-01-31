import { storagePathOptions } from "../setLocalStorageData/types"

const getStoragePath = (storagePath: storagePathOptions) => {
  const defaultPathFragment = 'PAINT_CALCULATOR'
  let currentPath = ''

  if (storagePath === 'firstWallWidth') {
    const currentPathFrangment = '_FIRST_WALL_WIDTH'
    currentPath = defaultPathFragment + currentPathFrangment
  }

  if (storagePath === 'firstWallHeight') {
    const currentPathFrangment = '_FIRST_WALL_HEIGHT'
    currentPath = defaultPathFragment + currentPathFrangment
  }

  if (storagePath === 'secondWallWidth') {
    const currentPathFrangment = '_SECOND_WALL_WIDTH'
    currentPath = defaultPathFragment + currentPathFrangment
  }

  if (storagePath === 'secondWallHeight') {
    const currentPathFrangment = '_SECOND_WALL_HEIGHT'
    currentPath = defaultPathFragment + currentPathFrangment
  }

  if (storagePath === 'thirdWallWidth') {
    const currentPathFrangment = '_THIRD_WALL_WIDTH'
    currentPath = defaultPathFragment + currentPathFrangment
  }

  if (storagePath === 'thirdWallHeight') {
    const currentPathFrangment = '_THIRD_WALL_HEIGHT'
    currentPath = defaultPathFragment + currentPathFrangment
  }

  if (storagePath === 'fourthWallWidth') {
    const currentPathFrangment = '_FOURTH_WALL_WIDTH'
    currentPath = defaultPathFragment + currentPathFrangment
  }

  if (storagePath === 'fourthWallHeight') {
    const currentPathFrangment = '_FOURTH_WALL_HEIGHT'
    currentPath = defaultPathFragment + currentPathFrangment
  }

  if (storagePath === 'windowsNumber') {
    const currentPathFrangment = '_WINDOWS_NUMBER'
    currentPath = defaultPathFragment + currentPathFrangment
  }

  if (storagePath === 'doorsNumber') {
    const currentPathFrangment = '_DOORS_NUMBER'
    currentPath = defaultPathFragment + currentPathFrangment
  }

  return currentPath
}

export default getStoragePath