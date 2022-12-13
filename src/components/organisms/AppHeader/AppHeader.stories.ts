import type { Meta, Story } from '@storybook/vue3'
import { AppHeader } from './'
import { NoMargin } from '~/decorators/NoMargin'

const meta: Meta<typeof AppHeader> = {
  component: AppHeader,
  decorators: [NoMargin],
}
export default meta

const Template: Story<typeof AppHeader> = (args) => ({
  components: { AppHeader },
  setup() {
    return { args }
  },
  template: `
    <AppHeader v-bind="args"/>`,
})

export const Basic = Template.bind({})
