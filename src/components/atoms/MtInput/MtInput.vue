<script setup lang="ts">
  import { computed, getCurrentInstance, ref, watch } from 'vue'

  const props = withDefaults(
    defineProps<{
      value: string
      align?: 'left' | 'center'
      selectOnFocus?: boolean
      focus?: boolean
    }>(),
    {
      align: 'left',
    },
  )

  const emit = defineEmits<{
    (e: 'input', value: string): void
    (e: 'update:focus', value: boolean): void
  }>()

  const inputElement = ref<HTMLInputElement>()
  const instance = getCurrentInstance()

  const handleInput = (event: InputEvent) => {
    if (event.target instanceof HTMLInputElement) {
      emit('input', event.target.value)

      instance?.proxy?.$nextTick(() => {
        instance?.proxy?.$forceUpdate()
      })
    }
  }

  const handleFocus = () => {
    if (props.selectOnFocus) {
      inputElement.value?.select()
    }

    emit('update:focus', true)
  }

  const handleBlur = () => {
    emit('update:focus', false)
  }

  const classNames = computed(() => ['MtInput-' + props.align])

  watch(
    () => props.focus,
    (newFocus, oldFocus) => {
      if (newFocus !== oldFocus) {
        newFocus ? inputElement.value?.focus() : inputElement.value?.blur()
      }
    },
  )
</script>

<template>
  <input
    ref="inputElement"
    class="MtInput"
    :class="classNames"
    :value="value"
    @input="handleInput"
    @focus="handleFocus"
    @blur="handleBlur"
  />
</template>

<style scoped>
  .MtInput {
    @apply w-full;
    @apply p-2;
    @apply text-2xl;
    @apply border border-black rounded-md;
  }

  .MtInput-center {
    @apply text-center;
  }
</style>
