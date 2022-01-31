import { useState } from "react"
import setLocalStorageData from "../../../../../utils/setLocalStorageData"
import calculatorStorageData from "../../../../utils/calculatorStorageData"
import { ITextFieldsEventHandler } from "../../../../utils/types/TextFieldsEventHandler"
import isWallMeasurementValid from "../../utils/isWallMeasurementValid"

const useThirdWallWidth = () => {
  const thirdWallWidthDefaultValue = calculatorStorageData('thirdWallWidth')
  const [thirdWallWidth, setThirdWallWidth] = useState(thirdWallWidthDefaultValue)

  const handleThirdWallWidth = (event: ITextFieldsEventHandler) => {
    const value = event.target.value
    const validValue = isWallMeasurementValid(value)

    if (validValue) {
      setThirdWallWidth(value)
      setLocalStorageData('thirdWallWidth', value)
    }
  }

  const handleResetThirdWallWidth = () => {
    setThirdWallWidth('')
  }

  return {
    thirdWallWidth,
    handleThirdWallWidth,
    handleResetThirdWallWidth
  }
}

export default useThirdWallWidth