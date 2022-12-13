import { NumberToken, OperatorToken, parseToTree } from '~/lib/rpn'
import { permutations } from '~/lib/permutations'

const operators: OperatorToken[] = ['+', '-', '*', '/']

/**
 * 演算子の組み合わせをすべて返す
 */
const getOperators = (count: number): OperatorToken[][] => {
  if (count === 1) {
    return operators.map((o) => [o])
  }

  return operators.reduce<OperatorToken[][]>((sub, operator) => {
    return [...sub, ...getOperators(count - 1).map((ol) => [operator, ...ol])]
  }, [])
}

/**
 * 演算子の分布一覧を返す
 */
const getFormats = (
  length: number,
  count = length - 1,
  turn = 0,
): number[][] => {
  if (length === 1) {
    return [[count]]
  }
  const result: number[][] = []

  for (let i = 0; i <= turn; ++i) {
    if (i) {
      --count
    }
    if (count !== 0) {
      getFormats(length - 1, count, turn + 1).forEach((format) => {
        result.push([i].concat(format))
      })
    }
  }

  return result
}

/**
 * 任意の数列に対する四則計算の式のリストを、逆ポーランド記法で生成する
 */
export const generateAllFormulas = (numbers: NumberToken[]): string[] => {
  /**
   * 演算子の組み合わせ一覧
   * @type {Array.<string>}
   */
  const operatorList = getOperators(numbers.length - 1)

  /**
   * 演算子の分布一覧
   * @type {Array.<number>}
   */
  const formatList = getFormats(numbers.length)

  const result: string[] = []

  // すべての演算子一覧をすべての分布一覧に照らし合わせて任意の数列に配置
  operatorList.forEach((operators) => {
    formatList.forEach((format) => {
      let formula = ''
      const _operators = [...operators]

      format.forEach((n, i) => {
        const unit: string[] = [numbers[i]]
        if (n) {
          unit.push(_operators.splice(0, n).join(' '))
        }

        formula = formula ? [formula, unit.join(' ')].join(' ') : unit.join(' ')

        if (i === numbers.length - 1) {
          if (!result.includes(formula)) {
            result.push(formula)
          }
        }
      })
    })
  })

  return result
}

export const make10 = (numbers: NumberToken[]) => {
  const formulas = permutations(numbers).map(generateAllFormulas).flat()
  const tree = formulas.map(parseToTree)

  return tree.reduce<string[]>((result, rootNode) => {
    if (rootNode.toNumber() === 10) {
      return [...new Set([...result, rootNode.toString()])]
    }

    return result
  }, [])
}
