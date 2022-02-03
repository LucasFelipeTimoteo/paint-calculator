import { ICalculatorInputsErrorMessages } from "../../../hooks/calculator/utils/types/CalculatorInputsErrorMessages";
import { ReactStateSetter } from "../../../utils/types/ReactStateSetter";

export interface IFormButtonsProps {
  handlePrevFormStep: ReactStateSetter
  handleNextFormStep: ReactStateSetter
  formStep: number
  wallsMeasurementsErrorMessage: ICalculatorInputsErrorMessages
  wallsAccessoriesErrorMessage: ICalculatorInputsErrorMessages
}