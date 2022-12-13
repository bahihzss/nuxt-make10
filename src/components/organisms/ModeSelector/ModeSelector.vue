<script setup lang="ts">
  import MtButton from '~/components/atoms/MtButton/MtButton.vue'
  import MtContainer from '~/components/atoms/MtContainer/MtContainer.vue'

  type Mode = 'formulas' | 'resolvable'

  const props = defineProps<{
    mode: Mode
  }>()

  const emit = defineEmits<{
    (e: 'update:mode', mode: Mode): void
  }>()

  const buttonColor = (mode: Mode) => {
    return props.mode === mode ? 'primary' : 'secondary'
  }
</script>

<template>
  <MtContainer class="ModeSelector">
    <MtButton
      :color="buttonColor('formulas')"
      @click="emit('update:mode', 'formulas')"
      >式を出す
    </MtButton>
    <MtButton
      :color="buttonColor('resolvable')"
      @click="emit('update:mode', 'resolvable')"
      >答えある？
    </MtButton>
  </MtContainer>
</template>

<style scoped>
  .ModeSelector {
    @apply flex gap-3;
  }
</style>
