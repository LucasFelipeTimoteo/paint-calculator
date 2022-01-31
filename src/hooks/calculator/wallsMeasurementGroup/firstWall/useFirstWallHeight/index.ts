import { useState } from "react"
import setLocalStorageData from "../../../../../utils/setLocalStorageData"
import calculatorStorageData from "../../../../utils/calculatorStorageData"
import { ITextFieldsEventHandler } from "../../../../utils/types/TextFieldsEventHandler"
import isWallMeasurementValid from "../../utils/isWallMeasurementValid"

const useFirstWallHeight = () => {
  const firstWallHeightDefaultValue = calculatorStorageData('firstWallHeight')
  const [firstWallHeight, setFirstWallHeight] = useState(firstWallHeightDefaultValue)

  const handleFirstWallHeight = (event: ITextFieldsEventHandler) => {
    const value = event.target.value
    const validValue = isWallMeasurementValid(value)

    if (validValue) {
      setFirstWallHeight(value)
      setLocalStorageData('firstWallHeight', value)
    }
  }

  const handleResetFirstWallHeight = () => {
    setFirstWallHeight('')
  }

  return {
    firstWallHeight,
    handleFirstWallHeight,
    handleResetFirstWallHeight
  }
}

export default useFirstWallHeight