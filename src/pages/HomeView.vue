<script lang="ts" setup>
import { useQuery } from "@tanstack/vue-query";
import { useStore } from "@/stores/root.store";
import { WeatherService } from "@/api/weather.service";
import WeatherCard from "@/components/WeatherCard.vue";

const {
   coordsStore: { coordinates },
} = useStore();

const {
   data: weather,
   isLoading,
   isError,
} = useQuery({
   queryKey: ["current", coordinates],
   queryFn: async () =>
      await WeatherService.getCurrent(
         coordinates.latitude,
         coordinates.longitude,
      ),
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
   min-height: calc(100vh - 82px);
   display: flex;
   justify-content: center;
   align-items: center;
}
</style>
