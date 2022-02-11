import { useContext } from "react"
import { WallsAccessoriesContext } from ".."

const useWallsAccessoriesProvider = () => {
  const {
    doorsNumber,
    handleDoorsNumber,
    handleResetDoorsNumber,
    windowsNumber,
    handleWindowsNumber,
    handleResetWindowsNumber
  } = useContext(WallsAccessoriesContext)

  return {
    doorsNumber,
    handleDoorsNumber,
    handleResetDoorsNumber,
    windowsNumber,
    handleWindowsNumber,
    handleResetWindowsNumber
  }
}

export default useWallsAccessoriesProvider