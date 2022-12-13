import type { Meta, Story } from '@storybook/vue3'
import { FormulaList, FormulaListItem } from './'
import { useMake10 } from '~/composables/useMake10'

const meta: Meta<typeof FormulaList> = {
  component: FormulaList,
}
export default meta

const Template: Story<typeof FormulaList> = () => ({
  components: { FormulaList, FormulaListItem },
  setup() {
    const { numbers, results } = useMake10()
    numbers.value = ['1', '7', '7', '4']

    return { results }
  },
  template: `
    <FormulaList>
    <FormulaListItem
      v-for="formula in results"
      :key="formula"
      :formula="formula"
    />
    </FormulaList>`,
})

export const Basic = Template.bind({})
Basic.args = {}
