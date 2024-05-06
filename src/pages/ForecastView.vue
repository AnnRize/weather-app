<script setup lang="ts">
import { WeatherService } from "@/api/weather.service";
import ForecastList from "@/components/ForecastList.vue";
import { useStore } from "@/stores/root.store";
import type { ForecastResponse, ForecastWeather } from "@/types/weatherType";
import { useQuery } from "@tanstack/vue-query";

const {
   coordsStore: { coordinates },
} = useStore();

const {
   data: forecast,
   isLoading,
   isError,
} = useQuery({
   queryKey: ["forecast", coordinates.latitude, coordinates.longitude],
   queryFn: async () => {
      console.log("load");
      return await WeatherService.getForecast();
   },
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
   min-height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   padding-block: 50px;
}
</style>
