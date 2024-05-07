import { reactive } from "vue";
import { defineStore } from "pinia";

export const useCoords = defineStore("coordinates", () => {
   // default = moscow coords
   let coordinates = reactive({
      latitude: 55.7522,
      longitude: 37.6156,
   });

   return { coordinates };
});
