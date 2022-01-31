import React, { createContext } from 'react';
import useFirstWallHeight from '../../hooks/calculator/wallsMeasurementGroup/firstWall/useFirstWallHeight';
import useFirstWallWidth from '../../hooks/calculator/wallsMeasurementGroup/firstWall/useFirstWallWidth';
import useFourthWallHeight from '../../hooks/calculator/wallsMeasurementGroup/fourthWall/useFourthWallHeight';
import useFourthWallWidth from '../../hooks/calculator/wallsMeasurementGroup/fourthWall/useFourthWallWidth';
import useSecondWallHeight from '../../hooks/calculator/wallsMeasurementGroup/secondWall/useSecondWallHeight';
import useSecondWallWidth from '../../hooks/calculator/wallsMeasurementGroup/secondWall/useSecondWallWidth';
import useThirdWallHeight from '../../hooks/calculator/wallsMeasurementGroup/thirdWall/useThirdWallHeight';
import useThirdWallWidth from '../../hooks/calculator/wallsMeasurementGroup/thirdWall/useThirdWallWidth/';
import useWallsMeasurementsArea from '../../hooks/calculator/wallsMeasurementGroup/wallsMeasurementsArea/useWallsMeasurementsArea';
import {
  IWallsMeasurementContext,
  IWallsMeasurementsProviderProps
} from './types';

export const WallsMeasurementContext = createContext({} as IWallsMeasurementContext)

export default function WallsMeasurementsProvider({
  children
}: IWallsMeasurementsProviderProps) {
  const {
    firstWallWidth,
    handleFirstWallWidth,
    handleResetFisrtWallWidth
  } = useFirstWallWidth()
  const {
    firstWallHeight,
    handleFirstWallHeight,
    handleResetFirstWallHeight
  } = useFirstWallHeight()

  const {
    secondWallWidth,
    handleSecondWallWidth,
    handleResetSecondWallWidth
  } = useSecondWallWidth()
  const {
    secondWallHeight,
    handleSecondWallHeight,
    handleResetSecondWallHeight
  } = useSecondWallHeight()

  const {
    thirdWallWidth,
    handleThirdWallWidth,
    handleResetThirdWallWidth
  } = useThirdWallWidth()
  const {
    thirdWallHeight,
    handleThirdWallHeight,
    handleResetThirdWallHeight
  } = useThirdWallHeight()

  const {
    fourthWallWidth,
    handleFourthWallWidth,
    handleResetFourthWallWidth
  } = useFourthWallWidth()
  const {
    fourthWallHeight,
    handleFourthWallHeight,
    handleResetFourthWallHeight
  } = useFourthWallHeight()

  const wallsMeasurementsArea = useWallsMeasurementsArea(
    firstWallHeight,
    firstWallWidth,

    secondWallHeight,
    secondWallWidth,

    thirdWallHeight,
    thirdWallWidth,

    fourthWallHeight,
    fourthWallWidth
  )

  const providerValue = {
    firstWallWidth,
    handleFirstWallWidth,
    firstWallHeight,
    handleFirstWallHeight,
    handleResetFisrtWallWidth,
    handleResetFirstWallHeight,

    secondWallWidth,
    handleSecondWallWidth,
    secondWallHeight,
    handleSecondWallHeight,
    handleResetSecondWallHeight,
    handleResetSecondWallWidth,

    thirdWallWidth,
    handleThirdWallWidth,
    thirdWallHeight,
    handleThirdWallHeight,
    handleResetThirdWallHeight,
    handleResetThirdWallWidth,

    fourthWallWidth,
    handleFourthWallWidth,
    fourthWallHeight,
    handleFourthWallHeight,
    handleResetFourthWallHeight,
    handleResetFourthWallWidth,

    wallsMeasurementsArea
  }

  return (
    <WallsMeasurementContext.Provider value={providerValue}>
      {children}
    </WallsMeasurementContext.Provider>
  );
}