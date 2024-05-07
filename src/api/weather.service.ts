import type {
   ForecastResponse,
   ForecastWeather,
   WeatherResponse,
} from "@/types/weatherType";
import axios from "axios";

const weather = axios.create({
   baseURL: "https://api.openweathermap.org/data/2.5/",
   params: {
      appid: import.meta.env.PROD
         ? import.meta.env.VITE_APP_ID_PROD
         : import.meta.env.VITE_APP_ID_DEV,
      units: "metric",
      lang: "ru",
   },
});

export const WeatherService = {
   async getCurrent(lat: number, lon: number) {
      const res = await weather.get<WeatherResponse>(`weather`, {
         params: {
            lat: lat,
            lon: lon,
         },
      });
      return res.data;
   },
   async getForecast(lat: number, lon: number) {
      const res = await weather.get<ForecastResponse<ForecastWeather[]>>(
         `forecast`,
         {
            params: {
               lat: lat,
               lon: lon,
            },
         },
      );
      return res.data;
   },
};
