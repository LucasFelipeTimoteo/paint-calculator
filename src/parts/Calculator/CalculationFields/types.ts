import { SlideAnimationDirection } from "../../../hooks/useSlideAnimationDirection/types";
import { ReactStateSetter } from "../../../utils/types/ReactStateSetter";

export interface ICalculationFieldsProps {
  formStep: number
  slideAnimationDirection: SlideAnimationDirection
  handlePrevFormStep: ReactStateSetter
  handleNextFormStep: ReactStateSetter
}