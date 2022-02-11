import getPaintCanAmount from "../.."

describe('Should get the interger part of the current paint can amount ignoring decimals', () => {
  it('Should get 3 integer part from 3.2833', () => {
    const value = getPaintCanAmount(3.2833)
    const expected = 3

    expect(value).toBe(expected)
  })

  it('Should get 6 integer part from 6.26', () => {
    const value = getPaintCanAmount(6.26)
    const expected = 6

    expect(value).toBe(expected)
  })

  it('Should get 14 integer part from 14.111114', () => {
    const value = getPaintCanAmount(14.111114)
    const expected = 14

    expect(value).toBe(expected)
  })

  it('Should get 9 integer part from 9.299', () => {
    const value = getPaintCanAmount(9.299)
    const expected = 9

    expect(value).toBe(expected)
  })

  it('Should get 23930 integer part from 23930.10', () => {
    const value = getPaintCanAmount(23930.10)
    const expected = 23930

    expect(value).toBe(expected)
  })

  it('Should get 22 integer part from 22', () => {
    const value = getPaintCanAmount(22)
    const expected = 22

    expect(value).toBe(expected)
  })
})