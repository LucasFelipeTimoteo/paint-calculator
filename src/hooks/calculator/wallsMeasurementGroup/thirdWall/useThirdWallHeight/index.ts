import { useState } from "react"
import setLocalStorageData from "../../../../../utils/setLocalStorageData"
import calculatorStorageData from "../../../../utils/calculatorStorageData"
import { ITextFieldsEventHandler } from "../../../../utils/types/TextFieldsEventHandler"
import isWallMeasurementValid from "../../utils/isWallMeasurementValid"

const useThirdWallHeight = () => {
  const thirdWallHeightDefaultValue = calculatorStorageData('thirdWallHeight')
  const [thirdWallHeight, setThirdWallHeight] = useState(thirdWallHeightDefaultValue)

  const handleThirdWallHeight = (event: ITextFieldsEventHandler) => {
    const value = event.target.value
    const validValue = isWallMeasurementValid(value)

    if (validValue) {
      setThirdWallHeight(value)
      setLocalStorageData('thirdWallHeight', value)
    }
  }

  const handleResetThirdWallHeight = () => {
    setThirdWallHeight('')
  }

  return {
    thirdWallHeight,
    handleThirdWallHeight,
    handleResetThirdWallHeight
  }
}

export default useThirdWallHeight