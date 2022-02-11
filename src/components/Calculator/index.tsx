import React from 'react'
import WallsAccessoriesProvider from '../../contexts/WallsAccessories'
import WallsMeasurementsProvider from '../../contexts/WallsMeasurements'
import useFormStep from '../../hooks/calculator/useFormStep'
import useSlideAnimationDirection from '../../hooks/useSlideAnimationDirection'
import CalculationFields from '../../parts/Calculator/CalculationFields'
import CalculatorSVGBackground from '../../parts/Calculator/CalculatorSVGBackground'
import FormStepper from '../../parts/Calculator/FormStepper'
import Result from '../../parts/Calculator/Result'
import useStyles from './styles'

export default function Calculator() {
  const {
    slideAnimationDirection,
    setSlideAnimationDirectionToLeft,
    setSlideAnimationDirectionToRight
  } = useSlideAnimationDirection()

  const {
    formStep,
    handlePrevFormStep,
    handleNextFormStep,
    handleResetFormStep
  } = useFormStep(
    setSlideAnimationDirectionToLeft,
    setSlideAnimationDirectionToRight
  )

  const {
    calculatorWrapper,
  } = useStyles()

  return (
    <WallsAccessoriesProvider>
      <WallsMeasurementsProvider>
        <section className={calculatorWrapper} id="calculator">
          <CalculatorSVGBackground />

          <FormStepper formStep={formStep} />
          {
            formStep === 3
              ?
              (
                <Result
                  handlePrevFormStep={handlePrevFormStep}
                  handleResetFormStep={handleResetFormStep}
                />
              )
              :
              (
                <CalculationFields
                  formStep={formStep}
                  slideAnimationDirection={slideAnimationDirection}
                  handleNextFormStep={handleNextFormStep}
                  handlePrevFormStep={handlePrevFormStep}
                />
              )
          }
        </section>
      </WallsMeasurementsProvider >
    </WallsAccessoriesProvider>

  )
}