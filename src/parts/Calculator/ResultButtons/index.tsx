import React from 'react'
import useCalculatorStyles from '../../../components/Calculator/styles'
import PrevButton from '../FormButtons/PrevButton'
import ResetButton from './ResetButton'
import { IResultButtons } from './types'

export default function ResultButtons({
  handlePrevFormStep,
  handleResetFormStep
}: IResultButtons) {
  const { calculatorButtonsGroup } = useCalculatorStyles()

  return (
    <div className={calculatorButtonsGroup}>
      <PrevButton handlePrevFormStep={handlePrevFormStep} withIcon/>
      <ResetButton handleResetFormStep={handleResetFormStep} />
    </div>
  )
}