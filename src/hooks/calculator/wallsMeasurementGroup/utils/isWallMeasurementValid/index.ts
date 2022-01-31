const isWallMeasurementValid = (value: string) => {
  const isBetween1And15 = Number(value) >= 1 && Number(value) <= 15
  const isValidNumber = !Number.isNaN(Number(value))
  const isAmptyField = value === ''

  const validFieldCondition = (isBetween1And15 && isValidNumber) || isAmptyField

  return validFieldCondition
}

export default isWallMeasurementValid