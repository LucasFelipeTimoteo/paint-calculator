import { defaultDoorMeasurements, defaultWindowMeasurements } from "../../../../../../../utils/calculatorDefaults/windowsAndDoorsDefaultMeasurements"

const windowsAndDoorsTotalArea = (windowsNumber: string, doorsNumber: string) => {
  const windowsTotalArea = (
    Number(windowsNumber) *
    (defaultWindowMeasurements[0] * defaultWindowMeasurements[1])
  )

  const doorsTotalArea = (
    Number(doorsNumber) *
    (defaultDoorMeasurements[0] * defaultDoorMeasurements[1])
  )
  const wallsAndDoorsTotalArea = Number(
    (windowsTotalArea + doorsTotalArea).toFixed(1)
  )

  return wallsAndDoorsTotalArea
}

export default windowsAndDoorsTotalArea