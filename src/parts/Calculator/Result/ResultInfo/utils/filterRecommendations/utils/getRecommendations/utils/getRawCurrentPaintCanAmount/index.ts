import { IPaintCan } from "../types/PaintCan"

const getRawCurrentPaintCanAmount = (
  currentPaintLitersRemainder: number,
  currentPaintCan: IPaintCan
) => {
  const rawCurrentPaintCanAmount = currentPaintLitersRemainder > 0
    ?
    currentPaintLitersRemainder / currentPaintCan.liters
    :
    0

  return rawCurrentPaintCanAmount
}

export default getRawCurrentPaintCanAmount