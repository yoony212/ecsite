<template>
  <div id="main-container" class="container-fluid">
    <div id="card-container" class="card-container">
      <ul id="genre-bar" class="nav">
        <li class="nav-item">
          <a class="nav-link text-secondary active" aria-current="page" href="#"
            >All</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-secondary" href="#">Man</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-secondary" href="#">Woman</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-secondary" href="#">Kid</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-secondary" href="#">Pet</a>
        </li>
      </ul>
      <cloth-card-all></cloth-card-all>
      <cloth-card-man></cloth-card-man>
      <cloth-card-woman></cloth-card-woman>
      <cloth-card-kid></cloth-card-kid>
      <cloth-card-pet></cloth-card-pet>
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
  methods: {},
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
