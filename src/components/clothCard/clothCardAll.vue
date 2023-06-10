<template>
  <div class="card col-6 col-md-3">
    <img src="../../assets/example/example.png" class="card-img-top" alt="" />
    <div class="row" style="margin-left: 0; margin-right: 0">
      <div class="col-3">
        <img
          src="../../assets/example/example.png"
          class="card-sub-image"
          alt=""
        />
      </div>
      <div class="col-3">
        <img
          src="../../assets/example/example.png"
          class="card-sub-image"
          alt=""
        />
      </div>
      <div class="col-3">
        <img
          src="../../assets/example/example.png"
          class="card-sub-image"
          alt=""
        />
      </div>
      <div class="col-3">
        <img
          src="../../assets/example/example.png"
          class="card-sub-image"
          alt=""
        />
      </div>
    </div>
    <div class="card-body">
      <p class="card-title text-center fw-bold">Card title</p>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'clothCardAll',
  data() {
    return {
      dataTitle: '',
      dataDescription: '',
      dataAlt: '',
      dataSrc: '',
    };
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
