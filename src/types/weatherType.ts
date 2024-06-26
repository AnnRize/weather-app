export interface WeatherResponse {
   coord: {
      lon: number;
      lat: number;
   };
   weather: Weather[];
   base: string;
   main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
      sea_level: number;
      grnd_level: number;
   };
   visibility: number;
   wind: {
      speed: number;
      deg: number;
      gust: number;
   };
   rain: {
      "1h": number;
   };
   clouds: {
      all: number;
   };
   dt: number;
   sys: {
      type: number;
      id: number;
      country: string;
      sunrise: number;
      sunset: number;
   };
   timezone: number;
   id: number;
   name: string;
   cod: number;
}

export interface ForecastResponse<T> {
   cod: string;
   message: number;
   cnt: number;
   list: T;
   city: {
      id: number;
      name: string;
      coord: {
         lat: number;
         lon: number;
      };
      country: string;
      population: number;
      timezone: number;
      sunrise: number;
      sunset: number;
   };
}

// ---------------------------------------------------

interface Weather {
   id: number;
   main: weatherMain;
   description: string;
   icon: string;
}

export interface ForecastWeather {
   dt: number;
   main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
   };
   weather: Weather[];
   clouds: {
      all: number;
   };
   wind: {
      speed: number;
      deg: number;
      gust: number;
   };
   visibility: number;
   pop: number;
   rain: {
      "3h": number;
   };
   sys: {
      pod: string;
   };
   dt_txt: string;
}

type weatherMain =
   | "Thunderstorm"
   | "Drizzle"
   | "Rain"
   | "Snow"
   | "Atmosphere"
   | "Clear"
   | "Clouds";
