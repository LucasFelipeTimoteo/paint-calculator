import { IPaintCan } from "../types/PaintCan"
import { PaintCans } from "../types/PaintCans"

const extraPaintCan = (
  paintCans: PaintCans,
  currentPaintCan: IPaintCan,
  remainder: number,
) => {
  const smallestPaintCanAvaliable = paintCans[paintCans.length - 1].liters
  const isTheSmallestPaintCan = (
    currentPaintCan.liters === smallestPaintCanAvaliable
  )
  
  const divisionRemainderExists = remainder > 0 && remainder < smallestPaintCanAvaliable
  const extraPaintCan = isTheSmallestPaintCan && divisionRemainderExists

  return extraPaintCan
}

export default extraPaintCan