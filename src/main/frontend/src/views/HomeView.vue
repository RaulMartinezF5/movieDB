<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Banner from '../components/Banner.vue';
import CardActor from '../components/CardActor.vue';
import CardMovie from '../components/CardMovie.vue';

import { onMounted, ref } from 'vue';
import axios from 'axios';

const apiKey = 'd51d296af8e7cb5883e35484c58d1325';
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

let movies = ref([]);
let actors = ref([]);

onMounted(() => {
    axios.get(url)
      .then(response => {
        movies.value = response.data.results;
      })
      .catch(error => {
        console.log(error);
      });
  });

  const fetchActors = () => {
  axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${apiKey}`)
    .then(response => {
      actors.value = response.data.results;
    })
    .catch(error => {
      console.log(error);
    });
};
onMounted(() => {
  axios.get(url)
    .then(response => {
      movies.value = response.data.results;
    })
    .catch(error => {
      console.log(error);
    });

  fetchActors();
});

</script>

<template>
   <div class="header"><Header /></div>
  <div class="banner"> <Banner /></div>
  <div class="popular-movies"><h2>Popular Movies</h2></div>
  
  <div v-if="movies.length">
    <div class="movies">
      <div class="card-container-movie" v-for="(movie, index) in movies" :key="index" >
        <CardMovie :movie="movie" />
      </div>
    </div>
  </div>
  <div class="popular-actors"><h2>Popular Actors</h2></div>
  <div class="actors" v-if="actors.length">
  <div class="card-container-actor" v-for="(actor, index) in 5" :key="index">
    <CardActor :actor="actor" />
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
    width: 20%;
    margin-bottom: 2%;
    display: flex;
    flex-wrap: wrap;
  }
}
.card-container-movie > * {
  width: 100%;
  margin: 0 10px 20px 0;
}
.popular-actors {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 3vh;
}
.actors {
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
