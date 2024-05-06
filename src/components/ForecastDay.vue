<script lang="ts">
export default {
   inheritAttrs: false,
};

interface ForecastDayProps {
   day: ForecastWeather;
}
</script>

<script lang="ts" setup>
import type { ForecastWeather } from "@/types/weatherType";
import { getTemp } from "@/utils/getTemp";
import { timestampToTime } from "@/utils/timestampToTime";

const { day } = defineProps<ForecastDayProps>();
</script>

<template>
   <!-- <div :class="$style.row"> -->
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
         width="80"
      />
      <div :class="$style.description">
         {{ day.weather[0].description }}
      </div>
   </div>
   <div :class="$style.pressure">{{ day.main.pressure }}</div>
   <div :class="$style.humidity">{{ day.main.humidity }}%</div>
   <div :class="$style.wind">{{ day.wind.speed }}</div>
   <div :class="$style.feelsLike">{{ getTemp(day.main.feels_like) }}&deg</div>
   <!-- </div> -->
</template>

<style module lang="scss" scoped>
// .row {
//    text-align: center;

.tempWrapper {
   // grid-area: temp;
   display: flex;
   gap: 10px;
   flex-wrap: wrap;
}

.descriptionWrapper {
   // grid-area: desc;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: start;

   .description::first-letter {
      text-transform: uppercase;
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
// }
</style>
