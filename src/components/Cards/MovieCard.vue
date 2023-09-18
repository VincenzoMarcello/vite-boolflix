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
  <ul>
    <li>
      <div>
        <img :src="cardInfo.poster" alt="" />
      </div>
      <div>{{ cardInfo.title }}</div>
      <div>{{ cardInfo.og_title }}</div>
      <div>{{ cardInfo.vote }}</div>

      <div>
        <span v-for="star in cardInfo.vote"
          ><font-awesome-icon icon="fa-solid fa-star"
        /></span>
        <span v-for="star in 5 - cardInfo.vote">
          <font-awesome-icon icon="fa-regular fa-star"
        /></span>
      </div>

      <div>{{ cardInfo.language }}</div>
      <div v-if="hasFlag">
        <img :src="flagSrc" alt="" />
      </div>
      <!-- <div v-else-if="cardInfo.language == 'it'">
        <img src="/img/it.png" alt="" />
      </div>
      <div v-else-if="cardInfo.language == 'fr'">
        <img src="/img/fr.png" alt="" />
      </div>
      <div v-else-if="cardInfo.language == 'es'">
        <img src="/img/es.png" alt="" />
      </div>
      <div v-else-if="cardInfo.language == 'de'">
        <img src="/img/de.png" alt="" />
      </div>
      <div v-else>
        <img src="/img/gl.png" alt="" />
      </div>
    </li> -->
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
