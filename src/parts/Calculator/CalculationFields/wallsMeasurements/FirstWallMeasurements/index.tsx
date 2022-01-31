import { TextField } from '@material-ui/core'
import React from 'react'
import useWallsMeasurementsProvider from '../../../../../contexts/WallsMeasurements/providerHook/useWallsMeasurementsProvider'

export default function FirstWallMeasurements() {
  const {
    firstWallWidth,
    firstWallHeight,
    handleFirstWallHeight,
    handleFirstWallWidth
  } = useWallsMeasurementsProvider()
  
  return (
    <>
      <TextField
        variant='filled'
        label="1º wall width"
        title="Type the width number of the first wall"
        onChange={handleFirstWallWidth}
        value={firstWallWidth}
      />
      <TextField
        variant='filled'
        label="1º wall height"
        title="Type the height number of the first wall"
        onChange={handleFirstWallHeight}
        value={firstWallHeight}
      />
    </>
  )
}
