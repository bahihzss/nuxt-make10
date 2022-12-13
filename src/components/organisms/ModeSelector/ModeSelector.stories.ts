import { ref } from 'vue'
import type { Meta, Story } from '@storybook/vue3'
import { ModeSelector } from './'

const meta: Meta<typeof ModeSelector> = {
  component: ModeSelector,
}
export default meta

const Template: Story<typeof ModeSelector> = (args) => ({
  components: { ModeSelector },
  setup() {
    const mode = ref(args.mode)
    return { mode }
  },
  template: `
    <ModeSelector v-model:mode="mode"/>`,
})

export const FormulasMode = Template.bind({})
FormulasMode.args = {
  mode: 'formulas',
}

export const ResolvableMode = Template.bind({})
ResolvableMode.args = {
  mode: 'resolvable',
}
