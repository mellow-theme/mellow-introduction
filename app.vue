<script setup lang="ts">
const colorMode = useColorMode();
</script>

<template>
  <div font-sans relative h-screen overflow-y-scroll snap-y snap-mandatory>
    <div fixed right-8 top-4 text-xl cursor-pointer>
      <div v-if="colorMode.value === 'light'" class="i-material-symbols-dark-mode-outline" @click="colorMode.value = 'dark'" />
      <div v-else class="i-material-symbols-light-mode-outline" @click="colorMode.value = 'light'" />
    </div>
    <div h-screen snap-start>
      <div h-screen py-6 px-14 text-9xl hd-en font-extrabold flex flex-col justify-center gap-12>
        <span text-center>Mellow</span>
        <span flex items-center justify-center gap-4>
          <img src="mellow.svg" alt="logo">
          Theme
        </span>
        <span text-center>Design</span>
      </div>
    </div>
    <div h-screen py-6 px-14 snap-start>
      <Colors />
    </div>
    <div h-screen py-6 px-14 snap-start>
      <Typography />
    </div>
    <div h-screen py-6 px-14 snap-start>
      <Icons />
    </div>
  </div>
</template>
