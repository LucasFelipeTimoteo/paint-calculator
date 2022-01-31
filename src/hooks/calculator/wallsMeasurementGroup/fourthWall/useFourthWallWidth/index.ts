import { useState } from "react"
import setLocalStorageData from "../../../../../utils/setLocalStorageData"
import calculatorStorageData from "../../../../utils/calculatorStorageData"
import { ITextFieldsEventHandler } from "../../../../utils/types/TextFieldsEventHandler"
import isWallMeasurementValid from "../../utils/isWallMeasurementValid"

const useFourthWallWidth = () => {
  const fourthWallWidthDefaultValue = calculatorStorageData('fourthWallWidth')
  const [fourthWallWidth, setFourthWallWidth] = useState(fourthWallWidthDefaultValue)

  const handleFourthWallWidth = (event: ITextFieldsEventHandler) => {
    const value = event.target.value
    const validValue = isWallMeasurementValid(value)

    if (validValue) {
      setFourthWallWidth(value)
      setLocalStorageData('fourthWallWidth', value)
    }
  }

  const handleResetFourthWallWidth= () => {
    setFourthWallWidth('')
  }


  return {
    fourthWallWidth,
    handleFourthWallWidth,
    handleResetFourthWallWidth
  }
}

export default useFourthWallWidth