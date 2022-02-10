import { Slide } from '@material-ui/core'
import React from 'react'
import useCalculationFieldsStyles from '../styles'
import { ISlideAnimationDirectionProp } from '../../../../hooks/useSlideAnimationDirection/types'
import DoorsNumber from './DoorsNumber'
import WindowsNumber from './WindowsNumber'

export default function DoorsAndWindowsNumbers({
  slideAnimationDirection
}: ISlideAnimationDirectionProp) {

  const { inputFields } = useCalculationFieldsStyles()
  return (
    <Slide
      in={true}
      direction={slideAnimationDirection}
      mountOnEnter
      unmountOnExit
      data-testid='doorsAndWindowsNumbers'
    >
      <div className={inputFields}>
        <DoorsNumber />
        <WindowsNumber />
      </div>
    </Slide>
  )
}
