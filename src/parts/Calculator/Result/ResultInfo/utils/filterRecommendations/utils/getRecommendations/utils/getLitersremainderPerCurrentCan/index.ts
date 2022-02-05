import { IPaintCan } from "../types/PaintCan"

const getLitersremainderPerCurrentCan = (
  currentPaintLitersRemainder: number,
  currentPaintCan: IPaintCan
) => {
  const litersRemainderPerCurrentCan = currentPaintLitersRemainder > 0
    ?
    currentPaintLitersRemainder / currentPaintCan.liters
    :
    0

  return litersRemainderPerCurrentCan
}

export default getLitersremainderPerCurrentCan