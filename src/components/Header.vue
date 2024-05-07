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
   padding: 20px;
   border-bottom: 2px solid white;
   display: flex;
   justify-content: center;
   position: sticky;
   top: 0;
   background: linear-gradient(
      45deg,
      rgba(255, 0, 204, 1) 0%,
      rgba(255, 173, 0, 1) 100%
   );

   .nav {
      display: flex;
      gap: 50px;
      font-size: 2rem;

      > a {
         position: relative;
         &::after {
            left: 0;
            bottom: 0;
            position: absolute;
            content: "";
            height: 2px;
            width: 0;
            background-color: black;
            transition: 0.2s ease-in-out;
         }
         &:hover::after {
            width: 100%;
         }
      }
   }
}
</style>
