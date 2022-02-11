import { TextField } from '@material-ui/core'
import React from 'react'
import useWallsAccessoriesProvider from '../../../../../contexts/WallsAccessories/providerHooks'

export default function DoorsNumber() {
  const { doorsNumber, handleDoorsNumber } = useWallsAccessoriesProvider()

  return (
    <TextField
      variant='filled'
      label='Number of doors'
      title='Type the total number of doors'
      onChange={handleDoorsNumber}
      value={doorsNumber}
      inputProps={{ 'data-testid': 'doorsNumber' }}
    />
  )
}