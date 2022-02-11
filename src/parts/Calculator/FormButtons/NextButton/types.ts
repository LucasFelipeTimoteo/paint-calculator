import { ICalculatorInputsErrorMessages } from "../../../../hooks/calculator/utils/types/CalculatorInputsErrorMessages";
import { ReactStateSetter } from "../../../../utils/types/ReactStateSetter";

export interface INextButtonProps {
  handleNextFormStep: ReactStateSetter
  wallsMeasurementsErrorMessage: ICalculatorInputsErrorMessages
  wallsAccessoriesErrorMessage: ICalculatorInputsErrorMessages
  formStep: number
}