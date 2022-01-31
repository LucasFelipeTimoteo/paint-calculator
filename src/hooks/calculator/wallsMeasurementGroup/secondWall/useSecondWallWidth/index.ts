import { useState } from "react"
import setLocalStorageData from "../../../../../utils/setLocalStorageData"
import calculatorStorageData from "../../../../utils/calculatorStorageData"
import { ITextFieldsEventHandler } from "../../../../utils/types/TextFieldsEventHandler"
import isWallMeasurementValid from "../../utils/isWallMeasurementValid"

const useSecondWallWidth = () => {
  const secondWallWidthDefaultValue = calculatorStorageData('secondWallWidth')
  const [secondWallWidth, setSecondWallWidth] = useState(secondWallWidthDefaultValue)

  const handleSecondWallWidth = (event: ITextFieldsEventHandler) => {
    const value = event.target.value
    const validValue = isWallMeasurementValid(value)

    if (validValue) {
      setSecondWallWidth(value)
      setLocalStorageData('secondWallWidth', value)
    }
  }

  const handleResetSecondWallWidth = () => {
    setSecondWallWidth('')
  }
  
  return {
    secondWallWidth,
    handleSecondWallWidth,
    handleResetSecondWallWidth
  }
}

export default useSecondWallWidth