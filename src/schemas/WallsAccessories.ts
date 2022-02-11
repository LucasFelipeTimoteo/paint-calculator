import * as yup from 'yup'

export const WallsAccessories = (halfWallsTotalArea: number) => {
  const defaultMeasurementsValidator = (accessory: ('windows' | 'doors')) => (
    yup
      .number()
      .min(0)
      .required()
      .test(
        `walls ${accessory} validation`,
        `number of ${accessory} must be an integer`,
        (value) => {
          const isInteger = Number.isInteger(value)
          return isInteger
        }
      )
  )

  const defaultTotalAreaValidator = yup
    .number()
    .min(0)
    .max(halfWallsTotalArea)
    .required()

  const wallsAccessoriesSchema = yup.object({
    windowsNumber: defaultMeasurementsValidator('windows'),
    doorsNumber: defaultMeasurementsValidator('doors'),
    windowsAndDoorsArea: defaultTotalAreaValidator
  })

  return wallsAccessoriesSchema
}