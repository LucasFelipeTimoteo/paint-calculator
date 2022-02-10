import calculateWallsPaintableArea from "../.."

describe('Should return correct walls paintable area based on passed params', () => {
  it('Should return 18 to an input of 18(walls total area), 0(windows number) and 0(windows number)', () => {
    // since there is no unpaintable area, the paintable area is simply the total wall area
    const value = calculateWallsPaintableArea(18, 0, 0)
    const expected = 18

    expect(value).toBe(expected)
  })

  it('Should return 11.04 to an input of 18(walls total area), 1(windows number) and 3(windows number)', () => {
    const value = calculateWallsPaintableArea(18, 1, 3)
    const expected = 11.04

    expect(value).toBe(expected)
  })

  it('Should return 5.2 to an input of 10(walls total area), 2(windows number) and 0(windows number)', () => {
    const value = calculateWallsPaintableArea(10, 2, 0)
    const expected = 5.2

    expect(value).toBe(expected)
  })

  it('Should return 60 to an input of 60(walls total area), 0(windows number) and 0(windows number)', () => {
    // since there is no unpaintable area, the paintable area is simply the total wall area
    const value = calculateWallsPaintableArea(60, 0, 0)
    const expected = 60

    expect(value).toBe(expected)
  })

  it('Should return 44.32 to an input of 60(walls total area), 4(windows number) and 4(windows number)', () => {
    const value = calculateWallsPaintableArea(60, 4, 4)
    const expected = 44.32

    expect(value).toBe(expected)
  })
})