<script lang="ts" setup>
  import { ref } from 'vue'
  import { mdiRefresh } from '@mdi/js'
  import { isNumberToken } from '~/lib/rpn'
  import { MtInput } from '~/components/atoms/MtInput'
  import { MtContainer } from '~/components/atoms/MtContainer'
  import { MtButton } from '~/components/atoms/MtButton'
  import { MtIcon } from '~/components/atoms/MtIcon'
  import { useMake10 } from '~/composables/useMake10'

  const { numbers, random } = useMake10()

  const focusPosition = ref(-1)
  const isFocus = (position: number) => {
    return focusPosition.value === position
  }
  const handleUpdateFocus = (position: number, isFocus: boolean) => {
    if (isFocus) {
      focusPosition.value = position
    }
  }

  const handleInputNumber = (position: number, value: string) => {
    if (position >= numbers.value.length) {
      throw new Error(`${numbers.value.length} つ以上の数字が指定されました`)
    }

    if (isNumberToken(value)) {
      numbers.value[position] = value
    }

    if (position === numbers.value.length - 1) {
      focusPosition.value = 0
    } else {
      focusPosition.value++
    }
  }
</script>

<template>
  <MtContainer class="NumbersInput">
    <MtInput
      v-for="(number, i) in numbers"
      :key="i"
      :value="number"
      align="center"
      select-on-focus
      pattern="\d*"
      :focus="isFocus(i)"
      @input="handleInputNumber(i, $event)"
      @update:focus="handleUpdateFocus(i, $event)"
    />
    <MtButton class="NumbersInput_randomButton" @click="random">
      <MtIcon :icon="mdiRefresh" />
    </MtButton>
  </MtContainer>
</template>

<style scoped>
  .NumbersInput {
    @apply flex gap-2;
  }

  .NumbersInput_randomButton {
    @apply flex justify-center;
    @apply max-w-[64px];
    @apply text-2xl;
  }
</style>
