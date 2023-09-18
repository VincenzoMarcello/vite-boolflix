<script>
export default {
  props: {
    cardInfo: Object,
  },

  computed: {
    hasFlag() {
      const foundFlags = ["de", "en", "es", "fr", "it"];
      return foundFlags.includes(this.cardInfo.language);
    },

    flagSrc() {
      if (this.hasFlag) {
        const flagUrl = `/img/${this.cardInfo.language}.png`;
        return flagUrl;
      } else {
        const flagUrl = `/img/gl.png`;
        return flagUrl;
      }
    },
  },
};
</script>

<template>
  <div class="card-container my-3">
    <img :src="cardInfo.poster" class="card-pic" alt="" />

    <div class="movie-info text-center">
      <div class="py-3"><strong>Titolo:</strong> {{ cardInfo.title }}</div>
      <div><strong>Titolo originale:</strong> {{ cardInfo.og_title }}</div>

      <div class="py-3">
        <strong>Vote Average:</strong>
        <div>
          <span v-for="star in cardInfo.vote"
            ><font-awesome-icon icon="fa-solid fa-star"
          /></span>
          <span v-for="star in 5 - cardInfo.vote">
            <font-awesome-icon icon="fa-regular fa-star"
          /></span>
        </div>
      </div>

      <div>
        <img :src="flagSrc" alt="" />
      </div>

      <div class="py-3">
        <strong>Overview:</strong>
        <p>{{ cardInfo.overview }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  width: calc(100% / 6);
  height: 400px;

  &:hover > .card-pic {
    display: none;
  }
  &:hover .movie-info {
    display: block;
  }
  .card-pic {
    width: 100%;
    height: 100%;
    box-shadow: 6px 1px 9px rgb(22, 22, 22);
  }
  .movie-info {
    display: none;
    padding-top: 1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    background-color: rgb(88, 97, 97);
    width: 100%;
    height: 100%;
    overflow: auto;
    cursor: pointer;
    transform: scale(1.05);
  }
  &:active > .card-pic {
    display: block;
    transform: scale(1.05);
  }
  &:active .movie-info {
    display: none;
  }
}
</style>
