const getHalfWallsArea = (wallsMeasurementsArea: number) => {
  const halfWallsArea = (wallsMeasurementsArea / 2).toFixed(1)
  const parsedHalfWallsArea = Number(halfWallsArea)

  return parsedHalfWallsArea
}

export default getHalfWallsArea