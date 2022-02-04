import {
  bigPaintCanLiters,
  extraSmallPaintCanLiters,
  mediumPaintCanLiters,
  smallPaintCanLiters
} from "../../../../../../../../utils/calculatorDefaults/paintCanLitersOptions"

const getPaintCansList = () => {
  let bigPaintCan = { amount: 0, liters: bigPaintCanLiters }
  let mediumPaintCan = { amount: 0, liters: mediumPaintCanLiters }
  let smallPaintCan = { amount: 0, liters: smallPaintCanLiters }
  let extraSmallPaintCan = { amount: 0, liters: extraSmallPaintCanLiters }

  let orderedPaintCans = ([
    bigPaintCan,
    mediumPaintCan,
    smallPaintCan,
    extraSmallPaintCan
  ]).reverse()

  const paintCans = orderedPaintCans.sort(
    (a, b) => b.liters - a.liters
  )

  return paintCans
}

export default getPaintCansList