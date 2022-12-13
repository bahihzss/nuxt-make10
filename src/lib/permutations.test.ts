import { describe, expect, test } from '@jest/globals'
import { permutations } from '~/lib/permutations'

describe('permutations', () => {
  const assertPermutation = (expected: number[][], actual: number[][]) => {
    const stringifiedExpected = expected.map((item) => item.join('_'))
    const stringifiedActual = expected.map((item) => item.join('_'))

    expect(actual).toHaveLength(expected.length)

    stringifiedExpected.forEach((stringifiedExpectedItem) => {
      expect(stringifiedActual.includes(stringifiedExpectedItem)).toBe(true)
    })
  }

  test('渡した配列の値で構成される全ての順列が返ってくる', () => {
    const expected = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]

    const actual = permutations([1, 2, 3])

    assertPermutation(expected, actual)
  })
})
