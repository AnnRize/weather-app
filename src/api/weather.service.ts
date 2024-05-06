import { useStore } from "@/stores/root.store";
import type {
   ForecastResponse,
   ForecastWeather,
   WeatherResponse,
} from "@/types/weatherType";
import axios from "axios";

const {
   coordsStore: { coordinates },
} = useStore();

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

let params = "";
function setParams() {
   params = `?lat=${coordinates.latitude}&lon=${coordinates.longitude}`;
}

export const WeatherService = {
   async getCurrent() {
      setParams();
      const res = await weather.get<WeatherResponse>(`weather${params}`);
      return res.data;
   },
   async getForecast() {
      setParams();
      const res = await weather.get<ForecastResponse<ForecastWeather[]>>(
         `forecast${params}`,
      );
      console.log(res.data);
      return res.data;
   },
};
