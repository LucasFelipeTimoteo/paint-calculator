import { ReactElement } from "react";
import { ReactStateSetter } from "../../utils/types/ReactStateSetter";
import { WallsMeasurementsInputEventHandler } from "../../utils/types/WallsMeasurementsInputEventHandler";

export interface IWallsAccessoriesProviderProps {
  children: ReactElement
}

export interface IWallsAccessoriesContext {
  doorsNumber: string
  handleDoorsNumber: WallsMeasurementsInputEventHandler
  handleResetDoorsNumber: ReactStateSetter
  windowsNumber: string
  handleWindowsNumber: WallsMeasurementsInputEventHandler
  handleResetWindowsNumber: ReactStateSetter
}