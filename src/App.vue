<template>
  <div id="app">
    <ec-header></ec-header>
    <cloth-list></cloth-list>
  </div>
</template>

<script>
import ecHeader from './components/ecHeader.vue';
import clothList from './components/clothList.vue';

import 'normalize.css';

export default {
  name: 'App',
  components: {
    ecHeader,
    clothList,
  },
};
</script>

<style></style>
