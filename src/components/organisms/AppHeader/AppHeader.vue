<script setup lang="ts">
  import { AppLogo } from './'
  import { MtHeader } from '~/components/atoms/MtHeader'
  import { MtContainer } from '~/components/atoms/MtContainer'
</script>

<template>
  <MtHeader>
    <MtContainer class="AppHeader_inner">
      <NuxtLink to="/">
        <AppLogo />
      </NuxtLink>
    </MtContainer>
  </MtHeader>
</template>

<style scoped>
  .AppHeader_inner {
    @apply flex;
  }
</style>
