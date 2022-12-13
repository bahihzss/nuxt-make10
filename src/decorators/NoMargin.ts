import { DecoratorFunction } from '@storybook/csf'
import { VueFramework } from '@storybook/vue3'

export const NoMargin: DecoratorFunction<VueFramework> = () => ({
  template: `
    <div class='-m-4'><story/></div>
  `,
})
