import { useState } from "react"
import { SlideAnimationDirection } from "./types"

const useSlideAnimationDirection = () => {
  const [
    slideAnimationDirection,
    setSlideAnimationDirection
  ] = useState<SlideAnimationDirection>('left')

  const setSlideAnimationDirectionToLeft = () => {
    setSlideAnimationDirection('left')
  }
  const setSlideAnimationDirectionToRight = () => {
    setSlideAnimationDirection('right')
  }

  return {
    slideAnimationDirection,
    setSlideAnimationDirectionToLeft,
    setSlideAnimationDirectionToRight
  }
}

export default useSlideAnimationDirection