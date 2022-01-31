import { useContext } from "react"
import { WallsMeasurementContext } from "../.."

const useWallsMeasurementsProvider = () => {
  const {
    firstWallWidth,
    handleFirstWallWidth,
    firstWallHeight,
    handleFirstWallHeight,
    handleResetFisrtWallWidth,
    handleResetFirstWallHeight,

    secondWallWidth,
    handleSecondWallWidth,
    secondWallHeight,
    handleSecondWallHeight,
    handleResetSecondWallHeight,
    handleResetSecondWallWidth,
    
    thirdWallWidth,
    handleThirdWallWidth,
    thirdWallHeight,
    handleThirdWallHeight,
    handleResetThirdWallHeight,
    handleResetThirdWallWidth,

    fourthWallWidth,
    handleFourthWallWidth,
    fourthWallHeight,
    handleFourthWallHeight,
    handleResetFourthWallHeight,
    handleResetFourthWallWidth,

    wallsMeasurementsArea
  } = useContext(WallsMeasurementContext)

  return {
    firstWallWidth,
    handleFirstWallWidth,
    firstWallHeight,
    handleFirstWallHeight,
    handleResetFisrtWallWidth,
    handleResetFirstWallHeight,

    secondWallWidth,
    handleSecondWallWidth,
    secondWallHeight,
    handleSecondWallHeight,
    handleResetSecondWallHeight,
    handleResetSecondWallWidth,
    
    thirdWallWidth,
    handleThirdWallWidth,
    thirdWallHeight,
    handleThirdWallHeight,
    handleResetThirdWallHeight,
    handleResetThirdWallWidth,

    fourthWallWidth,
    handleFourthWallWidth,
    fourthWallHeight,
    handleFourthWallHeight,
    handleResetFourthWallHeight,
    handleResetFourthWallWidth,

    wallsMeasurementsArea
  }
}

export default useWallsMeasurementsProvider