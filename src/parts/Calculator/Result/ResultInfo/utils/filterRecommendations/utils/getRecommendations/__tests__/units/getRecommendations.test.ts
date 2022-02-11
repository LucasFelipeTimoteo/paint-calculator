import { json } from "node:stream/consumers"
import getRecommendations from "../.."
import { PaintCans } from "../../utils/types/PaintCans"

describe('Should get a list of all paint cans and each one with the correct amount needed based on the total liters of paint needed', () => {
  const paintCansMock: PaintCans = [
    {amount: 0, liters: 18},
    {amount: 0, liters: 3.6},
    {amount: 0, liters: 2.5},
    {amount: 0, liters: 0.5}
  ]
  it('For 19 liters required should have the following amounts of paint cans: 18L X1; 0.5L X2. The others must have 0 in amounts', () => {
    const value = getRecommendations(paintCansMock, 19)
    const seializedValue = JSON.stringify(value)

    const expected: PaintCans = [
      {amount: 1, liters: 18},
      {amount: 0, liters: 3.6},
      {amount: 0, liters: 2.5},
      {amount: 2, liters: 0.5}
    ]
    const serializedExpected = JSON.stringify(expected)

    expect(seializedValue).toBe(serializedExpected)
  })

  it('For 14.5 liters required should have the following amounts of paint cans: 3.6L X4; 0.5L X1. The others must have 0 in amounts', () => {
    const value = getRecommendations(paintCansMock, 14.5)
    const seializedValue = JSON.stringify(value)

    const expected: PaintCans = [
      {amount: 0, liters: 18},
      {amount: 4, liters: 3.6},
      {amount: 0, liters: 2.5},
      {amount: 1, liters: 0.5}
    ]
    const serializedExpected = JSON.stringify(expected)

    expect(seializedValue).toBe(serializedExpected)
  })

  it('For 9.6 liters required should have the following amounts of paint cans: 3.6L X2; 0.5L X5. The others must have 0 in amounts', () => {
    const value = getRecommendations(paintCansMock, 9.6)
    const seializedValue = JSON.stringify(value)

    const expected: PaintCans = [
      {amount: 0, liters: 18},
      {amount: 2, liters: 3.6},
      {amount: 0, liters: 2.5},
      {amount: 5, liters: 0.5}
    ]
    const serializedExpected = JSON.stringify(expected)

    expect(seializedValue).toBe(serializedExpected)
  })

  it('For 9.7 liters required should have the following amounts of paint cans: 3.6L X2; 2.5L X1. The others must have 0 in amounts', () => {
    const value = getRecommendations(paintCansMock, 9.7)
    const seializedValue = JSON.stringify(value)

    const expected: PaintCans = [
      {amount: 0, liters: 18},
      {amount: 2, liters: 3.6},
      {amount: 1, liters: 2.5},
      {amount: 0, liters: 0.5}
    ]
    const serializedExpected = JSON.stringify(expected)

    expect(seializedValue).toBe(serializedExpected)
  })

  it('For 0.5 liters required should have the following amounts of paint cans: 0.5L X1. The others must have 0 in amounts', () => {
    const value = getRecommendations(paintCansMock, 0.5)
    const seializedValue = JSON.stringify(value)

    const expected: PaintCans = [
      {amount: 0, liters: 18},
      {amount: 0, liters: 3.6},
      {amount: 0, liters: 2.5},
      {amount: 1, liters: 0.5}
    ]
    const serializedExpected = JSON.stringify(expected)

    expect(seializedValue).toBe(serializedExpected)
  })

  it('For 3.6 liters required should have the following amounts of paint cans: 3.6L X1. The others must have 0 in amounts', () => {
    const value = getRecommendations(paintCansMock, 3.6)
    const seializedValue = JSON.stringify(value)

    const expected: PaintCans = [
      {amount: 0, liters: 18},
      {amount: 1, liters: 3.6},
      {amount: 0, liters: 2.5},
      {amount: 0, liters: 0.5}
    ]
    const serializedExpected = JSON.stringify(expected)

    expect(seializedValue).toBe(serializedExpected)
  })

  it('For 2.5 liters required should have the following amounts of paint cans: 2.5L X1. The others must have 0 in amounts', () => {
    const value = getRecommendations(paintCansMock, 2.5)
    const seializedValue = JSON.stringify(value)

    const expected: PaintCans = [
      {amount: 0, liters: 18},
      {amount: 0, liters: 3.6},
      {amount: 1, liters: 2.5},
      {amount: 0, liters: 0.5}
    ]
    const serializedExpected = JSON.stringify(expected)

    expect(seializedValue).toBe(serializedExpected)
  })

  it('For 18 liters required should have the following amounts of paint cans: 18L X1. The others must have 0 in amounts', () => {
    const value = getRecommendations(paintCansMock, 18)
    const seializedValue = JSON.stringify(value)

    const expected: PaintCans = [
      {amount: 1, liters: 18},
      {amount: 0, liters: 3.6},
      {amount: 0, liters: 2.5},
      {amount: 0, liters: 0.5}
    ]
    const serializedExpected = JSON.stringify(expected)

    expect(seializedValue).toBe(serializedExpected)
  })

  it('For 0.1 liters required should have the following amounts of paint cans: 0.5L X1. The others must have 0 in amounts', () => {
    const value = getRecommendations(paintCansMock, 0.1)
    const seializedValue = JSON.stringify(value)

    const expected: PaintCans = [
      {amount: 0, liters: 18},
      {amount: 0, liters: 3.6},
      {amount: 0, liters: 2.5},
      {amount: 1, liters: 0.5}
    ]
    const serializedExpected = JSON.stringify(expected)

    expect(seializedValue).toBe(serializedExpected)
  })

  it('For 0.4 liters required should have the following amounts of paint cans: 0.5L X1. The others must have 0 in amounts', () => {
    const value = getRecommendations(paintCansMock, 0.4)
    const seializedValue = JSON.stringify(value)

    const expected: PaintCans = [
      {amount: 0, liters: 18},
      {amount: 0, liters: 3.6},
      {amount: 0, liters: 2.5},
      {amount: 1, liters: 0.5}
    ]
    const serializedExpected = JSON.stringify(expected)

    expect(seializedValue).toBe(serializedExpected)
  })

  it('For 24.6 liters required should have the following amounts of paint cans: 0.5L X1. The others must have 0 in amounts', () => {
    const value = getRecommendations(paintCansMock, 24.6)
    const seializedValue = JSON.stringify(value)

    const expected: PaintCans = [
      {amount: 1, liters: 18},
      {amount: 1, liters: 3.6},
      {amount: 1, liters: 2.5},
      {amount: 1, liters: 0.5}
    ]
    const serializedExpected = JSON.stringify(expected)

    expect(seializedValue).toBe(serializedExpected)
  })

  it('For 24.7 liters required should have the following amounts of paint cans: 0.5L X1. The others must have 0 in amounts', () => {
    const value = getRecommendations(paintCansMock, 24.7)
    const seializedValue = JSON.stringify(value)

    const expected: PaintCans = [
      {amount: 1, liters: 18},
      {amount: 1, liters: 3.6},
      {amount: 1, liters: 2.5},
      {amount: 2, liters: 0.5}
    ]
    const serializedExpected = JSON.stringify(expected)

    expect(seializedValue).toBe(serializedExpected)
  })
})