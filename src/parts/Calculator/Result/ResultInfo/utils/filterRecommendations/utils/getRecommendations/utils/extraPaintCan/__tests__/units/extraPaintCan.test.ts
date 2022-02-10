import extraPaintCan from "../.."
import { PaintCans } from '../../../types/PaintCans'

describe('Should return if is necessary to have a extra paint can to compliment a liters remainder smaller than the smallest paint can', () => {
  const paintCansMock: PaintCans = [
    { amount: 0, liters: 3.6 },
    { amount: 0, liters: 2.5 },
    { amount: 0, liters: 0.5 }
  ]

  describe('Extra paint can is required', () => {
    it('Should return true to 0.3 liters remainder, current paint can liters is 0.5 and the smallest paint can have 0.5 liters', () => {
      const currentPaintCan = { amount: 0, liters: 0.5 }
      const value = extraPaintCan(paintCansMock, currentPaintCan, 0.3)
      const expected = true

      expect(value).toBe(expected)
    })

    it('Should return true to 0.1 liters remainder, current paint can liters is 0.5 and the smallest paint can have 0.5 liters', () => {
      const currentPaintCan = { amount: 0, liters: 0.5 }
      const value = extraPaintCan(paintCansMock, currentPaintCan, 0.1)
      const expected = true

      expect(value).toBe(expected)
    })

    it('Should return true to 0.4 liters remainder, current paint can liters is 0.5 and the smallest paint can have 0.5 liters', () => {
      const currentPaintCan = { amount: 0, liters: 0.5 }
      const value = extraPaintCan(paintCansMock, currentPaintCan, 0.4)
      const expected = true

      expect(value).toBe(expected)
    })
  })

  describe('Extra paint can is not required', () => {
    it('Should return false to 0.3 liters remainder, current paint can liters is 18 and the smallest paint can have 0.5 liters', () => {
      const currentPaintCan = { amount: 0, liters: 18 }
      const value = extraPaintCan(paintCansMock, currentPaintCan, 0.3)
      const expected = false

      expect(value).toBe(expected)
    })

    it('Should return false to 0.2 liters remainder, current paint can liters is 2.5 and the smallest paint can have 0.5 liters', () => {
      const currentPaintCan = { amount: 0, liters: 2.5 }
      const value = extraPaintCan(paintCansMock, currentPaintCan, 0.2)
      const expected = false

      expect(value).toBe(expected)
    })

    it('Should return false to 0.5 liters remainder, current paint can liters is 2.5 and the smallest paint can have 0.5 liters', () => {
      const currentPaintCan = { amount: 0, liters: 2.5 }
      const value = extraPaintCan(paintCansMock, currentPaintCan, 0.5)
      const expected = false

      expect(value).toBe(expected)
    })
  })
})