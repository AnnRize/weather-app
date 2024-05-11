<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { useStore } from "@/stores/root.store";
import { WeatherService } from "@/api/weather.service";
import ForecastList from "@/components/ForecastList.vue";
import type { ForecastResponse, ForecastWeather } from "@/types/weatherType";

const {
   coordsStore: { coordinates },
} = useStore();

const {
   data: forecast,
   isLoading,
   isError,
} = useQuery({
   queryKey: ["forecast", coordinates],
   queryFn: async () =>
      await WeatherService.getForecast(
         coordinates.latitude,
         coordinates.longitude,
      ),
   select(data): ForecastResponse<ForecastWeather[][]> {
      if (!data) {
         return data;
      } else {
         let newList: ForecastWeather[][] = [];

         let listObject = Object.groupBy(
            data.list,
            ({ dt_txt }) => dt_txt.split(" ")[0],
         );

         for (const key in listObject) {
            newList.push(listObject[key]!);
         }

         return { ...data, list: newList };
      }
   },
});
</script>

<template>
   <div v-if="isLoading">Loading...</div>
   <div v-else-if="isError">Error</div>
   <div v-else-if="forecast" :class="$style.container">
      <ForecastList :forecast="forecast" />
   </div>
</template>

<style lang="scss" module scoped>
.container {
   min-height: calc(--container-minH);
   display: flex;
   justify-content: center;
   align-items: center;
   padding-block: 50px;
}
</style>
