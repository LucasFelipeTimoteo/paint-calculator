const shouldBeDesabled = (
  isWallsMeasurementsValid: boolean,
  isWallsAccessoriesValid: boolean,
  formStep: number
) => {
  const isWallsMeasurementsStepValid = !isWallsMeasurementsValid && formStep === 1
  const isWallsAccessoriesStepValid = !isWallsAccessoriesValid && formStep === 2
  const isDisabled = isWallsMeasurementsStepValid || isWallsAccessoriesStepValid

  return isDisabled
}

export default shouldBeDesabled