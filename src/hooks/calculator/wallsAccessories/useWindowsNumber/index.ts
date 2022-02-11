import { useState } from "react"
import setLocalStorageData from "../../../../utils/setLocalStorageData"
import calculatorStorageData from "../../../utils/calculatorStorageData"
import { ITextFieldsEventHandler } from "../../../utils/types/TextFieldsEventHandler"
import isWallsAccessoriesValid from "../utils/isWallsAccessoriesValid"

const useWindowsNumber = () => {
  const windowsNumberDefaultValue = calculatorStorageData('windowsNumber')
  const [windowsNumber, setWindowsNumber] = useState(windowsNumberDefaultValue)

  const handleWindowsNumber = (event: ITextFieldsEventHandler) => {
    const value = event.target.value
    const validValue = isWallsAccessoriesValid(value)

    if (validValue) {
      setWindowsNumber(value)
      setLocalStorageData('windowsNumber', value)
    }
  }

  const handleResetWindowsNumber = () => {
    setWindowsNumber('0')
  }

  return {
    windowsNumber,
    handleWindowsNumber,
    handleResetWindowsNumber
  }
}

export default useWindowsNumber