<script lang="ts" setup>
import { WeatherService } from "@/api/weather.service";
import WeatherCard from "@/components/WeatherCard.vue";
import { useQuery } from "@tanstack/vue-query";

const {
   data: weather,
   isLoading,
   isError,
} = useQuery({
   queryKey: ["current"],
   queryFn: async () => await WeatherService.getCurrent(),
});
</script>

<template>
   <div v-if="isLoading">Loading...</div>
   <div v-else-if="isError">Error</div>
   <div v-else-if="weather" :class="$style.container">
      <WeatherCard :weather="weather" />
   </div>
</template>

<style lang="scss" module scoped>
.container {
   min-height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
}
</style>
