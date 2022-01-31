import { ReactStateSetter } from "../../../../../../utils/types/ReactStateSetter"

const resetCalculator = (
  handleResetFirstWallHeight: ReactStateSetter,
  handleResetFisrtWallWidth: ReactStateSetter,
  handleResetFourthWallHeight: ReactStateSetter,
  handleResetFourthWallWidth: ReactStateSetter,
  handleResetSecondWallHeight: ReactStateSetter,
  handleResetSecondWallWidth: ReactStateSetter,
  handleResetThirdWallHeight: ReactStateSetter,
  handleResetThirdWallWidth: ReactStateSetter,
  handleResetWindowsNumber: ReactStateSetter,
  handleResetDoorsNumber: ReactStateSetter,
  handleResetFormStep: ReactStateSetter
) => {
  handleResetFirstWallHeight()
  handleResetFisrtWallWidth()
  handleResetFourthWallHeight()
  handleResetFourthWallWidth()
  handleResetSecondWallHeight()
  handleResetSecondWallWidth()
  handleResetThirdWallHeight()
  handleResetThirdWallWidth()

  handleResetWindowsNumber()
  handleResetDoorsNumber()

  handleResetFormStep()
}

export default resetCalculator
