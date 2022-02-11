import { useEffect, useState } from "react"
import useWallsMeasurementsProvider from "../../../../../contexts/WallsMeasurements/providerHook/useWallsMeasurementsProvider"
import { WallsMeasurementsSchema } from "../../../../../schemas/WallsMeasurements"
import parseErrorMessage from "../../../utils/parseErrorMessage"
import { ICalculatorInputsErrorMessages } from "../../../utils/types/CalculatorInputsErrorMessages"

const useWallsMeasurementsErrors = () => {
  const {
    firstWallWidth,
    firstWallHeight,
    secondWallWidth,
    secondWallHeight,
    thirdWallWidth,
    thirdWallHeight,
    fourthWallWidth,
    fourthWallHeight
  } = useWallsMeasurementsProvider()

  const [
    wallsMeasurementsErrorMessage,
    setWallsMeasurementsErrorMessage
  ] = useState<ICalculatorInputsErrorMessages>(null)

  useEffect(() => {
    const handleWallsMeasurementsErrorMessage = (
      errorMessage: ICalculatorInputsErrorMessages
    ) => {
      setWallsMeasurementsErrorMessage(errorMessage)
    }

    const validateWallsMeasurements = async () => {
      try {
        await WallsMeasurementsSchema.validate({
          firstWallWidth,
          firstWallHeight,
          secondWallWidth,
          secondWallHeight,
          thirdWallWidth,
          thirdWallHeight,
          fourthWallWidth,
          fourthWallHeight
        })

        handleWallsMeasurementsErrorMessage(null)

      } catch (error) {
        // console.log(error) // <- to read raw Error messages

        if (!(error instanceof Error)) {
          handleWallsMeasurementsErrorMessage('Incorrect value found')
        } else {
          const parsedErrorMessage = parseErrorMessage(error)
          
          handleWallsMeasurementsErrorMessage(parsedErrorMessage)
        }
      }
    }

    validateWallsMeasurements()

  }, [
    firstWallHeight,
    firstWallWidth,
    fourthWallHeight,
    fourthWallWidth,
    secondWallHeight,
    secondWallWidth,
    thirdWallHeight,
    thirdWallWidth
  ])

  return wallsMeasurementsErrorMessage
}

export default useWallsMeasurementsErrors