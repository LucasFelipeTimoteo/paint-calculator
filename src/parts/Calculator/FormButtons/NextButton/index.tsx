import { Button } from '@material-ui/core'
import React from 'react'
import { INextButtonProps } from './types'

export default function NextButton({
  handleNextFormStep,
}: INextButtonProps) {

  return (
    <Button
      variant='contained'
      color='primary'
      title='Click to go to next step of calculation'
      onClick={handleNextFormStep}
    >
      next
    </Button>
  )
}
