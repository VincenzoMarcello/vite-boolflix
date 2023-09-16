<script>
// 1. importiamo le componenti AppHeader e AppMain
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  // 2. registriamo le componenti
  components: {
    AppHeader,
    AppMain,
  },
};
</script>

<template>
  <!-- 3. le usiamo nel template -->
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use "./assets/scss/style.scss" as *;
</style>
