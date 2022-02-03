import { useEffect, useState } from "react"
import useWallsMeasurementsProvider from "../../../../../contexts/WallsMeasurements/providerHook/useWallsMeasurementsProvider"
import { WallsMeasurementsSchema } from "../../../../../schemas/WallsMeasurements"
import parseCamelCaseString from "../../../../utils/parseCammelCaseString"
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
          const errorMessage = parseCamelCaseString(error.message);
          const match = errorMessage.match(/^.*?`number`/);
          const parsedMatch = match && parseCamelCaseString(match[0])
          const parsedErrorMessage = match ? parsedMatch : errorMessage

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