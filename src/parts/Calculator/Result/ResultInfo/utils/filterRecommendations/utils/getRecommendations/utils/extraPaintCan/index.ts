import { IPaintCan } from "../types/PaintCan"
import { PaintCans } from "../types/PaintCans"

const extraPaintCan = (
  paintCans: PaintCans,
  currentPaintCan: IPaintCan,
  remainder: number,
) => {
  const isTheSmallestPaintCan = (
    currentPaintCan.liters === paintCans[paintCans.length - 1].liters
  )
  
  const divisionRemainderExists = remainder > 0
  const extraPaintCan = isTheSmallestPaintCan && divisionRemainderExists

  return extraPaintCan
}

export default extraPaintCan