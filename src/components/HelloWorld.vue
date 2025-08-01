<script setup lang="ts">
import { useCounterStore } from "@/store/counter";
import { storeToRefs } from "pinia";

const props = defineProps<{ msg: string }>();

const counter = useCounterStore();
const { count, double } = storeToRefs(counter);
</script>

<template lang="pug">
  h1 {{ props.msg }}

  div.card
    button(type="button" @click="counter.increment") count is {{ count }}, double is {{ double }}
    p
      | Edit
      |
      code components/HelloWorld.vue
      |
      | to test HMR

  p
    | Check out
    |
    a(href="https://vuejs.org/guide/quick-start.html#local" target="_blank") create-vue
    | , the official Vue + Vite starter

  p
    | Learn more about IDE Support for Vue in the
    |
    a(href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank") Vue Docs Scaling up Guide
    | .
  p.read-the-docs Click on the Vite and Vue logos to learn more
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
