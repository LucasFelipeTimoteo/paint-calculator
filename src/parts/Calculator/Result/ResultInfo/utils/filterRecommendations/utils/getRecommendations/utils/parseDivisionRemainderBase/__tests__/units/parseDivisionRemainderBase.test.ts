import parseDivisionRemainderBase from "../.."
import { IPaintCan } from "../../../types/PaintCan"

describe('Once we get the raw current paint cans amount with decimals, the decimal part should be converted to original base to obtain the remainder', () => {
  it('The raw paint cans amound of 12.4562 should get "2.7" as parsed remainder value when current paint can liters is 6', () => {
    const currentPaintCanMock: IPaintCan = { liters: 6, amount: 0 }
    const value = parseDivisionRemainderBase(12.4562, currentPaintCanMock)
    const expected = "2.7"

    expect(value).toBe(expected)
  })

  it('The raw paint cans amound of 100.4562 should get "2.7" as parsed remainder value when current paint can liters is 6', () => {
    const currentPaintCanMock: IPaintCan = { liters: 6, amount: 0 }
    const value = parseDivisionRemainderBase(100.4562, currentPaintCanMock)
    const expected = "2.7"

    expect(value).toBe(expected)
  })
  
  it('The raw paint cans amound of 22.4562 should get "2.7" as parsed remainder value when current paint can liters is 6', () => {
    const currentPaintCanMock: IPaintCan = { liters: 6, amount: 0 }
    const value = parseDivisionRemainderBase(22.4562, currentPaintCanMock)
    const expected = "2.7"

    expect(value).toBe(expected)
  })

  it('The raw paint cans amound of 0.4562 should get "2.7" as parsed remainder value when current paint can liters is 6', () => {
    const currentPaintCanMock: IPaintCan = { liters: 6, amount: 0 }
    const value = parseDivisionRemainderBase(0.4562, currentPaintCanMock)
    const expected = "2.7"

    expect(value).toBe(expected)
  })

  it('The raw paint cans amound of 0.4562 should get "0.7" as parsed remainder value when current paint can liters is 3.5', () => {
    const currentPaintCanMock: IPaintCan = { liters: 3.5, amount: 0 }
    const value = parseDivisionRemainderBase(23.21, currentPaintCanMock)
    const expected = "0.7"

    expect(value).toBe(expected)
  })

  it('The raw paint cans amound of 1.9999999 should get "0.5" as parsed remainder value when current paint can liters is 0.5', () => {
    const currentPaintCanMock: IPaintCan = { liters: 0.5, amount: 0 }
    const value = parseDivisionRemainderBase(1.99999, currentPaintCanMock)
    const expected = "0.5"

    expect(value).toBe(expected)
  })

  it('The raw paint cans amound of 14.679 should get "12.2" as parsed remainder value when current paint can liters is 18', () => {
    const currentPaintCanMock: IPaintCan = { liters: 18, amount: 0 }
    const value = parseDivisionRemainderBase(14.679, currentPaintCanMock)
    const expected = "12.2"

    expect(value).toBe(expected)
  })
})