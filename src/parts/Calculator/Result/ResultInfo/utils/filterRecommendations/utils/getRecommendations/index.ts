import extraPaintCan from "./utils/extraPaintCan";
import getLitersremainderPerCurrentCan from "./utils/getLitersremainderPerCurrentCan";
import getPaintCanAmount from "./utils/getPaintCanAmount";
import parseDivisionRemainderBase from "./utils/parseDivisionRemainderBase";
import { PaintCans } from "./utils/types/PaintCans";

const getRecommendations = (paintCans: PaintCans, totalPaintNeeded: number) => {
  let remainder: number;

  const recommendedPaintCans = paintCans.map(currentPaintCan => {
    let currentPaintLitersRemainder = remainder ? remainder : totalPaintNeeded

    const litersRemainderPerCurrentCan = getLitersremainderPerCurrentCan(
      currentPaintLitersRemainder,
      currentPaintCan
    )
    
    const isInterger = Number.isInteger(litersRemainderPerCurrentCan)

    if (remainder === 0) {
      return currentPaintCan
    }

    if (isInterger) {
      remainder = 0
      return {
        amount: litersRemainderPerCurrentCan,
        liters: currentPaintCan.liters
      }
    }

    const currentPaintCanAmount = getPaintCanAmount(litersRemainderPerCurrentCan)

    const parsedCurrentRemainder = parseDivisionRemainderBase(
      litersRemainderPerCurrentCan,
      currentPaintCan
    )
    remainder = Number(parsedCurrentRemainder)

    let isExtraPaintCanRequired = extraPaintCan(
      paintCans,
      currentPaintCan,
      remainder
    )

    return {
      amount: isExtraPaintCanRequired ? currentPaintCanAmount + 1 : currentPaintCanAmount,
      liters: currentPaintCan.liters
    }
  })

  return recommendedPaintCans
}

export default getRecommendations