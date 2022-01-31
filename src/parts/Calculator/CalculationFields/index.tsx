import React from 'react';
import DoorsAndWindowsNumbers from './DoorsAndWindowsNumbers';
import FormButtons from '../FormButtons';
import WallsMeasurement from './WallsMeasurements';
import useStyles from './styles';
import { ICalculationFieldsProps } from './types';

export default function CalculationFields({
  formStep,
  slideAnimationDirection,
  handlePrevFormStep,
  handleNextFormStep
}: ICalculationFieldsProps) {
  const { formWrapper, inputFields } = useStyles()

  return (
    <form className={formWrapper}>
      <div className={inputFields}>
        {
          formStep <= 1 &&
          <WallsMeasurement
            slideAnimationDirection={slideAnimationDirection}
          />
        }

        {
          formStep === 2 &&
          <DoorsAndWindowsNumbers
            slideAnimationDirection={slideAnimationDirection}
          />
        }
      </div>

      <FormButtons
        handlePrevFormStep={handlePrevFormStep}
        handleNextFormStep={handleNextFormStep}
        formStep={formStep}
      />
    </form>
  )
}
