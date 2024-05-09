<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { useStore } from "./stores/root.store";

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
