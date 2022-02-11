import { Button } from '@material-ui/core'
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons'
import React from 'react'
import { IPrevButtonProps } from './types'

export default function PrevButton({
  handlePrevFormStep,
  withIcon
}: IPrevButtonProps) {
  return (
    <Button
      startIcon={withIcon ? <ArrowBackIcon /> : null}
      variant='contained'
      color='secondary'
      title='Click to go to prev step of calculation'
      onClick={handlePrevFormStep}
      data-testid='prevButton'
    >
      prev
    </Button>
  )
}
