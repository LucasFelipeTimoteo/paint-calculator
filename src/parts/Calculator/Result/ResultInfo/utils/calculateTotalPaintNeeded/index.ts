import { defaultSquareMeterPerPaintLiter } from "../../../../../../utils/calculatorDefaults/areaPaintedPerPaintLiter"

const calculateTotalPaintNeeded = (wallsTotalPaintableArea: number) => {
  const totalPaintNeeded = Number(
    (
      wallsTotalPaintableArea / defaultSquareMeterPerPaintLiter
    ).toFixed(1)
  )

  return totalPaintNeeded
}

export default calculateTotalPaintNeeded