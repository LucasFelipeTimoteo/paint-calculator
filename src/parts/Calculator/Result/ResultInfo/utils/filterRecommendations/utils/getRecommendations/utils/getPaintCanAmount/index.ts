const getPaintCanAmount = (litersRemainderPerCurrentCan: number) => {
  const currentPaintCanAmount = String(
    litersRemainderPerCurrentCan
  ).split('.')[0]

  const parsedCurrentPaintCanAmount = Number(currentPaintCanAmount)

  return parsedCurrentPaintCanAmount
}

export default getPaintCanAmount