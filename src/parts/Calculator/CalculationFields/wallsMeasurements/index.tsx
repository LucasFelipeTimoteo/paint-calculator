import { Slide } from '@material-ui/core'
import React from 'react'
import { ISlideAnimationDirectionProp } from '../../../../hooks/useSlideAnimationDirection/types'
import useCalculationFieldsStyles from '../styles'
import FirstWallMeasurements from './FirstWallMeasurements'
import FourthWallMeasurement from './FourthWallMeasurement'
import SecondWallMeasurement from './SecondWallMeasurement'
import useStyles from './styles'
import ThirdWallMeasurement from './ThirdWallMeasurement'

export default function WallsMeasurements({
  slideAnimationDirection
}: ISlideAnimationDirectionProp) {
  const { wallInputGroup } = useStyles()
  const { inputFields } = useCalculationFieldsStyles()

  return (
    <Slide in={true} direction={slideAnimationDirection} mountOnEnter unmountOnExit>
      <div className={inputFields}>
        <div className={wallInputGroup}>
          <FirstWallMeasurements />
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
