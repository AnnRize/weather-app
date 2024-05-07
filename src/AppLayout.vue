<script lang="ts" setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
   <div :class="$style.container">
      <Header />
      <main>
         <RouterView />
      </main>
   </div>
</template>

<style lang="scss" module scoped>
.container {
   min-height: 100vh;

   main {
      flex: 1;
   }
}
</style>
