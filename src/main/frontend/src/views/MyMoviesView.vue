<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <div class="header"><Header /></div>
  <div class="mymovies">
    <h1>My Movies</h1>
  </div>
  <div class="footer"><Footer /></div>
</template>

<style scoped>

.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
   z-index: 9999;
}
  .mymovies {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  .footer {
  width: 100%;
  border-top: 1px solid black;
}
</style>
