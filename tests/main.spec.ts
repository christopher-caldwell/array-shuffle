import { shuffle } from '@/index'

const baseNumberArray = [1,2,3]
const baseStringArray = ['1','2','3']
const baseObjectArray = [{ one: '1' }, { one: '2' }, { one: '3' }]

describe('Shuffling number array', () => {
  it('The original arrays should be the same', () => {
    expect(baseNumberArray).toStrictEqual(baseNumberArray)
  })
  it('Shuffled arrays should be different', () => {
    const shuffled = shuffle([...baseNumberArray])
    expect(baseNumberArray).not.toStrictEqual(shuffled)
  })
})

describe('Shuffling string array', () => {
  it('The original arrays should be the same', () => {
    expect(baseStringArray).toStrictEqual(baseStringArray)
  })
  it('Shuffled arrays should be different', () => {
    const shuffled = shuffle([...baseStringArray])
    expect(baseStringArray).not.toStrictEqual(shuffled)
  })
})

describe('Shuffling object arrays', () => {
  it('The original arrays should be the same', () => {
    expect(baseObjectArray).toStrictEqual(baseObjectArray)
  })
  it('Shuffled arrays should be different', () => {
    const shuffled = shuffle([...baseStringArray])
    expect(baseObjectArray).not.toStrictEqual(shuffled)
  })
})
