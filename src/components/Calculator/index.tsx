import React from 'react'
import CalculatorSVGBackground from '../../parts/Calculator/CalculatorSVGBackground'
import useStyles from './styles'

export default function Calculator() {
  const { calculatorWrapper } = useStyles()

  return (
    <section className={calculatorWrapper} id="calculator">
      <CalculatorSVGBackground />
    </section>
  )
}