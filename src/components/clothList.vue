<template>
  <div id="main-container" class="container-fluid">
    <div id="card-container" class="card-container">
      <ul id="genre-bar" class="nav nav-tabs">
        <li class="nav-item" v-on:click="changeGenre(0)">
          <div class="nav-link text-secondary" :class="activeClass(0)" aria-current="page">
            All
          </div>
        </li>
        <li v-for="genre in genres" :key="genre.id" class="nav-item" v-on:click="changeGenre(genre.id)" >
          <div class="nav-link text-secondary" :class="activeClass(genre.id)">{{genre.name}}</div>
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
      genres: [],
      clothes: [],
      selectedGenre: 0,
    };
  },
  async created() {
    this.genres = await this.getGenres()
    this.clothes = await this.getClothes()
  },
  computed: {
    filterdClothes() {
      if (this.selectedGenre === 0) {
        return this.clothes
      } else {
        return this.clothes.filter((cloth) => cloth.genre === this.selectedGenre)
      }
    },
  },
  methods: {
    async getGenres() {
      const { data } = await axios.get('/genres');
      return data;
    },
    async getClothes() {
      const { data } = await axios.get('/clothes');
      return data;
    },
    changeGenre(genre) {
      this.selectedGenre = genre;
    },
    activeClass(genre) {
      return this.selectedGenre === genre ? 'active' : ''
    }
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
