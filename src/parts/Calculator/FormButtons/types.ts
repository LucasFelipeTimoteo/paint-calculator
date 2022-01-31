import { ReactStateSetter } from "../../../utils/types/ReactStateSetter";

export interface IFormButtonsProps {
  handlePrevFormStep: ReactStateSetter
  handleNextFormStep: ReactStateSetter
  formStep: number
}