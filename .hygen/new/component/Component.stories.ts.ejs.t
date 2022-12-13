---
to: <%= abs_path %>/<%= component_name %>.stories.ts
---
import type { Meta, Story } from '@storybook/vue3'
import { <%= component_name %> } from './'

const meta: Meta<typeof <%= component_name %>> = {
  component: <%= component_name %>,
}
export default meta

<% if (have_children) { -%>
const Template: Story<typeof <%= component_name %>> = ({ children, ...args }) => ({
  components: { <%= component_name %> },
  setup() {
    return { children, args }
  },
  template: `<%- `<${component_name} v-bind="args">` %>
    {{children}}
  <%- `</${component_name}>` %>`
})
<% } else { -%>
const Template: Story<typeof <%= component_name %>> = (args) => ({
  components: { <%= component_name %> },
  setup() {
    return { args }
  },
  template: `<%- `<${component_name} v-bind="args" />` %>`
})
<% } -%>

export const Basic = Template.bind({})
<% if (have_props || have_children) { -%>
Basic.args = {
<% if (have_children) { -%>
  children: 'サンプル',
<% } -%>
}
<% } -%>