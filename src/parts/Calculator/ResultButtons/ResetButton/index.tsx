import { Button } from '@material-ui/core'
import { RotateLeft as RotateLeftIcon } from '@material-ui/icons'
import React from 'react'
import useWallsMeasurementsProvider from '../../../../contexts/WallsMeasurements/providerHook/useWallsMeasurementsProvider'
import useWallsAccessoriesProvider from '../../../../contexts/WallsAccessories/providerHooks'
import { IResetButton } from './types'
import resetCalculator from './utils/resetCalculator'

export default function ResetButton({ handleResetFormStep }: IResetButton) {
  const {
    handleResetFirstWallHeight,
    handleResetFisrtWallWidth,
    handleResetFourthWallHeight,
    handleResetFourthWallWidth,
    handleResetSecondWallHeight,
    handleResetSecondWallWidth,
    handleResetThirdWallHeight,
    handleResetThirdWallWidth
  } = useWallsMeasurementsProvider()

  const {
    handleResetWindowsNumber,
    handleResetDoorsNumber
  } = useWallsAccessoriesProvider()
  
  const handleResetButtonClick = () => {
    resetCalculator(
      handleResetFirstWallHeight,
      handleResetFisrtWallWidth,
      handleResetFourthWallHeight,
      handleResetFourthWallWidth,
      handleResetSecondWallHeight,
      handleResetSecondWallWidth,
      handleResetThirdWallHeight,
      handleResetThirdWallWidth,
      handleResetWindowsNumber,
      handleResetDoorsNumber,
      handleResetFormStep
    )
  }

  return (
    <Button
      variant='contained'
      startIcon={<RotateLeftIcon />}
      color='primary'
      onClick={handleResetButtonClick}
      data-testid='resetButton'
    >
      reset
    </Button>
  )
}
