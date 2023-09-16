<script>
// importiamo la dipendenza axios
import axios from "axios";
// importiamo lo store
import { store } from "./data/store";

// importiamo le componenti AppHeader e AppMain
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    // faccio un metodo che fa una chiamata axios all'API del sito moviedb
    fetchMovies(term) {
      axios
        .get(
          // metodo con stringa diretta
          // "https://api.themoviedb.org/3/search/movie?query=anelli&api_key=7904b2f04844a45e610366efe75949fc"

          // metodo con stringa troncata con parametri a parte
          "https://api.themoviedb.org/3/search/movie",
          {
            params: {
              query: term,
              api_key: "7904b2f04844a45e610366efe75949fc",
            },
          }
        )
        // aspetto la risposta e inserisco l'array nell'array movies dello store
        .then((response) => {
          // console.log(response.data.results);
          store.movies = response.data.results;
        });
    },
  },

  created() {
    // this.fetchMovies();
  },

  // registriamo le componenti
  components: {
    AppHeader,
    AppMain,
  },
};
</script>

<template>
  <!-- le usiamo nel template -->
  <!-- ricevo l'evento personalizzato dal figlio AppHeader e invoco il metodo
  che fa la chiamata axios e mette la risposta nell'array movies dello store -->
  <AppHeader @search-movies="fetchMovies" />
  <!-- stampo a schermo le chiavi che mi sevono tramite v-for -->
  <ul>
    <li v-for="movie in store.movies" :key="movie.id">
      {{ movie.title }} {{ movie.original_title }}
      {{ movie.original_language }} {{ movie.vote_count }}
    </li>
  </ul>
  <AppMain />
</template>

<style lang="scss">
@use "./assets/scss/style.scss" as *;
</style>
