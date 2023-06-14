<template>
  <div id="main-container" class="container-fluid">
    <div id="card-container" class="card-container">
      <ul id="genre-bar" class="nav">
        <li id="all" class="nav-item" v-on:click="showTab($event)">
          <div class="nav-link text-secondary active" aria-current="page">
            All
          </div>
        </li>
        <li id="man" class="nav-item" v-on:click="showTab($event)">
          <div class="nav-link text-secondary">Man</div>
        </li>
        <li id="woman" class="nav-item" v-on:click="showTab($event)">
          <div class="nav-link text-secondary">Woman</div>
        </li>
        <li id="kid" class="nav-item" v-on:click="showTab($event)">
          <div class="nav-link text-secondary">Kid</div>
        </li>
        <li id="pet" class="nav-item" v-on:click="showTab($event)">
          <div class="nav-link text-secondary">Pet</div>
        </li>
      </ul>
      <cloth-card-all v-bind:clothes="clothes" v-show="activeTab === 'tabs-1'"></cloth-card-all>
      <cloth-card-man v-bind:clothes="clothes" v-show="activeTab === 'tabs-2'"></cloth-card-man>
      <cloth-card-woman v-bind:clothes="clothes" v-show="activeTab === 'tabs-3'"></cloth-card-woman>
      <cloth-card-kid v-bind:clothes="clothes" v-show="activeTab === 'tabs-4'"></cloth-card-kid>
      <cloth-card-pet v-bind:clothes="clothes" v-show="activeTab === 'tabs-5'"></cloth-card-pet>
    </div>
  </div>
</template>

<script>
import clothCardAll from './clothCard/clothCardAll.vue';
import clothCardMan from './clothCard/clothCardMan.vue';
import clothCardWoman from './clothCard/clothCardWoman.vue';
import clothCardKid from './clothCard/clothCardKid.vue';
import clothCardPet from './clothCard/clothCardPet.vue';

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
      clothes: [
        {
          "title": "cloth1",
          "image": "/example.png",
          "subImg1": "/example.png",
          "subImg2": "/example.png",
          "subImg3": "/example.png",
          "subImg4": "/example.png",
          "description": "asdfasdfasdfasdfasdfasdfasdf",
          "genre": 1,
          "id": 1
        },
        {
          "title": "cloth2",
          "image": "/example.png",
          "subImg1": "/example.png",
          "subImg2": "/example.png",
          "subImg3": "/example.png",
          "subImg4": "/example.png",
          "description": "asdfasdfasdfasdfasdfasdfasdf",
          "genre": 2,
          "id": 2
        },
        {
          "title": "cloth3",
          "image": "/example.png",
          "subImg1": "/example.png",
          "subImg2": "/example.png",
          "subImg3": "/example.png",
          "subImg4": "/example.png",
          "description": "asdfasdfasdfasdfasdfasdfasdf",
          "genre": 3,
          "id": 3
        },
        {
          "title": "cloth4",
          "image": "/example.png",
          "subImg1": "/example.png",
          "subImg2": "/example.png",
          "subImg3": "/example.png",
          "subImg4": "/example.png",
          "description": "asdfasdfasdfasdfasdfasdfasdf",
          "genre": 4,
          "id": 4
        },
        {
          "title": "cloth5",
          "image": "/example.png",
          "subImg1": "/example.png",
          "subImg2": "/example.png",
          "subImg3": "/example.png",
          "subImg4": "/example.png",
          "description": "asdfasdfasdfasdfasdfasdfasdf",
          "genre": 5,
          "id": 5
        },
        {
          "title": "cloth6",
          "image": "/example.png",
          "subImg1": "/example.png",
          "subImg2": "/example.png",
          "subImg3": "/example.png",
          "subImg4": "/example.png",
          "description": "asdfasdfasdfasdfasdfasdfasdf",
          "genre": 1,
          "id": 6
        },
        {
          "title": "cloth7",
          "image": "/example.png",
          "subImg1": "/example.png",
          "subImg2": "/example.png",
          "subImg3": "/example.png",
          "subImg4": "/example.png",
          "description": "asdfasdfasdfasdfasdfasdfasdf",
          "genre": 2,
          "id": 7
        },
        {
          "title": "cloth8",
          "image": "/example.png",
          "subImg1": "/example.png",
          "subImg2": "/example.png",
          "subImg3": "/example.png",
          "subImg4": "/example.png",
          "description": "asdfasdfasdfasdfasdfasdfasdf",
          "genre": 3,
          "id": 8
        },
        {
          "title": "cloth9",
          "image": "/example.png",
          "subImg1": "/example.png",
          "subImg2": "/example.png",
          "subImg3": "/example.png",
          "subImg4": "/example.png",
          "description": "asdfasdfasdfasdfasdfasdfasdf",
          "genre": 4,
          "id": 9
        },
        {
          "title": "cloth10",
          "image": "/example.png",
          "subImg1": "/example.png",
          "subImg2": "/example.png",
          "subImg3": "/example.png",
          "subImg4": "/example.png",
          "description": "asdfasdfasdfasdfasdfasdfasdf",
          "genre": 5,
          "id": 10
        },
        {
          "title": "cloth11",
          "image": "/example.png",
          "subImg1": "/example.png",
          "subImg2": "/example.png",
          "subImg3": "/example.png",
          "subImg4": "/example.png",
          "description": "asdfasdfasdfasdfasdfasdfasdf",
          "genre": 6,
          "id": 11
        }
      ],
      activeTab: 'tabs-1',
    };
  },
  methods: {
    // showTab(e) {
    //   console.log(e.target.id);
    //   // let id = e.target.id;
    //   // console.log(`tabs-${id}`);
    // }
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
</style>
