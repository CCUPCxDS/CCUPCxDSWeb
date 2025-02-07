<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

interface Question {
  question: string;
  answer: string;
}

const questions = ref<Question[]>([])

onMounted(async () => {
  const response = await axios.get('/qa.json')
  questions.value = response.data
})

</script>

<template>
  <div id="qa" class="flex flex-col justify-center w-[max(10rem, 90%)] items-center space-y-4 mx-3 my-3">
    <h1 class="text-4xl font-bold text-black">Q&A</h1>
    <div v-for="(item, index) in questions" :key="index" class="qa-item">
      <h2>{{ item.question }}</h2>
      <p>{{ item.answer }}</p>
    </div>
  </div>
</template>
