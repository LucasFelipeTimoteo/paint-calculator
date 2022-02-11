import extraPaintCan from "./utils/extraPaintCan";
import getRawCurrentPaintCanAmount from "./utils/getRawCurrentPaintCanAmount";
import getPaintCanAmount from "./utils/getPaintCanAmount";
import parseDivisionRemainderBase from "./utils/parseDivisionRemainderBase";
import { PaintCans } from "./utils/types/PaintCans";

const getRecommendations = (paintCans: PaintCans, totalPaintNeeded: number) => {
  let remainder: number;

  const recommendedPaintCans = paintCans.map(currentPaintCan => {
    if (remainder === 0) {
      return currentPaintCan
    }

    let currentPaintLitersRemainder = remainder ? remainder : totalPaintNeeded

    const rawCurrentPaintCanAmount = getRawCurrentPaintCanAmount(
      currentPaintLitersRemainder,
      currentPaintCan
    )
    
    const isRawCurrentPaintCanAmountInteger = Number.isInteger(rawCurrentPaintCanAmount)

    if (isRawCurrentPaintCanAmountInteger) {
      remainder = 0
      return {
        amount: rawCurrentPaintCanAmount,
        liters: currentPaintCan.liters
      }
    }

    const currentPaintCanAmount = getPaintCanAmount(rawCurrentPaintCanAmount)

    const parsedCurrentRemainder = parseDivisionRemainderBase(
      rawCurrentPaintCanAmount,
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