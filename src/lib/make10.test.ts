import { describe, expect, test } from '@jest/globals'
import { make10 } from './make10'

describe('make10', () => {
  test('make10: 1,1,5,8', () => {
    const actual = make10(['1', '1', '5', '8'])

    expect(actual).toHaveLength(1)
    expect(actual).toContain('8 / ( 1 - 1 / 5 )')
  })

  test('make10: 3,4,7,7', () => {
    const actual = make10(['3', '4', '7', '7'])

    expect(actual).toHaveLength(8)
    expect(actual).toContain('3 * 7 - 4 - 7')
    expect(actual).toContain('3 * 7 - 7 - 4')
    expect(actual).toContain('7 * 3 - 4 - 7')
    expect(actual).toContain('7 * 3 - 7 - 4')
    expect(actual).toContain('3 * 7 - ( 4 + 7 )')
    expect(actual).toContain('3 * 7 - ( 7 + 4 )')
    expect(actual).toContain('7 * 3 - ( 4 + 7 )')
    expect(actual).toContain('7 * 3 - ( 7 + 4 )')
  })
})
