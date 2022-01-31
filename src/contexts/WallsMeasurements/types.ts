import { ReactElement } from "react";
import { ReactStateSetter } from "../../utils/types/ReactStateSetter";
import { WallsMeasurementsInputEventHandler } from "../../utils/types/WallsMeasurementsInputEventHandler";

export type IWallsMeasurementContext = {
  firstWallWidth: string
  handleFirstWallWidth: WallsMeasurementsInputEventHandler
  firstWallHeight: string
  handleFirstWallHeight: WallsMeasurementsInputEventHandler
  handleResetFisrtWallWidth: ReactStateSetter
  handleResetFirstWallHeight: ReactStateSetter

  secondWallWidth: string
  handleSecondWallWidth: WallsMeasurementsInputEventHandler
  secondWallHeight: string
  handleSecondWallHeight: WallsMeasurementsInputEventHandler
  handleResetSecondWallHeight: ReactStateSetter
  handleResetSecondWallWidth: ReactStateSetter

  thirdWallWidth: string
  handleThirdWallWidth: WallsMeasurementsInputEventHandler
  thirdWallHeight: string
  handleThirdWallHeight: WallsMeasurementsInputEventHandler
  handleResetThirdWallHeight: ReactStateSetter
  handleResetThirdWallWidth: ReactStateSetter

  fourthWallWidth: string
  handleFourthWallWidth: WallsMeasurementsInputEventHandler
  fourthWallHeight: string
  handleFourthWallHeight: WallsMeasurementsInputEventHandler
  handleResetFourthWallHeight: ReactStateSetter
  handleResetFourthWallWidth: ReactStateSetter,

  wallsMeasurementsArea: number
}

export interface IWallsMeasurementsProviderProps {
  children: ReactElement
}
