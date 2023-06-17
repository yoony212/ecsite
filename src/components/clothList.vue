<template>
  <div id="main-container" class="container-fluid">
    <div id="card-container" class="card-container">
      <ul id="genre-bar" class="nav nav-tabs">
        <li id="all" class="nav-item" v-on:click="changeGenre(ALL)">
          <div class="nav-link text-secondary" :class="selectedGenre === ALL ? 'active' : ''" aria-current="page">
            All
          </div>
        </li>
        <li id="man" class="nav-item" v-on:click="changeGenre(MAN)">
          <div class="nav-link text-secondary" :class="selectedGenre === MAN ? 'active' : ''">Man</div>
        </li>
        <li id="woman" class="nav-item" v-on:click="changeGenre(WOMAN)">
          <div class="nav-link text-secondary" :class="selectedGenre === WOMAN ? 'active' : ''">Woman</div>
        </li>
        <li id="kid" class="nav-item" v-on:click="changeGenre(KID)">
          <div class="nav-link text-secondary" :class="selectedGenre === KID ? 'active' : ''">Kid</div>
        </li>
        <li id="pet" class="nav-item" v-on:click="changeGenre(PET)">
          <div class="nav-link text-secondary" :class="selectedGenre === PET ? 'active' : ''">Pet</div>
        </li>
      </ul>
      <div class="card-wrap row row-cols-4" style="margin-left: 0; margin-right: 0">
          <cloth-card
            v-for="cloth in filterdClothes"
            v-bind:key="cloth.id"
            v-bind:cloth="cloth"
          ></cloth-card>
      </div>
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
