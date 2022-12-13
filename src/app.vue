<script setup lang="ts">
  import AppHeader from '~/components/organisms/AppHeader/AppHeader.vue'
</script>

<template>
  <div class="App">
    <AppHeader />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style scoped>
  .App {
    @apply flex flex-col gap-5;
    @apply h-screen;

    @apply lg:max-h-[667px] lg:max-w-[375px];
    @apply lg:m-auto lg:mt-20;
    @apply lg:border lg:border-black lg:shadow;
  }
</style>
