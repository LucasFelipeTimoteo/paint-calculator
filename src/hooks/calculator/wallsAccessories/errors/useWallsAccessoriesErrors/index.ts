import { useEffect, useState } from "react"
import useWallsAccessoriesProvider from "../../../../../contexts/WallsAccessories/providerHooks"
import { WallsAccessories } from "../../../../../schemas/WallsAccessories"
import parseErrorMessage from "../../../utils/parseErrorMessage"
import { ICalculatorInputsErrorMessages } from "../../../utils/types/CalculatorInputsErrorMessages"
import getHalfWallsArea from "./utils/getHalfWallsArea"
import windowsAndDoorsTotalArea from "./utils/windowsAndDoorsTotalArea"

const useWallsAccessoriesErrors = (wallsMeasurementsArea: number) => {
  const { doorsNumber, windowsNumber } = useWallsAccessoriesProvider()
  const windowsAndDoorsArea = windowsAndDoorsTotalArea(windowsNumber, doorsNumber)
  const halfWallsTotalArea = getHalfWallsArea(wallsMeasurementsArea)

  const [
    wallsAccessoriesErrorMessage,
    setWallsAccessoriesErrorMessage
  ] = useState<ICalculatorInputsErrorMessages>(null)

  useEffect(() => {
    const handleWallsAccessoriesErrorMessage = (errorMessage: ICalculatorInputsErrorMessages) => {
      setWallsAccessoriesErrorMessage(errorMessage)
    }

    const validateWallsAccessoriess = async () => {
      try {
        await WallsAccessories(halfWallsTotalArea).validate({
          doorsNumber,
          windowsNumber,
          windowsAndDoorsArea
        })

        handleWallsAccessoriesErrorMessage(null)

      } catch (error) {
        if (!(error instanceof Error)) {
          handleWallsAccessoriesErrorMessage('Incorrect value found')
        } else {
          const parsedErrorMessage = parseErrorMessage(error)

          handleWallsAccessoriesErrorMessage(parsedErrorMessage)
        }
      }
    }

    validateWallsAccessoriess()

  }, [
    doorsNumber,
    halfWallsTotalArea,
    windowsAndDoorsArea,
    windowsNumber
  ])

  return wallsAccessoriesErrorMessage
}

export default useWallsAccessoriesErrors