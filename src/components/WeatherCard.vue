<script lang="ts" setup>
import type { WeatherResponse } from "@/types/weatherType";
import { getTemp } from "@/utils/getTemp";

interface WeatherCardProps {
   weather: WeatherResponse;
}

const { weather } = defineProps<WeatherCardProps>();
</script>

<template>
   <div :class="$style.card">
      <div :class="$style.city">{{ weather.name }}</div>
      <div :class="$style.tempWrapper">
         <p :class="$style.temp">{{ getTemp(weather.main.temp) }}&deg</p>
         <div :class="$style.imgWrapper">
            <img
               :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
               :alt="weather.weather[0].description"
               :title="weather.weather[0].description"
            />
         </div>
         <div :class="$style.descriptionWrapper">
            <p :class="$style.description">
               {{ weather.weather[0].description }}
            </p>
            <p :class="$style.feelsLike">
               Ощущается как
               {{ getTemp(weather.main.feels_like) }}&deg
            </p>
         </div>
      </div>

      <div :class="$style.weatherWrapper">
         <p :class="$style.wind">{{ weather.wind.speed }} м/с</p>
         <p :class="$style.humidity">{{ weather.main.humidity }}%</p>
         <p :class="$style.pressure">{{ weather.main.pressure }} мм рт.ст.</p>
         <p :class="$style.clouds">{{ weather.clouds.all }}%</p>
      </div>
   </div>
</template>

<style module lang="scss" scoped>
.card {
   display: flex;
   flex-direction: column;
   border-radius: 20px;
   padding: 20px;
   background: linear-gradient(
      200deg,
      rgba(255, 0, 204, 1) 0%,
      rgba(255, 173, 0, 1) 100%
   );
   box-shadow: -4px 4px rgba(255, 173, 0, 0.4), -8px 8px rgba(255, 173, 0, 0.3),
      -12px 12px rgba(255, 173, 0, 0.2);
   margin-left: 12px;
   margin-bottom: 12px;

   .city {
      font-size: 2rem;
      text-align: center;
   }

   .tempWrapper {
      width: fit-content;
      margin: 50px auto;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      .temp {
         font-size: 2.8rem;
      }

      .imgWrapper {
         max-width: 100px;

         > img {
            width: 100%;
         }
      }

      .descriptionWrapper {
         display: flex;
         flex-direction: column;

         .description {
            &::first-letter {
               text-transform: uppercase;
            }
         }

         .feelsLike {
            opacity: 0.7;
         }
      }
   }

   @mixin weather($url) {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;

      &::before {
         display: block;
         content: "";
         width: 30px;
         height: 30px;
         background: url($url);
         background-size: cover;
         background-position: center;
         background-repeat: no-repeat;
      }
   }

   .weatherWrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .wind {
         @include weather("/wind.svg");
      }
      .humidity {
         @include weather("/humidity.svg");
      }
      .pressure {
         @include weather("/pressure.svg");
      }
      .clouds {
         @include weather("/clouds.svg");
      }
   }
}
</style>
