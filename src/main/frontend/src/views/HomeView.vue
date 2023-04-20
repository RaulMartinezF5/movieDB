<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Banner from '../components/Banner.vue';
import CardActor from '../components/CardActor.vue';
import CardMovie from '../components/CardMovie.vue';
</script>

<template>
  <div class="header"><Header /></div>
   <div class="banner"> <Banner /></div>

<div class="popular-movies"><h2>Popular Movies</h2></div>
  <div class="movies">
    <div class="card-container-movie">
      <CardMovie />
    </div>
    <div class="card-container-movie">
      <CardMovie />
    </div>
    <div class="card-container-movie">
      <CardMovie />
    </div>
    <div class="card-container-movie">
      <CardMovie />
    </div>
    <div class="card-container-movie">
      <CardMovie />
    </div>
  </div>
  <div class="popular-actors"><h2>Popular Actors</h2></div>

  <div class="actor">
    <div class="card-container-actor">
      <CardActor />
    </div>
    <div class="card-container-actor">
      <CardActor />
    </div>
      <div class="card-container-actor">
        <CardActor />
      </div>
      <div class="card-container-actor">
        <CardActor />
      </div>
      <div class="card-container-actor">
        <CardActor />
      </div>
    </div>
    <div class="footer"><Footer /></div>
</template>

<style lang="scss" scoped>
@use '../assets/main' as *;

.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
   z-index: 9999;

}

.banner{
  margin-top: 6vh;
}

.popular-movies {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 3vh;
}
.movies {
  max-width: 1200px;
  margin: 2% auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  
  .card-container-movie {
    width: 18%;
    margin-bottom: 2%;
  }
}

.popular-actors {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 3vh;
}
.actor {
  max-width: 1200px;
  margin: 2% auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  
  .card-container-actor {
    width: 20%;
    margin-bottom: 2%;
  }
}
.footer {
  width: 100%;
  border-top: 1px solid black;
}
</style>
