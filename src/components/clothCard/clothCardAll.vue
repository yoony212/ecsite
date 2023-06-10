<template>
  <div>
    <div
      class="card col-6 col-md-3"
      v-for="cloth in clothes"
      v-bind:key="cloth.id"
    >
      <img v-bind:img-src="image" class="card-img-top" alt="" />
      <div class="row" style="margin-left: 0; margin-right: 0">
        <div class="col-3">
          <img v-bind:img-src="subImg1" class="card-sub-image" alt="" />
        </div>
        <div class="col-3">
          <img v-bind:img-src="subImg2" class="card-sub-image" alt="" />
        </div>
        <div class="col-3">
          <img v-bind:img-src="subImg3" class="card-sub-image" alt="" />
        </div>
        <div class="col-3">
          <img v-bind:img-src="subImg4" class="card-sub-image" alt="" />
        </div>
      </div>
      <div class="card-body">
        <p class="card-title text-center fw-bold"></p>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'clothCardAll',
  data() {
    return {
      clothes: [],
    };
  },
  methods: {
    created() {
      axios
        .get('../../assets/data.json')
        .then((response) => (this.clothes = response.data))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
.card-img-top {
  margin-bottom: 1rem;
}
.col-3 {
  padding: 0;
}
.card-sub-image {
  max-width: 100%;
}
</style>
