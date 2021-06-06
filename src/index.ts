/** Shuffles the order of a given array */
export const shuffle = <ArrayItem>(
  originalSet: ArrayItem[],
  { shouldEnsureUnique }: ShuffleOptions = {}
): ArrayItem[] => {
  const mutableCopy = [...originalSet]
  const maxIndex = mutableCopy.length - 1
  for (let iterator = 0; iterator < maxIndex; iterator++) {
    const randomIndex = Math.floor(Math.random() * maxIndex)
    const currentItem = mutableCopy[iterator]
    mutableCopy[iterator] = mutableCopy[randomIndex]
    mutableCopy[randomIndex] = currentItem
  }
  if (shouldEnsureUnique) {
    if (JSON.stringify(originalSet) !== JSON.stringify(mutableCopy)) return mutableCopy
    return shuffle(originalSet, { shouldEnsureUnique })
  }
  return mutableCopy
}

export interface ShuffleOptions {
  /** If present, the returned result will not match the original set. The chances are low, but the original set could be returned due to RNG. */
  shouldEnsureUnique?: boolean
}
