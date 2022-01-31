import { useEffect, useState } from "react"

const useWallsMeasurementsArea = (
  firstWallHeight: string,
  firstWallWidth: string,

  secondWallHeight: string,
  secondWallWidth: string,

  thirdWallHeight: string,
  thirdWallWidth: string,

  fourthWallHeight: string,
  fourthWallWidth: string
) => {
  const [wallsMeasurementsArea, setWallsMeasurementsArea] = useState(0)

  useEffect(() => {
    const handleWallsMeasurementsArea = () => {
      const wallsMeasurements = [
        [Number(firstWallHeight), Number(firstWallWidth)],
        [Number(secondWallHeight), Number(secondWallWidth)],
        [Number(thirdWallHeight), Number(thirdWallWidth)],
        [Number(fourthWallHeight), Number(fourthWallWidth)]
      ]

      const wallsTotalArea = wallsMeasurements.reduce((total, wallMeasurements) => {
        const currentWallArea = wallMeasurements[0] * wallMeasurements[1]
        const sumOfAreas = total + currentWallArea
        return sumOfAreas
      }, 0)

      const parsedwallsTotalArea = Number(wallsTotalArea.toFixed(1))

      setWallsMeasurementsArea(parsedwallsTotalArea)
    }

    handleWallsMeasurementsArea()
  }, [
    firstWallHeight,
    firstWallWidth,
    secondWallHeight,
    secondWallWidth,
    thirdWallHeight,
    thirdWallWidth,
    fourthWallHeight,
    fourthWallWidth,
  ])

  return wallsMeasurementsArea
}

export default useWallsMeasurementsArea