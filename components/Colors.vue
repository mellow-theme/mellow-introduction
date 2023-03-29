<script setup lang="ts">
import { colors } from "../constants";
</script>

<template>
  <h1 hd-xxxl hd-en>
    Colors
  </h1>
  <div v-for="color in Object.keys(colors)" :key="color">
    <p pg-l hd-en font-bold>
      {{ color.toUpperCase() }}
    </p>
    <div flex flex-wrap>
      <div v-for="(item, index) in colors[color]" :key="index">
        <div w-12 h-12 :style="{ 'background-color': item }" />
      </div>
    </div>
  </div>
</template>
