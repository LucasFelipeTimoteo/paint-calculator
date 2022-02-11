import getLitersremainderPerCurrentCan from "../.."
import { IPaintCan } from '../../../types/PaintCan'

describe('Should return correct raw amount of paint cans needed based on passed param', () => {
  // raw amount of paint cans can be a decimal number

  describe('if the liters remainded value is greather tha 0, it should be divided by the current paint can liters', () => {
    it('The division of 6 liters of paint remaided per 6 paint can liters should result in 1 amount of paint cans required', () => {
      const currentPaintCanMock: IPaintCan = { liters: 6, amount: 0 }
      const value = getLitersremainderPerCurrentCan(6, currentPaintCanMock)
      const expected = 1

      expect(value).toBe(expected)
    })

    it('The division of 0.5 liters of paint remaided per 2 paint can liters should result in 0.25 amount of paint cans required', () => {
      const currentPaintCanMock: IPaintCan = { liters: 2, amount: 0 }
      const value = getLitersremainderPerCurrentCan(0.5, currentPaintCanMock)
      const expected = 0.25

      expect(value).toBe(expected)
    })

    it('The division of 7 liters of paint remaided per 3.5 paint can liters should result in 2 amount of paint cans required', () => {
      const currentPaintCanMock: IPaintCan = { liters: 3.5, amount: 0 }
      const value = getLitersremainderPerCurrentCan(7, currentPaintCanMock)
      const expected = 2

      expect(value).toBe(expected)
    })

    it('The division of 7.2 liters of paint remaided per 3.6 paint can liters should result in 2 amount of paint cans required', () => {
      const currentPaintCanMock: IPaintCan = { liters: 3.6, amount: 0 }
      const value = getLitersremainderPerCurrentCan(7.2, currentPaintCanMock)
      const expected = 2

      expect(value).toBe(expected)
    })

    it('The division of 7.2 liters of paint remaided per 3.6 paint can liters should result in 2 amount of paint cans required', () => {
      const currentPaintCanMock: IPaintCan = { liters: 18, amount: 0 }
      const value = getLitersremainderPerCurrentCan(58.5, currentPaintCanMock)
      const expected = 3.25

      expect(value).toBe(expected)
    })
  })

  describe('If liters remainded is equal 0, the amount of paint cans needed always should be 0', () => {
    it('The division of 0 liters of paint remaided per 6 paint can liters should result in 1 amount of paint cans required', () => {
      const currentPaintCanMock: IPaintCan = { liters: 6, amount: 0 }
      const value = getLitersremainderPerCurrentCan(0, currentPaintCanMock)
      const expected = 0

      expect(value).toBe(expected)
    })
    it('The division of 0 liters of paint remaided per 3.5 paint can liters should result in 1 amount of paint cans required', () => {
      const currentPaintCanMock: IPaintCan = { liters: 3.5, amount: 0 }
      const value = getLitersremainderPerCurrentCan(0, currentPaintCanMock)
      const expected = 0

      expect(value).toBe(expected)
    })
    it('The division of 0 liters of paint remaided per 4.6 paint can liters should result in 1 amount of paint cans required', () => {
      const currentPaintCanMock: IPaintCan = { liters: 4.6, amount: 0 }
      const value = getLitersremainderPerCurrentCan(0, currentPaintCanMock)
      const expected = 0

      expect(value).toBe(expected)
    })
    it('The division of 0 liters of paint remaided per 0.5 paint can liters should result in 1 amount of paint cans required', () => {
      const currentPaintCanMock: IPaintCan = { liters: 0.5, amount: 0 }
      const value = getLitersremainderPerCurrentCan(0, currentPaintCanMock)
      const expected = 0

      expect(value).toBe(expected)
    })
  })
})
