<script>
import { store } from "../../data/store";
// importiamo la componente MovieCard
import MovieCard from "./MovieCard.vue";

export default {
  data() {
    return {
      title: "Hello world",
      store,
    };
  },

  components: {
    MovieCard,
  },
};
</script>

<template>
  <h2>Movies</h2>
  <MovieCard v-for="movie in store.movies" :key="movie.id" :cardInfo="movie" />

  <h2>Serie Tv</h2>
  <MovieCard
    v-for="series in store.series"
    :key="series.id"
    :cardInfo="series"
  />
</template>

<style lang="scss" scoped></style>
