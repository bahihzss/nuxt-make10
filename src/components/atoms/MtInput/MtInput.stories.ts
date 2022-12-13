import { Meta, Story } from '@storybook/vue3'
import { ref } from 'vue'
import { action } from '@storybook/addon-actions'
import { MtInput } from './'

const meta: Meta<typeof MtInput> = {
  component: MtInput,
}
export default meta

const Template: Story<typeof MtInput> = (args) => ({
  components: { MtInput },

  setup() {
    const inputValue = ref('1')

    return {
      inputValue,
      handleUpdate: (value: string) => {
        action('input')(value)
        inputValue.value = value
      },
      args,
    }
  },

  template: `
    <div class='w-36'>
    <MtInput
      :value='inputValue'
      @input='handleInput'
      v-bind='args'
    />
    </div>
  `,
})
Template.args = {
  align: 'left',
}

export const Basic = Template.bind({})

export const Center = Template.bind({})
Center.args = {
  align: 'center',
}
