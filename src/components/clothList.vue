<template>
  <div id="main-container" class="container-fluid">
    <div id="card-container" class="card-container">
      <ul id="genre-bar" class="nav">
        <li id="all" class="nav-item" v-on:click="changeGenre(ALL)">
          <div class="nav-link text-secondary active" aria-current="page">
            All
          </div>
        </li>
        <li id="man" class="nav-item" v-on:click="changeGenre(MAN)">
          <div class="nav-link text-secondary">Man</div>
        </li>
        <li id="woman" class="nav-item" v-on:click="changeGenre(WOMAN)">
          <div class="nav-link text-secondary">Woman</div>
        </li>
        <li id="kid" class="nav-item" v-on:click="changeGenre(KID)">
          <div class="nav-link text-secondary">Kid</div>
        </li>
        <li id="pet" class="nav-item" v-on:click="changeGenre(PET)">
          <div class="nav-link text-secondary">Pet</div>
        </li>
      </ul>
      <cloth-card
        v-bind:clothes="filterdClothes"
      ></cloth-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import clothCard from './clothCard.vue';

export default {
  name: 'clothList',
  components: {
    clothCard,
  },
  data() {
    return {
      clothes: [],
      selectedGenre: 0,
      ALL: 0,
      MAN: 1,
      WOMAN: 2,
      KID: 3,
      PET: 4,
    };
  },
  async created() {
    this.clothes = await this.getClothes()
  },
  computed: {
    filterdClothes() {
      if (this.selectedGenre === this.ALL) {
        return this.clothes
      } else {
        return this.clothes.filter((cloth) => cloth.genre === this.selectedGenre)
      }
    },
  },
  methods: {
    changeGenre(genre) {
      this.selectedGenre = genre;
    },
    async getClothes() {
      const { data } = await axios.get('/clothes');
      return data;
    },
  },
};
</script>

<style>
@media (min-width: 768px) {
  #genre-bar {
    margin-bottom: 1rem;
  }
}
.active {
  color: blue;
}
.nav-item {
  cursor: pointer;
}
</style>
