<script lang="ts" setup>
import type { ForecastWeather } from "@/types/weatherType";
import { getTemp } from "@/utils/getTemp";
import { timestampToTime } from "@/utils/timestampToTime";

interface ForecastDayProps {
   day: ForecastWeather;
}

const { day } = defineProps<ForecastDayProps>();
</script>

<template>
   <div :class="$style.tempWrapper">
      <p>
         {{ timestampToTime(day.dt) }}
      </p>
      <p>{{ getTemp(day.main.temp) }}&deg</p>
   </div>
   <div :class="$style.descriptionWrapper">
      <img
         :src="`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`"
         :alt="day.weather[0].description"
         :title="day.weather[0].description"
      />
      <div :class="$style.description">
         {{ day.weather[0].description }}
      </div>
   </div>
   <div :class="$style.pressure">{{ day.main.pressure }}</div>
   <div :class="$style.humidity">{{ day.main.humidity }}%</div>
   <div :class="$style.wind">{{ day.wind.speed }}</div>
   <div :class="$style.feelsLike">{{ getTemp(day.main.feels_like) }}&deg</div>
</template>

<style module lang="scss" scoped>
.tempWrapper {
   display: flex;
   gap: var(--sm-gap);
   flex-wrap: wrap;
   justify-content: center;
}

.descriptionWrapper {
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;

   > img {
      max-width: 80px;
      width: 100%;
   }

   .description {
      text-align: center;
      &::first-letter {
         text-transform: uppercase;
      }
   }
}

.pressure {
   justify-self: center;
}
.humidity {
   justify-self: center;
}
.wind {
   justify-self: center;
}
.feelsLike {
   justify-self: center;
}

@media (max-width: 620px) {
   .description {
      display: none;
   }
   .feelsLike {
      display: none;
   }
}
</style>
