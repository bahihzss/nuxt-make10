<script setup lang="ts">
  import { computed } from 'vue'

  const props = defineProps<{
    icon: string
    inline?: boolean
  }>()

  const classNames = computed(() => ({
    'MtIcon-inline': props.inline,
  }))
</script>

<template>
  <svg class="MtIcon" :class="classNames" viewBox="0 0 24 24">
    <path :d="icon" />
  </svg>
</template>

<style scoped>
  .MtIcon {
    @apply fill-current;
    @apply h-[1em] w-auto;
  }

  .MtIcon-inline {
    @apply inline-block align-text-bottom;
  }
</style>
