<script setup lang="ts">
  import { computed } from 'vue'

  const props = withDefaults(
    defineProps<{
      color?: 'primary' | 'secondary'
    }>(),
    {
      color: 'primary',
    },
  )

  const classNames = computed(() => ['MtButton-' + props.color])

  const emit = defineEmits<{
    (e: 'click'): void
  }>()
</script>

<template>
  <button class="MtButton" :class="classNames" @click="emit('click')">
    <slot />
  </button>
</template>

<style scoped>
  .MtButton {
    @apply w-full px-5 py-3;
    @apply text-white;
    @apply rounded-md;
    @apply bg-gray-900;
    @apply border border-gray-900;
  }

  .MtButton-secondary {
    @apply text-black;
    @apply bg-transparent;
  }
</style>
