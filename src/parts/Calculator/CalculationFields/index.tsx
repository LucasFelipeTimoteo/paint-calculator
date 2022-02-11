import React from 'react';
import useWallsMeasurementsProvider from '../../../contexts/WallsMeasurements/providerHook/useWallsMeasurementsProvider';
import useWallsAccessoriesErrors from '../../../hooks/calculator/wallsAccessories/errors/useWallsAccessoriesErrors';
import useWallsMeasurementErrors from '../../../hooks/calculator/wallsMeasurementGroup/errors/useWallsMeasurementErrors';
import CalculatorInputErrorMessage from '../CalculatorInputErrorMessage';
import FormButtons from '../FormButtons';
import DoorsAndWindowsNumbers from './DoorsAndWindowsNumbers';
import useStyles from './styles';
import { ICalculationFieldsProps } from './types';
import WallsMeasurementsGroup from './WallsMeasurementsGroup';

export default function CalculationFields({
  formStep,
  slideAnimationDirection,
  handlePrevFormStep,
  handleNextFormStep
}: ICalculationFieldsProps) {
  const { wallsMeasurementsArea } = useWallsMeasurementsProvider()
  const wallsAccessoriesErrorMessage = useWallsAccessoriesErrors(wallsMeasurementsArea)
  const wallsMeasurementsErrorMessage = useWallsMeasurementErrors()

  const { formWrapper, inputFields } = useStyles()

  return (
    <form className={formWrapper}>
      <div className={inputFields}>
        {
          formStep <= 1 &&
          <WallsMeasurementsGroup
            slideAnimationDirection={slideAnimationDirection}
          />
        }
        {
          (wallsMeasurementsErrorMessage && formStep <= 1) && (
            <CalculatorInputErrorMessage
              errorMessage={wallsMeasurementsErrorMessage}
            />
          )
        }

        {
          formStep === 2 &&
          <DoorsAndWindowsNumbers
            slideAnimationDirection={slideAnimationDirection}
          />
        }
        {
          (wallsAccessoriesErrorMessage && formStep === 2) && (
            <CalculatorInputErrorMessage
              errorMessage={wallsAccessoriesErrorMessage}
            />
          )
        }
      </div>

      <FormButtons
        handlePrevFormStep={handlePrevFormStep}
        handleNextFormStep={handleNextFormStep}
        wallsMeasurementsErrorMessage={wallsMeasurementsErrorMessage}
        wallsAccessoriesErrorMessage={wallsAccessoriesErrorMessage}
        formStep={formStep}
      />
    </form>
  )
}