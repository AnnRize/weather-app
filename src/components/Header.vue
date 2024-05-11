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
   border-bottom: var(--sm-border);
   display: flex;
   justify-content: center;
   position: sticky;
   top: 0;
   background: var(--header-background);
}

.nav {
   display: flex;
   align-items: center;
   text-align: center;
   gap: 50px;
   font-size: 1.5rem;

   > a {
      position: relative;

      &::after {
         left: 0;
         bottom: 0;
         position: absolute;
         content: "";
         height: 2px;
         width: 0;
         background-color: var(--primary-clr);
         transition: 0.2s ease-in-out;
      }
   }
}

@media (hover: hover) {
   .nav {
      > a:hover::after {
         width: 100%;
      }
   }
}
</style>
