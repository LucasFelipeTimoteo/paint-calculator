import { Slide } from '@material-ui/core'
import React from 'react'
import { ISlideAnimationDirectionProp } from '../../../../hooks/useSlideAnimationDirection/types'
import useCalculationFieldsStyles from '../styles'
import FirstWallMeasurement from './FirstWallMeasurement'
import FourthWallMeasurement from './FourthWallMeasurement'
import SecondWallMeasurement from './SecondWallMeasurement'
import useStyles from './styles'
import ThirdWallMeasurement from './ThirdWallMeasurement'


export default function WallsMeasurementsGroup({
  slideAnimationDirection
}: ISlideAnimationDirectionProp) {
  const { wallInputGroup } = useStyles()
  const { inputFields } = useCalculationFieldsStyles()

  return (
    <Slide
      in={true}
      direction={slideAnimationDirection}
      mountOnEnter
      unmountOnExit
      data-testid="wallsMeasurementsGroup"
    >
      <div className={inputFields}>
        <div className={wallInputGroup}>
          <FirstWallMeasurement />
        </div>

        <div className={wallInputGroup}>
          <SecondWallMeasurement />
        </div>

        <div className={wallInputGroup}>
          <ThirdWallMeasurement />
        </div>

        <div className={wallInputGroup}>
          <FourthWallMeasurement />
        </div>
      </div>
    </Slide>
  )
}
