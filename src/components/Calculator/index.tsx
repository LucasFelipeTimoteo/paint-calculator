import React from 'react'
import useFormStep from '../../hooks/calculator/useFormStep'
import useSlideAnimationDirection from '../../hooks/useSlideAnimationDirection'
import CalculatorSVGBackground from '../../parts/Calculator/CalculatorSVGBackground'
import FormStepper from '../../parts/Calculator/FormStepper'
import useStyles from './styles'

export default function Calculator() {
  const {
    setSlideAnimationDirectionToLeft,
    setSlideAnimationDirectionToRight
  } = useSlideAnimationDirection()

  const {
    formStep,
  } = useFormStep(
    setSlideAnimationDirectionToLeft,
    setSlideAnimationDirectionToRight
  )

  const {
    calculatorWrapper,
  } = useStyles()

  return (
    <section className={calculatorWrapper} id="calculator">
      <CalculatorSVGBackground />

      <FormStepper formStep={formStep} />

    </section>
  )
}