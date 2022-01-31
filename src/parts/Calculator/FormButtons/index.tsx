import React from 'react'
import useCalculatorStyles from '../../../components/Calculator/styles'
import NextButton from './NextButton'
import PrevButton from './PrevButton'
import { IFormButtonsProps } from './types'

export default function FormButtons({
  handlePrevFormStep,
  handleNextFormStep,
  formStep
}: IFormButtonsProps) {
  const { calculatorButtonsGroup } = useCalculatorStyles()

  return (
    <div className={calculatorButtonsGroup}>
      {
        formStep > 1 &&
        <PrevButton handlePrevFormStep={handlePrevFormStep} />
      }

      {
        formStep < 3 &&
        <NextButton handleNextFormStep={handleNextFormStep} />
      }
    </div>
  )
}