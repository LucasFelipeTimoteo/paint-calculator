import { TextField } from '@material-ui/core'
import React from 'react'
import useWallsMeasurementsProvider from '../../../../../contexts/WallsMeasurements/providerHook/useWallsMeasurementsProvider'

export default function SecondWallMeasurement() {
  const {
    secondWallWidth,
    secondWallHeight,
    handleSecondWallHeight,
    handleSecondWallWidth
  } = useWallsMeasurementsProvider()

  return (
    <>
      <TextField
        variant='filled'
        label="2º wall width"
        title="Type the width number of the second wall"
        onChange={handleSecondWallWidth}
        value={secondWallWidth}
        inputProps={{'data-testid': 'wallMeasurementsInput'}}
      />
      <TextField
        variant='filled'
        label="2º wall height"
        title="Type the height number of the second wall"
        onChange={handleSecondWallHeight}
        value={secondWallHeight}
        inputProps={{'data-testid': 'wallMeasurementsInput'}}
      />
    </>
  )
}
