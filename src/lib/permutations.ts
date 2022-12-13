export const permutations = <T>(array: T[]): T[][] => {
  const result: T[][] = []

  if (array.length === 1) {
    result.push(array)
    return result
  }

  for (let i = 0; i < array.length; i++) {
    const firstElement = array.slice(i, i + 1)
    const restElements = [...array.slice(0, i), ...array.slice(i + 1)]
    const innerPermutations = permutations(restElements)
    for (let j = 0; j < innerPermutations.length; j++) {
      result.push([...firstElement, ...innerPermutations[j]])
    }
  }

  return result
}
