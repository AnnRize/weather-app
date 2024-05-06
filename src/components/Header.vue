<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<template>
   <header :class="$style.header">
      <nav :class="$style.nav">
         <RouterLink to="/"> Главная </RouterLink>
         <RouterLink to="/forecast"> Прогноз погоды </RouterLink>
      </nav>
   </header>
</template>

<style module lang="scss" scoped>
.header {
   max-width: 320px;
   padding: 50px;
   border-right: 2px solid white;
   display: flex;
   align-items: center;
   max-height: 100vh;
   position: sticky;
   top: 0;
   background: linear-gradient(
      45deg,
      rgba(255, 0, 204, 1) 0%,
      rgba(255, 173, 0, 1) 100%
   );

   .nav {
      display: flex;
      flex-direction: column;
      gap: 50px;
      font-size: 2rem;
      width: min-content;
   }
}
</style>
