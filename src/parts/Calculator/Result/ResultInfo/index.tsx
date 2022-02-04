import React from 'react'
import useWallsAccessoriesProvider from '../../../../contexts/WallsAccessories/providerHooks'
import useWallsMeasurementsProvider from '../../../../contexts/WallsMeasurements/providerHook/useWallsMeasurementsProvider'
import ResultInfoHeader from './ResultInfoHeader'
import ResultInfoRecommendation from './ResultInfoRecommendation'
import useStyles from './styles'
import calculateTotalPaintNeeded from './utils/calculateTotalPaintNeeded'
import calculateWallsPaintableArea from './utils/calculateWallsPaintableArea'
import filterRecommendationList from './utils/filterRecommendations'

export default function ResultInfo() {
  const { wallsMeasurementsArea } = useWallsMeasurementsProvider()
  const { windowsNumber, doorsNumber } = useWallsAccessoriesProvider()

  const wallsTotalPaintableArea = calculateWallsPaintableArea(
    wallsMeasurementsArea,
    Number(windowsNumber),
    Number(doorsNumber)
  )

  const totalPaintNeeded = calculateTotalPaintNeeded(wallsTotalPaintableArea)
  const paintCansRecommendation = filterRecommendationList(totalPaintNeeded)

  const { resultWrapper } = useStyles()

  return (
    <div className={resultWrapper}>
      <ResultInfoHeader totalPaintNeeded={totalPaintNeeded} />
      <ResultInfoRecommendation paintCansRecommendation={paintCansRecommendation}/>
    </div>
  )
}