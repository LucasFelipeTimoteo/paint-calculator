import { useState } from "react"
import setLocalStorageData from "../../../../utils/setLocalStorageData"
import calculatorStorageData from "../../../utils/calculatorStorageData"
import { ITextFieldsEventHandler } from "../../../utils/types/TextFieldsEventHandler"
import isWallsAccessoriesValid from "../utils/isWallsAccessoriesValid"

const useDoorsNumber = () => {
  const doorsNumberDefaultValue = calculatorStorageData('doorsNumber')
  const [doorsNumber, setDoorsNumber] = useState(doorsNumberDefaultValue)

  const handleDoorsNumber = (event: ITextFieldsEventHandler) => {
    const value = event.target.value
    const validValue = isWallsAccessoriesValid(value)

    if (validValue) {
      setDoorsNumber(value)
      setLocalStorageData('doorsNumber', value)
    }
  }

  const handleResetDoorsNumber = () => {
    setDoorsNumber('')
  }

  return {
    doorsNumber,
    handleDoorsNumber,
    handleResetDoorsNumber
  }
}

export default useDoorsNumber