import { Step, StepLabel, Stepper } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'
import { IFormStepperProps } from './types'

export default function FormStepper({formStep}: IFormStepperProps) {
  const { stepper } = useStyles()

  const stepsLabel = ['walls', 'windows and doors', 'result']

  return (
    <Stepper activeStep={formStep - 1} alternativeLabel className={stepper}>
      {
        stepsLabel.map(label => (
          <Step key={label} >
            <StepLabel>{label}</StepLabel>
          </Step>
        ))
      }
    </Stepper>
  )
}
