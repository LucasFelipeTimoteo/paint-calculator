import { Button } from '@material-ui/core'
import React, { useMemo } from 'react'
import { INextButtonProps } from './types'
import shouldBeDesabled from './utils/shouldBeDesabled'

export default function NextButton({
  handleNextFormStep,
  wallsMeasurementsErrorMessage,
  wallsAccessoriesErrorMessage,
  formStep
}: INextButtonProps) {
  const isWallsMeasurementsValid = useMemo(() => (
    !Boolean(wallsMeasurementsErrorMessage)
  ), [wallsMeasurementsErrorMessage])

  const isWallsAccessoriesValid = useMemo(() => (
    !Boolean(wallsAccessoriesErrorMessage)
  ), [wallsAccessoriesErrorMessage])

  const isDisabled = shouldBeDesabled(
    isWallsMeasurementsValid,
    isWallsAccessoriesValid,
    formStep
  )

  return (
    <Button
      variant='contained'
      color='primary'
      title='Click to go to next step of calculation'
      disabled={isDisabled}
      {
      ...(isWallsMeasurementsValid || isWallsAccessoriesValid) &&
      { onClick: handleNextFormStep }
      }
    >
      next
    </Button>
  )
}