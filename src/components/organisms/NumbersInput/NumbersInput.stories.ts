import { Meta, Story } from '@storybook/vue3'
import { ref } from 'vue'
import { action } from '@storybook/addon-actions'
import { NumbersInput } from './'

const meta: Meta<typeof NumbersInput> = {
  component: NumbersInput,
}
export default meta

const Template: Story<typeof NumbersInput> = () => ({
  components: { NumbersInput },

  setup() {
    const numbers = ref(['1', '2', '3', '4'])
    const handleUpdate = (value: string[]) => {
      action('update:numbers')(value)
      numbers.value = value
    }

    return {
      numbers,
      handleUpdate,
    }
  },

  template: `
    <NumbersInput
      :numbers='numbers'
      @update:numbers='handleUpdate'
    />
  `,
})

export const Basic = Template.bind({})
