import { TextField } from '@material-ui/core'
import React from 'react'
import useWallsAccessoriesProvider from '../../../../../contexts/WallsAccessories/providerHooks'

export default function WindowsNumber() {
  const { windowsNumber, handleWindowsNumber } = useWallsAccessoriesProvider()

  return (
    <TextField
      variant='filled'
      label='Number of windows'
      title='Type the total number of windows'
      onChange={handleWindowsNumber}
      value={windowsNumber}
      inputProps={{'data-testid': 'windowsNumber'}}
    />
  )
}
