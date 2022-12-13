<script lang="ts" setup>
  import { computed } from 'vue'

  const props = defineProps<{
    formula: string
  }>()

  const formattedFormula = computed(() => {
    return props.formula.replace(/\*/g, '×').replace(/\//g, '÷')
  })
</script>

<template>
  <div class="FormulaListItem">
    <div class="FormulaListItem_formula">{{ formattedFormula }}</div>
    <div class="FormulaListItem_equal10">=&nbsp;10</div>
  </div>
</template>

<style scoped>
  .FormulaListItem {
    @apply flex;
    @apply font-khand text-2xl;
  }

  .FormulaListItem_formula {
    @apply flex-1;
  }

  .FormulaListItem_equal10 {
    @apply basis-1/2;
  }
</style>
