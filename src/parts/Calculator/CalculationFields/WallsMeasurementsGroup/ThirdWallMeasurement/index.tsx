import { TextField } from '@material-ui/core'
import React from 'react'
import useWallsMeasurementsProvider from '../../../../../contexts/WallsMeasurements/providerHook/useWallsMeasurementsProvider'

export default function ThirdWallMeasurement() {
  const {
    thirdWallHeight,
    thirdWallWidth,
    handleThirdWallHeight,
    handleThirdWallWidth
  } = useWallsMeasurementsProvider()

  return (
    <>
      <TextField
        variant='filled'
        label="3º wall width"
        title="Type the width number of the third wall"
        onChange={handleThirdWallWidth}
        value={thirdWallWidth}
      />
      <TextField
        variant='filled'
        label="3º wall height"
        title="Type the height number of the third wall"
        onChange={handleThirdWallHeight}
        value={thirdWallHeight}
      />
    </>
  )
}