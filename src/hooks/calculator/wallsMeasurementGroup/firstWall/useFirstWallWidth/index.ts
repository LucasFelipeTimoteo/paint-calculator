import { useState } from "react"
import setLocalStorageData from "../../../../../utils/setLocalStorageData"
import calculatorStorageData from "../../../../utils/calculatorStorageData"
import { ITextFieldsEventHandler } from "../../../../utils/types/TextFieldsEventHandler"
import isWallMeasurementValid from "../../utils/isWallMeasurementValid"

const useFirstWallWidth = () => {
  const firstWallWidthDefaultValue = calculatorStorageData('firstWallWidth')
  const [firstWallWidth, setFirstWallWidth] = useState(firstWallWidthDefaultValue)

  const handleFirstWallWidth = (event: ITextFieldsEventHandler) => {
    const value = event.target.value
    const validValue = isWallMeasurementValid(value)

    if (validValue) {
      setFirstWallWidth(value)
      setLocalStorageData('firstWallWidth', value)
    }
  }

  const handleResetFisrtWallWidth = () => {
    setFirstWallWidth('')
  }

  return {
    firstWallWidth,
    handleFirstWallWidth,
    handleResetFisrtWallWidth
  }
}

export default useFirstWallWidth