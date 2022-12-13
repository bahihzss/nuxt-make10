<script lang="ts" setup>
  import { computed } from 'vue'
  import { mdiRefresh } from '@mdi/js'
  import { useMake10 } from '~/composables/useMake10'
  import { MtContainer } from '~/components/atoms/MtContainer'
  import MtIcon from '~/components/atoms/MtIcon/MtIcon.vue'

  const { hasAnswer, numbers, results } = useMake10()

  const joinedNumbers = computed(() => numbers.value.join(' '))
</script>

<template>
  <Head>
    <Title>Make 10 - 答えある？</Title>
  </Head>
  <MtContainer class="PageResolvable">
    <div class="PageResolvable_inner">
      {{ hasAnswer ? 'あり🥳' : 'なし😭' }}
      <div v-if="hasAnswer" class="PageResolvable_messages">
        <div class="PageResolvable_message">
          {{ joinedNumbers }} には {{ results.length }} 通りの解き方があるよ。
        </div>
        <div class="PageResolvable_message">
          答えが出るまでいろんなパターンを考えてみよう！
        </div>
      </div>
      <div v-else class="PageResolvable_messages">
        <div class="PageResolvable_message">
          {{ joinedNumbers }} からはどうやっても 10 を作れないみたい・・・
        </div>
        <div class="PageResolvable_message">
          <MtIcon :icon="mdiRefresh" inline />
          を押して、次の問題にチャレンジしよう！
        </div>
      </div>
    </div>
  </MtContainer>
</template>

<style scoped>
  .PageResolvable {
    @apply h-full;
  }

  .PageResolvable_inner {
    @apply flex flex-col gap-10 justify-center items-center;
    @apply h-full;
    @apply text-5xl;
    @apply border border-gray-900 rounded-md;
  }

  .PageResolvable_messages {
    @apply flex flex-col gap-3;
  }

  .PageResolvable_message {
    @apply px-9;
    @apply text-xl;
  }
</style>
