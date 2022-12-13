export type OperatorToken = '+' | '-' | '/' | '*'

enum Associativity {
  left,
  right,
  both,
}

export type NumberToken =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'

export const isNumberToken = (item: string): item is NumberToken => {
  return /^\d$/.test(item)
}

class NumberNode {
  constructor(private text: NumberToken) {}

  toString(): string {
    return this.text
  }

  toNumber(): number {
    return Number(this.text)
  }
}

interface Operator {
  precedence: number
  associativity: Associativity

  operate(left: number, right: number): number
}

const operators: Record<OperatorToken, Operator> = {
  '+': {
    precedence: 2,
    associativity: Associativity.both,
    operate: (left, right) => left + right,
  },
  '-': {
    precedence: 2,
    associativity: Associativity.left,
    operate: (left, right) => left - right,
  },
  '*': {
    precedence: 3,
    associativity: Associativity.both,
    operate: (left, right) => left * right,
  },
  '/': {
    precedence: 3,
    associativity: Associativity.left,
    operate: (left, right) => left / right,
  },
}

const isOperator = (item: string): item is OperatorToken => {
  return Object.keys(operators).includes(item)
}

class OperationNode {
  constructor(
    private operatorToken: OperatorToken,
    private operands: (NumberNode | OperationNode)[],
  ) {}

  toString(parentPrecedence = 0): string {
    const operator = operators[this.operatorToken]

    const leftAdd = operator.associativity === Associativity.right ? 0.01 : 0
    const rightAdd = operator.associativity === Associativity.left ? 0.01 : 0

    if (this.operands.length !== 2) {
      throw new Error('オペランドの数が不正です')
    }

    const [left, right] = this.operands
    const leftString =
      left instanceof OperationNode
        ? left.toString(operator.precedence + leftAdd)
        : left.toString()
    const rightString =
      right instanceof OperationNode
        ? right.toString(operator.precedence + rightAdd)
        : right.toString()

    const result = `${leftString} ${this.operatorToken} ${rightString}`

    if (parentPrecedence > operator.precedence) {
      return `( ${result} )`
    }
    return result
  }

  toNumber(): number {
    const operator = operators[this.operatorToken]

    if (this.operands.length !== 2) {
      throw new Error('オペランドの数が不正です')
    }

    const [left, right] = this.operands

    return operator.operate(left.toNumber(), right.toNumber())
  }
}

export const parseToTree = (rpnFormula: string): OperationNode | NumberNode => {
  const tokens = rpnFormula.split(' ')

  const nodes = tokens.reduce<(OperationNode | NumberNode)[]>(
    (stack, token) => {
      const _stack = [...stack]

      if (isNumberToken(token)) {
        return [..._stack, new NumberNode(token)]
      }

      if (isOperator(token) && _stack.length >= 2) {
        const right = _stack.pop()!
        const left = _stack.pop()!

        return [..._stack, new OperationNode(token, [left, right])]
      }

      throw new Error(`不正な式が渡されました: ${rpnFormula}`)
    },
    [],
  )

  if (nodes.length !== 1) {
    throw new Error(`オペレーターの数が不正です: ${rpnFormula}`)
  }

  return nodes[0]
}

export const calc = (rpnFormula: string): number => {
  const rootNode = parseToTree(rpnFormula)
  return rootNode.toNumber()
}
export const convertToInfix = (rpnFormula: string): string => {
  const rootNode = parseToTree(rpnFormula)
  return rootNode.toString()
}
