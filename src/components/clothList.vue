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
        v-bind:listMans="listMans"
        v-show="activeTab === 'tabs2'"
      ></cloth-card-man>
      <cloth-card-woman
        v-bind:listWomans="listWomans"
        v-show="activeTab === 'tabs3'"
      ></cloth-card-woman>
      <cloth-card-kid
        v-bind:listKids="listKids"
        v-show="activeTab === 'tabs4'"
      ></cloth-card-kid>
      <cloth-card-pet
        v-bind:listPets="listPets"
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
          title: 'cloth1',
          image: '/main1.jpg',
          subImg1: '/sub1.jpg',
          subImg2: '/sub2.jpg',
          subImg3: '/sub3.jpg',
          subImg4: '/sub4.jpg',
          price: '¥ 8,990',
          genre: 1,
          id: 1,
        },
        {
          title: 'cloth2',
          image: '/sub1.jpg',
          subImg1: '/main1.jpg',
          subImg2: '/sub2.jpg',
          subImg3: '/sub3.jpg',
          subImg4: '/sub4.jpg',
          price: '¥ 8,990',
          genre: 2,
          id: 2,
        },
        {
          title: 'cloth3',
          image: '/sub2.jpg',
          subImg1: '/sub1.jpg',
          subImg2: '/main1.jpg',
          subImg3: '/sub3.jpg',
          subImg4: '/sub4.jpg',
          price: '¥ 8,990',
          genre: 3,
          id: 3,
        },
        {
          title: 'cloth4',
          image: '/sub3.jpg',
          subImg1: '/sub1.jpg',
          subImg2: '/sub2.jpg',
          subImg3: '/main1.jpg',
          subImg4: '/sub4.jpg',
          price: '¥ 8,990',
          genre: 4,
          id: 4,
        },
        {
          title: 'cloth5',
          image: '/main1.jpg',
          subImg1: '/sub1.jpg',
          subImg2: '/sub2.jpg',
          subImg3: '/sub3.jpg',
          subImg4: '/sub4.jpg',
          price: '¥ 8,990',
          genre: 1,
          id: 5,
        },
        {
          title: 'cloth6',
          image: '/sub1.jpg',
          subImg1: '/main1.jpg',
          subImg2: '/sub2.jpg',
          subImg3: '/sub3.jpg',
          subImg4: '/sub4.jpg',
          price: '¥ 8,990',
          genre: 2,
          id: 6,
        },
        {
          title: 'cloth7',
          image: '/sub2.jpg',
          subImg1: '/sub1.jpg',
          subImg2: '/main1.jpg',
          subImg3: '/sub3.jpg',
          subImg4: '/sub4.jpg',
          price: '¥ 8,990',
          genre: 3,
          id: 7,
        },
        {
          title: 'cloth8',
          image: '/sub3.jpg',
          subImg1: '/sub1.jpg',
          subImg2: '/sub2.jpg',
          subImg3: '/main1.jpg',
          subImg4: '/sub4.jpg',
          price: '¥ 8,990',
          genre: 4,
          id: 8,
        },
        {
          title: 'cloth9',
          image: '/main1.jpg',
          subImg1: '/sub1.jpg',
          subImg2: '/sub2.jpg',
          subImg3: '/sub3.jpg',
          subImg4: '/sub4.jpg',
          price: '¥ 8,990',
          genre: 1,
          id: 9,
        },
        {
          title: 'cloth10',
          image: '/sub1.jpg',
          subImg1: '/main1.jpg',
          subImg2: '/sub2.jpg',
          subImg3: '/sub3.jpg',
          subImg4: '/sub4.jpg',
          price: '¥ 8,990',
          genre: 2,
          id: 10,
        },
        {
          title: 'cloth11',
          image: '/sub2.jpg',
          subImg1: '/sub1.jpg',
          subImg2: '/main1.jpg',
          subImg3: '/sub3.jpg',
          subImg4: '/sub4.jpg',
          price: '¥ 8,990',
          genre: 3,
          id: 11,
        },
        {
          title: 'cloth11',
          image: '/sub3.jpg',
          subImg1: '/sub1.jpg',
          subImg2: '/sub2.jpg',
          subImg3: '/main1.jpg',
          subImg4: '/sub4.jpg',
          price: '¥ 8,990',
          genre: 4,
          id: 12,
        },
        {
          title: 'cloth13',
          image: '/main1.jpg',
          subImg1: '/sub1.jpg',
          subImg2: '/sub2.jpg',
          subImg3: '/sub3.jpg',
          subImg4: '/sub4.jpg',
          price: '¥ 8,990',
          genre: 1,
          id: 13,
        },
        {
          title: 'cloth14',
          image: '/sub1.jpg',
          subImg1: '/main1.jpg',
          subImg2: '/sub2.jpg',
          subImg3: '/sub3.jpg',
          subImg4: '/sub4.jpg',
          price: '¥ 8,990',
          genre: 2,
          id: 14,
        },
        {
          title: 'cloth15',
          image: '/sub2.jpg',
          subImg1: '/sub1.jpg',
          subImg2: '/main1.jpg',
          subImg3: '/sub3.jpg',
          subImg4: '/sub4.jpg',
          price: '¥ 8,990',
          genre: 3,
          id: 15,
        },
        {
          title: 'cloth16',
          image: '/sub3.jpg',
          subImg1: '/sub1.jpg',
          subImg2: '/sub2.jpg',
          subImg3: '/main1.jpg',
          subImg4: '/sub4.jpg',
          price: '¥ 8,990',
          genre: 4,
          id: 16,
        },
      ],
      activeTab: 'tabs1',
    };
  },
  computed: {
    sortMan: function () {
      const listMans = this.clothes.filter((cloth) => cloth.genre === 1);
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
