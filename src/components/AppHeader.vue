<script>
export default {
  data() {
    return {
      // valore dell'input all'inizio è vuoto
      term: "",
    };
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Boolflix</a>

      <!-- faccio un emit dove passo il valore term tramite il submit.prevent -->
      <!-- submit.prevent è un evento che si usa sul form e si attiva sia 
        con il click che con il tasto enter -->
      <form
        @submit.prevent="$emit('search-movies', term)"
        class="d-flex"
        role="search"
      >
        <!-- collego l'input tramite v-model in maniera tale da leggere il valore
      e lo salvo in una chiave in data "term" -->
        <input
          v-model="term"
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
