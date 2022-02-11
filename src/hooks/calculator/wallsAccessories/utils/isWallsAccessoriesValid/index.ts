const isWallsAccessoriesValid = (value: string) => {
  const isValidNumber = !Number.isNaN(Number(value))
  const notIncludeDecimals = !value.includes('.')
  const validCondition = isValidNumber && notIncludeDecimals

  return validCondition
}

export default isWallsAccessoriesValid