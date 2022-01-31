import { Button } from '@material-ui/core'
import React from 'react'
import { IPrevButtonProps } from './types'

export default function PrevButton({ 
  handlePrevFormStep
 }: IPrevButtonProps) {
  return (
    <Button
      variant='contained'
      color='secondary'
      title='Click to go to prev step of calculation'
      onClick={handlePrevFormStep}
    >
      prev
    </Button>
  )
}
