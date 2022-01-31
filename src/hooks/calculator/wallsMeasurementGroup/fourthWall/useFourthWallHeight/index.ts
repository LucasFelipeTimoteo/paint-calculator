import { useState } from "react"
import setLocalStorageData from "../../../../../utils/setLocalStorageData"
import calculatorStorageData from "../../../../utils/calculatorStorageData"
import { ITextFieldsEventHandler } from "../../../../utils/types/TextFieldsEventHandler"
import isWallMeasurementValid from "../../utils/isWallMeasurementValid"

const useFourthWallHeight = () => {
  const fourthWallHeightDefaultValue = calculatorStorageData('fourthWallHeight')
  const [fourthWallHeight, setFourthWallHeight] = useState(fourthWallHeightDefaultValue)

  const handleFourthWallHeight = (event: ITextFieldsEventHandler) => {
    const value = event.target.value
    const validValue = isWallMeasurementValid(value)

    if (validValue) {
      setFourthWallHeight(value)
      setLocalStorageData('fourthWallHeight', value)
    }
  }

  const handleResetFourthWallHeight = () => {
    setFourthWallHeight('')
  }

  return {
    fourthWallHeight,
    handleFourthWallHeight,
    handleResetFourthWallHeight
  }
}

export default useFourthWallHeight