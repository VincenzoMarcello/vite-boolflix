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
            } = movie;

            return {
              id,
              title,
              og_title: original_title,
              language: original_language,
              vote: vote_average,
              poster: "https://image.tmdb.org/t/p/w300" + poster_path,
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
            } = series;

            return {
              id,
              name,
              og_name: original_name,
              language: origin_country[0],
              vote: vote_average,
              poster: "https://image.tmdb.org/t/p/w300" + poster_path,
            };
          });
        });
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
  <!-- ricevo l'evento personalizzato dal figlio AppHeader e invoco i metodi
  che fanno le chiamate axios e metto le risposte nell'array movies e series dello store -->
  <AppHeader @search-movies="fetchMovies" @search-series="fetchSeries" />
  <!-- stampo a schermo le chiavi che mi sevono tramite v-for -->

  <ul>
    <li v-for="movie in store.movies" :key="movie.id">
      <div>
        <img :src="movie.poster" alt="" />
      </div>
      <div>{{ movie.title }}</div>
      <div>{{ movie.og_title }}</div>
      <div>{{ movie.language }}</div>
      <div v-if="movie.language == 'en'">
        <img src="/img/en-40.png" alt="" />
      </div>
      <div v-else-if="movie.language == 'it'">
        <img src="/img/it-40.png" alt="" />
      </div>
      <div v-else-if="movie.language == 'fr'">
        <img src="/img/fr-40.png" alt="" />
      </div>
      <div v-else-if="movie.language == 'es'">
        <img src="/img/es-40.png" alt="" />
      </div>
      <div v-else-if="movie.language == 'de'">
        <img src="/img/de-40.png" alt="" />
      </div>
      <div v-else>
        <img src="/img/g-40.png" alt="" />
      </div>
    </li>
  </ul>

  <ul>
    <li v-for="series in store.series" :key="series.id">
      <div>
        <img :src="series.poster" alt="" />
      </div>
      <div>{{ series.name }}</div>
      <div>{{ series.og_name }}</div>
      <div>{{ series.language }}</div>
      <div v-if="series.language == 'en'">
        <img src="/img/en-40.png" alt="" />
      </div>
      <div v-else-if="series.language == 'it'">
        <img src="/img/it-40.png" alt="" />
      </div>
      <div v-else-if="series.language == 'fr'">
        <img src="/img/fr-40.png" alt="" />
      </div>
      <div v-else-if="series.language == 'es'">
        <img src="/img/es-40.png" alt="" />
      </div>
      <div v-else-if="series.language == 'de'">
        <img src="/img/de-40.png" alt="" />
      </div>
      <div v-else>
        <img src="/img/g-40.png" alt="" />
      </div>
    </li>
  </ul>

  <AppMain />
</template>

<style lang="scss">
@use "./assets/scss/style.scss" as *;
</style>
