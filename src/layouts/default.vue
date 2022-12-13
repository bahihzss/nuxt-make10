<script lang="ts" setup>
  import { useRoute, useRouter } from 'vue-router'
  import { watch, ref } from 'vue'
  import { NumbersInput } from '~/components/organisms/NumbersInput'
  import ModeSelector from '~/components/organisms/ModeSelector/ModeSelector.vue'

  const route = useRoute()
  const mode = ref(route.path === '/' ? 'formulas' : 'resolvable')

  const router = useRouter()
  watch(mode, (mode) => {
    if (mode === 'formulas') {
      return router.push('/')
    }
    if (mode === 'resolvable') {
      return router.push('/resolvable')
    }
  })
</script>

<template>
  <div class="DefaultLayout">
    <slot />
    <ModeSelector v-model:mode="mode" />
    <NumbersInput />
  </div>
</template>

<style scoped>
  .DefaultLayout {
    @apply overflow-hidden;
    @apply flex flex-col gap-5;
    @apply h-full pb-5;
  }
</style>
