import { useState } from "react"
import setLocalStorageData from "../../../../../utils/setLocalStorageData"
import calculatorStorageData from "../../../../utils/calculatorStorageData"
import { ITextFieldsEventHandler } from "../../../../utils/types/TextFieldsEventHandler"
import isWallMeasurementValid from "../../utils/isWallMeasurementValid"

const useSecondWallHeight = () => {
  const secondWallHeightDefaultValue = calculatorStorageData('secondWallHeight')
  const [secondWallHeight, setSecondWallHeight] = useState(secondWallHeightDefaultValue)

  const handleSecondWallHeight = (event: ITextFieldsEventHandler) => {
    const value = event.target.value
    const validValue = isWallMeasurementValid(value)

    if(validValue) {
      setSecondWallHeight(value)
      setLocalStorageData('secondWallHeight', value)
    }
  }
  
  const handleResetSecondWallHeight = () => {
    setSecondWallHeight('')
  }

  return {
    secondWallHeight,
    handleSecondWallHeight,
    handleResetSecondWallHeight
  }
}

export default useSecondWallHeight