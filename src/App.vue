<script setup lang="ts">
import { RouterView } from "vue-router";
import { useStore } from "./stores/root.store";
import { onMounted } from "vue";

const {
   coordsStore: { coordinates },
} = useStore();

onMounted(() => {
   window.navigator.geolocation.getCurrentPosition(({ coords }) => {
      coordinates.latitude = coords.latitude;
      coordinates.longitude = coords.longitude;
   });
});
</script>

<template>
   <RouterView />
</template>

<style lang="scss"></style>
