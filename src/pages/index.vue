<script lang="ts" setup>
  import { useMake10 } from '~/composables/useMake10'
  import {
    FormulaList,
    FormulaListItem,
  } from '~/components/organisms/FormulaList'

  const { results } = useMake10()
</script>

<template>
  <Head>
    <Title>Make 10 - 10パズルの答えをみる</Title>
  </Head>
  <FormulaList>
    <FormulaListItem v-for="result in results" :key="result" :formula="result">
      {{ result }}
    </FormulaListItem>
  </FormulaList>
</template>
