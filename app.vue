<script setup lang="ts">
const colorMode = useColorMode();
</script>

<template>
  <div font-sans relative h-screen overflow-y-scroll snap-y snap-mandatory>
    <div fixed right-8 top-4 text-xl cursor-pointer>
      <div v-if="colorMode.value === 'light'" class="i-material-symbols-dark-mode-outline" @click="colorMode.value = 'dark'" />
      <div v-else class="i-material-symbols-light-mode-outline" @click="colorMode.value = 'light'" />
    </div>
    <div h-screen py-6 px-14 snap-start>
      <h1>Mellow Theme Design</h1>
    </div>
    <div h-screen py-6 px-14 snap-start>
      <h1>Colors</h1>
    </div>
    <div h-screen py-6 px-14 snap-start>
      <h1>Typography</h1>
    </div>
    <div h-screen py-6 px-14 snap-start>
      <h1>Icons</h1>
    </div>
  </div>
</template>
