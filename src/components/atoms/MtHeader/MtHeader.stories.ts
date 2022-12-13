import type { Meta, Story } from '@storybook/vue3'
import { MtHeader } from './'
import { NoMargin } from '~/decorators/NoMargin'

const meta: Meta<typeof MtHeader> = {
  component: MtHeader,
  decorators: [NoMargin],
}
export default meta

const Template: Story<typeof MtHeader> = ({ children, ...args }) => ({
  components: { MtHeader },
  setup() {
    return { children, args }
  },
  template: `
    <MtHeader v-bind="args">
    {{ children }}
    </MtHeader>`,
})

export const Basic = Template.bind({})
Basic.args = {
  children: 'Sample',
}
