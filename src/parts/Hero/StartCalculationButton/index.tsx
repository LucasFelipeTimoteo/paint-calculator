import { Button } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

export default function StartCalculationButton() {
  const {
    heroStartCalculationLinkWrapper,
    heroStartCalculationButton
  } = useStyles()

  return (
    <a href="#calculator" className={heroStartCalculationLinkWrapper}>
      <Button
        variant='contained'
        color='primary'
        className={heroStartCalculationButton}
        title='Click to go to calculator'
      >
        Calculate
      </Button>
    </a>
  )
}