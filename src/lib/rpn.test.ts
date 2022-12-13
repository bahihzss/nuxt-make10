import { describe, expect, test } from '@jest/globals'
import { calc, convertToInfix } from '~/lib/rpn'

describe('calc', () => {
  test('正しい逆ポーランド記法式を計算できる', () => {
    expect(calc('1 2 + 3 +')).toBe(1 + 2 - 3)
    expect(calc('1 2 3 - +')).toBe(1 + 2 - 3)
    expect(calc('1 2 3 / +')).toBe(1 + 2 / 3)
  })

  test('誤った式がエラーになる', () => {
    expect(() => calc('1 + 2')).toThrow(
      new Error('不正な式が渡されました: 1 + 2'),
    )
    expect(() => calc('not formula')).toThrow(
      new Error('不正な式が渡されました: not formula'),
    )
  })

  test('演算子の数が足りないとエラーになる', () => {
    expect(() => calc('1 2')).toThrow(
      new Error('オペレーターの数が不正です: 1 2'),
    )
  })
})

describe('convertToInfix', () => {
  test('正しい逆ポーランド記法式を中置記法に変換できる', () => {
    expect(convertToInfix('1 2 + 3 +')).toBe('1 + 2 + 3')
    expect(convertToInfix('1 2 3 - +')).toBe('1 + 2 - 3')
    expect(convertToInfix('1 2 3 + /')).toBe('1 / ( 2 + 3 )')
  })

  test('誤った式がエラーになる', () => {
    expect(() => convertToInfix('1 + 2')).toThrow(
      new Error('不正な式が渡されました: 1 + 2'),
    )
    expect(() => convertToInfix('not formula')).toThrow(
      new Error('不正な式が渡されました: not formula'),
    )
  })

  test('演算子の数が足りないとエラーになる', () => {
    expect(() => convertToInfix('1 2')).toThrow(
      new Error('オペレーターの数が不正です: 1 2'),
    )
  })
})
