import React from 'react'
import useCalculatorStyles from '../../../components/Calculator/styles'
import PrevButton from './PrevButton'
import ResetButton from './ResetButton'
import { IResultButtons } from './types'

export default function ResultButtons({
  handlePrevFormStep,
  handleResetFormStep
}: IResultButtons) {
  const { calculatorButtonsGroup } = useCalculatorStyles()

  return (
    <div className={calculatorButtonsGroup}>
      <PrevButton handlePrevFormStep={handlePrevFormStep} />
      <ResetButton handleResetFormStep={handleResetFormStep} />
    </div>
  )
}
