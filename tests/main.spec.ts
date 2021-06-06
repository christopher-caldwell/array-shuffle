import { shuffle } from '@/index'

const baseNumberArray = [1, 2, 3]
const baseStringArray = ['1', '2', '3']
const baseObjectArray = [{ one: '1' }, { one: '2' }, { one: '3' }]

describe('Shuffling number array', () => {
  it('The original arrays should be the same', () => {
    expect(baseNumberArray).toStrictEqual(baseNumberArray)
  })
  it('Shuffled arrays should be different when passed unique flag', () => {
    const shuffled = shuffle([...baseNumberArray], { shouldEnsureUnique: true })
    expect(baseNumberArray).not.toStrictEqual(shuffled)
  })
  // Cannot test uniqueness here as there is potential for the shuffled set to be the same
  it('Shuffled arrays should not error out', () => {
    const main = (): void => {
      shuffle([...baseNumberArray])
    }
    expect(main).not.toThrowError()
  })
})

describe('Shuffling string array', () => {
  it('The original arrays should be the same', () => {
    expect(baseStringArray).toStrictEqual(baseStringArray)
  })
  it('Shuffled arrays should be different when passed unique flag', () => {
    const shuffled = shuffle([...baseStringArray], { shouldEnsureUnique: true })
    expect(baseStringArray).not.toStrictEqual(shuffled)
  })
  // Cannot test uniqueness here as there is potential for the shuffled set to be the same
  it('Shuffled arrays should not error out', () => {
    const main = (): void => {
      shuffle([...baseStringArray])
    }
    expect(main).not.toThrowError()
  })
})

describe('Shuffling object arrays', () => {
  it('The original arrays should be the same', () => {
    expect(baseObjectArray).toStrictEqual(baseObjectArray)
  })
  it('Shuffled arrays should be different when passed unique flag', () => {
    const shuffled = shuffle([...baseStringArray], { shouldEnsureUnique: true })
    expect(baseObjectArray).not.toStrictEqual(shuffled)
  })
  // Cannot test uniqueness here as there is potential for the shuffled set to be the same
  it('Shuffled arrays should not error out', () => {
    const main = (): void => {
      shuffle([...baseObjectArray])
    }
    expect(main).not.toThrowError()
  })
})
