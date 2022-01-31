import { TextField } from '@material-ui/core'
import React from 'react'
import useWallsMeasurementsProvider from '../../../../../contexts/WallsMeasurements/providerHook/useWallsMeasurementsProvider'

export default function FourthWallMeasurement() {
  const {
    fourthWallHeight,
    fourthWallWidth,
    handleFourthWallHeight,
    handleFourthWallWidth
  } = useWallsMeasurementsProvider()

  return (
    <>
      <TextField
        variant='filled'
        label="4º wall width"
        title="Type the width number of the fourth wall"
        onChange={handleFourthWallWidth}
        value={fourthWallWidth}
      />
      <TextField
        variant='filled'
        label="4º wall height"
        title="Type the height number of the fourth wall"
        onChange={handleFourthWallHeight}
        value={fourthWallHeight}
      />
    </>
  )
}