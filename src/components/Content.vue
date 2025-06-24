<template>
  <div
    class="text-lg text-center text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto px-4 py-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
  >
    {{ i18n.content }}
  </div>
</template>

<script setup lang="ts">
import { i18n } from "../i18n/i18n";
</script>

<style scoped></style>
