import { ref, computed } from 'vue'
import { NumberToken } from '~/lib/rpn'
import { make10 } from '~/lib/make10'

const numbers = ref<NumberToken[]>(['1', '2', '3', '4'])
const results = computed(() => make10(numbers.value))
const hasAnswer = computed(() => results.value.length > 0)

const getRandomNumber = (): NumberToken => {
  return String(Math.floor(Math.random() * 10)) as NumberToken
}

const random = () => {
  numbers.value = [
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
  ]
}
export const useMake10 = () => {
  return { numbers, results, random, hasAnswer }
}
