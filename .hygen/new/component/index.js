/**
 * yarn run make:component --tag=button
 */
module.exports = {
  prompt: async ({ inquirer, args }) => {
    const questions = [
      {
        type: 'select',
        name: 'category',
        message: 'レイヤーを選択してください',
        choices: ['atoms', 'molecules', 'organisms', 'templates'],
      },
      {
        type: 'input',
        name: 'component_name',
        message: 'コンポーネント名を入力してください',
      },
      ({ category }) => ({
        type: 'confirm',
        name: 'have_style',
        message: 'スタイルは必要ですか？',
        default: ['atoms', 'molecules'].includes(category),
      }),
      {
        type: 'confirm',
        name: 'have_props',
        message: 'プロパティは必要ですか？',
        default: true,
      },
      ({ category }) => ({
        type: 'confirm',
        name: 'have_children',
        message: '子要素を受け取りますか？',
        default: ['atoms', 'molecules'].includes(category),
      }),
    ]

    const answers = await prompts(inquirer, questions)
    const { category, component_name } = answers

    const path = `${category}/${component_name}`
    const abs_path = `src/components/${path}`
    const tag = args.tag ? args.tag : 'div'

    return { ...answers, path, abs_path, tag }
  },
}

const prompts = async (inquirer, questions) => {
  const answers = {}

  for (const _question of questions) {
    const question =
      typeof _question === 'function' ? _question(answers) : _question
    Object.assign(answers, await inquirer.prompt(question))
  }

  return answers
}
