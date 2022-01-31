import { Button } from '@material-ui/core'
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons'
import React from 'react'
import { IPrevButton } from './types'

export default function PrevButton({ handlePrevFormStep }: IPrevButton) {
  return (
    <Button
      variant='contained'
      startIcon={<ArrowBackIcon />}
      color='secondary'
      onClick={handlePrevFormStep}
    >
      Prev
    </Button>
  )
}
