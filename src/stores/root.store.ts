import { defineStore } from "pinia";
import { useCoords } from "./coordinates";

export const useStore = defineStore("store", {
   state: () => ({
      coordsStore: useCoords(),
   }),
});
