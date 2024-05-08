<script lang="ts">
export default {
   inheritAttrs: false,
};

interface ForecastProps {
   forecast: ForecastResponse<ForecastWeather[][]>;
}
</script>

<script lang="ts" setup>
import { timestampToDate } from "@/utils/timestampToDate";

import type { ForecastResponse, ForecastWeather } from "@/types/weatherType";
import ForecastDay from "./ForecastDay.vue";

const { forecast } = defineProps<ForecastProps>();
</script>

<template>
   <div :class="$style.forecastList">
      <div
         :class="$style.tableWrapper"
         v-for="(list, index) in forecast.list"
         :key="index"
      >
         <div :class="$style.grid">
            <!-- <div :class="$style.thead"> -->
            <div :class="$style.date">
               <span :class="$style.day">
                  {{ timestampToDate(list[0]?.dt).split(" ")[0] }}
               </span>
               {{ timestampToDate(list[0]?.dt).split(" ")[1] }}
            </div>
            <div :class="$style.pressure">
               <span :class="$style.descText">
                  Давление,<br />
                  мм рт. ст.
               </span>
               <img src="/pressure.svg" alt="" width="25" />
            </div>
            <div :class="$style.humidity">
               <span :class="$style.descText"> Влажность </span>
               <img src="/humidity.svg" alt="" width="25" />
            </div>
            <div :class="$style.wind">
               <span :class="$style.descText">
                  Ветер,<br />
                  м/с
               </span>
               <img src="/wind.svg" alt="" width="25" />
            </div>
            <div :class="$style.feelsLike">
               <span :class="$style.descText"> Ощущается как </span>
            </div>
            <div :class="$style.space" />
            <ForecastDay v-for="day in list" :key="day.dt" :day="day" />
         </div>
      </div>
   </div>
</template>

<style module lang="scss" scoped>
.forecastList {
   display: flex;
   flex-direction: column;
   gap: 20px;

   .tableWrapper {
      padding: 20px;
      border: 2px solid rgb(255, 255, 255);
      border-radius: 20px;
      box-shadow: inset 0 0 20px rgb(0, 0, 0);

      .grid {
         text-align: center;
         display: grid;
         width: 100%;
         grid-template-columns: auto 1fr repeat(4, auto);
         align-items: center;
         column-gap: 15px;
         grid-auto-rows: auto;

         .date {
            text-align: left;
            grid-column: span 2;
            color: rgb(223, 38, 38);
            .day {
               font-size: 2rem;
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

         .space {
            grid-column: span 6;
            padding-top: 10px;
            border-bottom: 2px solid white;
         }

         .descText + img {
            display: none;
         }

         // > tr > th:not(:nth-child(2)) {
         //    padding-inline: 10px;
         // }
      }
   }
}

@media (max-width: 620px) {
   .forecastList {
      .tableWrapper {
         padding-inline: 10px;

         .grid {
            display: grid;
            grid-template-columns: auto 1fr repeat(3, auto);
            column-gap: 10px;

            .descText {
               display: none;
               + img {
                  display: block;
               }
            }

            .feelsLike {
               display: none;
            }
            .space {
               grid-column: span 5;
            }
         }
      }
   }
}
</style>
