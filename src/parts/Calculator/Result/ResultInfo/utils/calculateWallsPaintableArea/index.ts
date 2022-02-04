import { defaultDoorMeasurements, defaultWindowMeasurements } from '../../../../../../utils/calculatorDefaults/windowsAndDoorsDefaultMeasurements'

const calculateWallsPaintableArea = (
  walllsTotalArea: number,
  windowsNumber: number,
  doorsNumber: number
) => {
  const singleWindowArea = defaultWindowMeasurements[0] * defaultWindowMeasurements[1]
  const windowsTotalArea = singleWindowArea * windowsNumber

  const singleDoorArea = defaultDoorMeasurements[0] * defaultDoorMeasurements[1]
  const doorsTotalArea = singleDoorArea * doorsNumber

  const wallsTotalNonPaintableArea = windowsTotalArea + doorsTotalArea
  const wallsTotalPaintableArea = walllsTotalArea - wallsTotalNonPaintableArea

  return wallsTotalPaintableArea
}

export default calculateWallsPaintableArea