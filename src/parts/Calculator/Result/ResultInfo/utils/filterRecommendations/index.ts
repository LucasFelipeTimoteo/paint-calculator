import getPaintCansList from "./utils/getPaintCansList";
import getRecommendations from "./utils/getRecommendations";

const filterRecommendations = (totalPaintNeeded: number) => {
  const paintCans = getPaintCansList()
  const recommendedPaintCans = getRecommendations(paintCans, totalPaintNeeded)

  const filteredRecommendedPaintCans = recommendedPaintCans.filter(
    paintCan => paintCan.amount >= 1
  )

  return filteredRecommendedPaintCans
}

export default filterRecommendations