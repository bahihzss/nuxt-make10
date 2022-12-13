<script setup lang="ts"></script>

<template>
  <header class="MtHeader">
    <slot />
  </header>
</template>

<style scoped>
  .MtHeader {
    @apply py-3.5;
    @apply text-white;
    @apply bg-gray-900;
  }
</style>
