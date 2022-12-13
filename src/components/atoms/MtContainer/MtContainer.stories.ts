import type { Meta, Story } from '@storybook/vue3'
import { MtContainer } from './'
import { NoMargin } from '~/decorators/NoMargin'

const meta: Meta<typeof MtContainer> = {
  component: MtContainer,
  decorators: [NoMargin],
}
export default meta

const Template: Story<typeof MtContainer> = ({ children, ...args }) => ({
  components: { MtContainer },
  setup() {
    return { children, args }
  },
  template: `
    <MtContainer v-bind="args">
    {{ children }}
    </MtContainer>`,
})

export const Basic = Template.bind({})
Basic.args = {
  children: 'サンプル',
}
