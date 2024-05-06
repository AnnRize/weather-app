import { reactive, watch } from "vue";
import { defineStore } from "pinia";
import { useQueryClient } from "@tanstack/vue-query";

export const useCoords = defineStore("coordinates", () => {
   const queryClient = useQueryClient();

   let coordinates = reactive({
      latitude: 55.7522,
      longitude: 37.6156,
   });

   watch(coordinates, () => {
      queryClient.invalidateQueries();
   });

   return { coordinates };
});
