import { IPaintCan } from "../types/PaintCan"

const parseDivisionRemainderBase = (
  currentPaintCansPerLiter: number,
  currentPaintCan: IPaintCan
) => {
  const unparsedDivisionBaseDecimalRemainder = (
    String(currentPaintCansPerLiter)
      .split('.')[1]
  )
  const parsedDivisionBaseDecimalRemainder = (
    Number(`0.${unparsedDivisionBaseDecimalRemainder}`) *
    currentPaintCan.liters
  )

  const parsedCurrentRemainder = (
    Number(parsedDivisionBaseDecimalRemainder)
      .toFixed(1)
  )

  return parsedCurrentRemainder
}

export default parseDivisionRemainderBase