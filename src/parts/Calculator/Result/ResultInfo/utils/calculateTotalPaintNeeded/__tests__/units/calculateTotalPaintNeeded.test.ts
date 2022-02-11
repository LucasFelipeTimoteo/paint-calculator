import calculateTotalPaintNeeded from "../.."

describe('Should return correct total paint needed based on passed param', () => {
  it('Should return 8.6 total paint needed to paint 43 square meters of walls', () => {
    const value = calculateTotalPaintNeeded(43)
    const expected = 8.6

    expect(value).toBe(expected)
  })

  it('Should return 5.6 total paint needed to paint 28 square meters of walls', () => {
    const value = calculateTotalPaintNeeded(28)
    const expected = 5.6

    expect(value).toBe(expected)
  })

  it('Should return 9.2 total paint needed to paint 45.8 square meters of walls', () => {
    const value = calculateTotalPaintNeeded(45.8)
    const expected = 9.2

    expect(value).toBe(expected)
  })

  it('Should return 4.1 total paint needed to paint 20.3 square meters of walls', () => {
    const value = calculateTotalPaintNeeded(20.3)
    const expected = 4.1

    expect(value).toBe(expected)
  })

  it('Should return 6 total paint needed to paint 29.9 square meters of walls', () => {
    const value = calculateTotalPaintNeeded(29.9)
    const expected = 6

    expect(value).toBe(expected)
  })
})