import type { Meta, Story } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'
import { MtButton } from './'

const meta: Meta<typeof MtButton> = {
  component: MtButton,
}
export default meta

const Template: Story<typeof MtButton> = ({ children, ...args }) => ({
  components: { MtButton },
  setup() {
    return { children, args, handleClick: action('click') }
  },
  template: `
    <MtButton
      v-bind="args"
      @click="handleClick"
    >
    {{ children }}
    </MtButton>`,
})

export const Basic = Template.bind({})
Basic.args = {
  children: 'サンプル',
}
