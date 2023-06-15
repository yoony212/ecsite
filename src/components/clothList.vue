<template>
  <div id="main-container" class="container-fluid">
    <div id="card-container" class="card-container">
      <ul id="genre-bar" class="nav">
        <li id="all" class="nav-item" v-on:click="showTab('tabs1')">
          <div class="nav-link text-secondary active" aria-current="page">
            All
          </div>
        </li>
        <li id="man" class="nav-item" v-on:click="showTab('tabs2')">
          <div class="nav-link text-secondary">Man</div>
        </li>
        <li id="woman" class="nav-item" v-on:click="showTab('tabs3')">
          <div class="nav-link text-secondary">Woman</div>
        </li>
        <li id="kid" class="nav-item" v-on:click="showTab('tabs4')">
          <div class="nav-link text-secondary">Kid</div>
        </li>
        <li id="pet" class="nav-item" v-on:click="showTab('tabs5')">
          <div class="nav-link text-secondary">Pet</div>
        </li>
      </ul>
      <cloth-card-all
        v-bind:clothes="clothes"
        v-show="activeTab === 'tabs1'"
      ></cloth-card-all>
      <cloth-card-man
        v-bind:listMans="sortMan"
        v-show="activeTab === 'tabs2'"
      ></cloth-card-man>
      <cloth-card-woman
        v-bind:listWomans="sortWoman"
        v-show="activeTab === 'tabs3'"
      ></cloth-card-woman>
      <cloth-card-kid
        v-bind:listKids="sortKid"
        v-show="activeTab === 'tabs4'"
      ></cloth-card-kid>
      <cloth-card-pet
        v-bind:listPets="sortPet"
        v-show="activeTab === 'tabs5'"
      ></cloth-card-pet>
    </div>
  </div>
</template>

<script>
import clothCardAll from './clothCard/clothCardAll.vue';
import clothCardMan from './clothCard/clothCardMan.vue';
import clothCardWoman from './clothCard/clothCardWoman.vue';
import clothCardKid from './clothCard/clothCardKid.vue';
import clothCardPet from './clothCard/clothCardPet.vue';
import axios from 'axios';

export default {
  name: 'clothList',
  components: {
    clothCardAll,
    clothCardMan,
    clothCardWoman,
    clothCardKid,
    clothCardPet,
  },
  data() {
    return {
      clothes: [],
      activeTab: 'tabs1',
    };
  },
  computed: {
    sortMan: function () {
      const listMans = this.clothes.filter((cloth) => cloth.genre === 1);
      console.log(listMans);
      return listMans;
    },
    sortWoman: function () {
      const listWomans = this.clothes.filter((cloth) => cloth.genre === 2);
      return listWomans;
    },
    sortKid: function () {
      const listKids = this.clothes.filter((cloth) => cloth.genre === 3);
      return listKids;
    },
    sortPet: function () {
      const listPets = this.clothes.filter((cloth) => cloth.genre === 4);
      return listPets;
    },
  },
  methods: {
    showTab: function (tab) {
      this.activeTab = tab;
    },
  },
  created() {
    axios.get('/clothes').then((response) => {
      console.log(1);
      console.log(response);
    });
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
