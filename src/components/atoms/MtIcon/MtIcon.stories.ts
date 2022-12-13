import type { Meta, Story } from '@storybook/vue3'
import { mdiRefresh } from '@mdi/js'
import { MtIcon } from './'

const meta: Meta<typeof MtIcon> = {
  component: MtIcon,
}
export default meta

const Template: Story<typeof MtIcon> = (args) => ({
  components: { MtIcon },
  setup() {
    return { args }
  },
  template: `
    <MtIcon v-bind="args"/>`,
})

export const Basic = Template.bind({})
Basic.args = {
  icon: mdiRefresh,
}
