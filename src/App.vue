<script>
// importiamo la dipendenza axios
import axios from "axios";
// importiamo lo store
import { store } from "./data/store";

// importiamo le componenti AppHeader e AppMain
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import MovieCardVue from "./components/Cards/MovieCard.vue";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    // faccio un metodo che fa una chiamata axios all'API del sito moviedb
    // sia per i movies che per le series
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
          store.movies = response.data.results.map((movie) => {
            const {
              id,
              title,
              original_title,
              original_language,
              vote_average,
              poster_path,
              overview,
            } = movie;

            return {
              id,
              title,
              og_title: original_title,
              language: original_language,
              vote: Math.ceil(vote_average / 2),
              poster: poster_path
                ? "https://image.tmdb.org/t/p/w342" + poster_path
                : "/img/empty.png",
              overview,
            };
          });
        });
    },

    fetchSeries(term) {
      axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            query: term,
            api_key: "7904b2f04844a45e610366efe75949fc",
          },
        })
        // aspetto la risposta e inserisco l'array nell'array series dello store
        .then((response) => {
          store.series = response.data.results.map((series) => {
            const {
              id,
              name,
              original_name,
              origin_country,
              vote_average,
              poster_path,
              overview,
            } = series;

            return {
              id,
              title: name,
              og_title: original_name,
              language: origin_country[0].toLowerCase(),
              vote: Math.ceil(vote_average / 2),
              poster: poster_path
                ? "https://image.tmdb.org/t/p/w342" + poster_path
                : "/img/empty.png",
              overview,
            };
          });
        });
    },
    // metodo che fa da ponte per le due chiamate axios
    handleSearch(term) {
      if (!term) return;

      this.fetchMovies(term);
      this.fetchSeries(term);
    },
  },

  created() {
    // this.fetchSeries();
  },

  // registriamo le componenti
  components: {
    AppHeader,
    AppMain,
  },
};
</script>

<template>
  <!--usiamo i componenti nel template -->
  <!-- ricevo l'evento personalizzato dal figlio AppHeader e invoco il metodo
  che fa le chiamate axios e metto le risposte nell'array movies e series dello store -->
  <AppHeader @search-movies="handleSearch" />
  <!-- stampo a schermo le chiavi che mi sevono tramite v-for -->

  <AppMain />
</template>

<style lang="scss">
@use "./assets/scss/style.scss" as *;
</style>
