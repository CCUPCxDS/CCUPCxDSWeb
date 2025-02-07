<script setup lang="ts">
import Navbar from '@/components/navbar.vue'
import Footer from '@/components/footer.vue'
import About from '@/views/about.vue'
import Cover from '@/views/cover.vue'
import Join from '@/views/join.vue'
import Contact from '@/views/contact.vue'
import QA from '@/views/qa.vue'
</script>

<template>
  <div>
    <Navbar/>
    <div class="relative flex flex-col justify-center text-center items-center min-h-[calc(100vh-6rem)] bg-gradient-to-br from-purple-100 via-pink-200 to-red-300">
      <Cover />
      <div class="w-full flex flex-col justify-center items-center py-3">
        <About />
        <QA />
        <Join />
        <Contact />
        <div>
          <a href="#" class="p-3 space-y-3 text-amber-700 hover:text-amber-500 after:content-['_↑']">
            Go to top
          </a>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>

</style>
