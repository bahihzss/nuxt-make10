<script setup lang="ts">
  import { computed } from 'vue'
  import { MtContainer } from '~/components/atoms/MtContainer'
  import { useMake10 } from '~/composables/useMake10'

  const { numbers } = useMake10()

  const joinedNumbers = computed(() => numbers.value.join(' '))
</script>

<template>
  <MtContainer class="FormulaList">
    <div class="FormulaList_inner">
      <slot> {{ joinedNumbers }} を使って、10を作る数式はありません。</slot>
    </div>
  </MtContainer>
</template>

<style scoped>
  .FormulaList {
    @apply h-full;
    @apply overflow-hidden;
  }

  .FormulaList_inner {
    @apply overflow-y-auto;
    @apply flex flex-col gap-3;
    @apply h-full px-5 py-3;
    @apply border border-black rounded-md;
    @apply text-xl leading-8;
  }
</style>
