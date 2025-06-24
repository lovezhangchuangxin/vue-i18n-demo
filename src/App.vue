<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
    <Title />
    <Content />

    <div class="flex justify-center">
      <button
        class="mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 dark:bg-indigo-700 dark:hover:bg-indigo-800"
        @click="toggleLocale"
      >
        {{ i18n.switch }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Content from "./components/Content.vue";
import Title from "./components/Title.vue";
import { i18n } from "./i18n/i18n";

const toggleLocale = () => {
  if (i18n.$locale.value === "zh") {
    i18n.$locale.value = "en";
  } else {
    i18n.$locale.value = "zh";
  }
  console.log(111);
};
</script>

<style scoped></style>
