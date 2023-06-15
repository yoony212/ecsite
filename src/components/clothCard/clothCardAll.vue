<template>
  <div class="card-wrap row row-cols-4" style="margin-left: 0; margin-right: 0">
    <div class="card col" v-for="cloth in clothes" v-bind:key="cloth.id">
      <img v-bind:src="cloth.image" class="card-img-top" alt="" />
      <div
        class="row row-cols-4 img-sub"
        style="margin-left: 0; margin-right: 0"
      >
        <div class="col">
          <img v-bind:src="cloth.subImg1" class="card-sub-image" alt="" />
        </div>
        <div class="col">
          <img v-bind:src="cloth.subImg2" class="card-sub-image" alt="" />
        </div>
        <div class="col">
          <img v-bind:src="cloth.subImg3" class="card-sub-image" alt="" />
        </div>
        <div class="col">
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
  name: 'clothCardAll',
  props: ['clothes'],
};
</script>

<style>
@media (min-width: 768px) {
  .card-wrap {
    gap: 1%;
  }
  .card {
    padding: 0.5rem;
  }
  .card-img-top {
    margin-bottom: 1rem;
  }
  .img-sub {
    gap: 1%;
  }
  .card-sub-image {
    max-width: 100%;
  }
}
[v-cloak] {
  display: none;
}
.img-sub > * {
  padding: 0 !important;
}
.row-cols-4 > * {
  width: 24% !important;
}
.card-link {
  border-bottom: 1px solid #000;
  font-size: 0.8rem;
  transition: all 0.3s ease;
  opacity: 1;
}

.card-link:hover {
  border-bottom-color: transparent;
  opacity: 0.7;
}
</style>
