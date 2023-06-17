<template>
  <div
    id="card-wrap"
    class="card-wrap row row-cols-4"
    style="margin-left: 0; margin-right: 0"
  >
    <div class="card col" v-for="cloth in listPets" v-bind:key="cloth.id">
      <img v-bind:src="cloth.image" class="card-img-top" alt="" />
      <div class="row img-sub" style="margin-left: 0; margin-right: 0">
        <div class="col-3">
          <img v-bind:src="cloth.subImg1" class="card-sub-image" alt="" />
        </div>
        <div class="col-3">
          <img v-bind:src="cloth.subImg2" class="card-sub-image" alt="" />
        </div>
        <div class="col-3">
          <img v-bind:src="cloth.subImg3" class="card-sub-image" alt="" />
        </div>
        <div class="col-3">
          <img v-bind:src="cloth.subImg4" class="card-sub-image" alt="" />
        </div>
      </div>
      <div class="card-body text-center">
        <p class="card-title fw-bold fs-3" v-cloak>
          {{ cloth.title }}
        </p>
        <p class="card-text fw-bold fs-5" v-cloak>
          {{ cloth.price }}
        </p>
        <a href="#" class="card-link text-decoration-none text-black block"
          >詳しく見る→</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'clothCardPet',
  props: ['listPets'],
};
</script>

<style></style>
