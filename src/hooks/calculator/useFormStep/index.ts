import { useState } from "react"
import { ReactStateSetter } from "../../../utils/types/ReactStateSetter"

const useFormStep = (
  setSlideAnimationDirectionToLeft: ReactStateSetter,
  setSlideAnimationDirectionToRight: ReactStateSetter
) => {
  const [formStep, setFormStep] = useState(1)

  const handleNextFormStep = () => {
    setSlideAnimationDirectionToLeft()
    setFormStep(prev => (
      prev < 3 ? prev + 1 : prev
    ))
  }

  const handlePrevFormStep = () => {
    setSlideAnimationDirectionToRight()
    setFormStep(prev => (
      prev > 1 ? prev - 1 : prev
    ))
  }

  const handleResetFormStep = () => {
    setSlideAnimationDirectionToRight()
    window.localStorage.clear()
    setFormStep(1)
  }

  return {
    formStep,
    handleNextFormStep,
    handlePrevFormStep,
    handleResetFormStep
  }
}

export default useFormStep