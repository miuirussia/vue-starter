<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";

const test = ref<string>("TEEEEST");
</script>

<template lang="pug">
  div(css:flex css:justify="center")
    a(href="https://vite.dev" target="_blank")
      img(src="/vite.svg" class="logo" alt="Vite logo")
    a(href="https://vuejs.org/" target="_blank")
      img(src="./assets/vue.svg" class="logo vue" alt="Vue logo")
  HelloWorld(msg="Vite + Vue")
  div {{ test }}
</template>

<style scoped>
.logo {
  height: 200px;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
