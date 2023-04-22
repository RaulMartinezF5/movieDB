<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
})

const addToMyMovies = () => {
  // Aquí podrías utilizar una función para emitir un evento que añada la película a "My Movies"
}
</script>
<template>
   <div class="card">
    <img :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`" class="card-img-top" :alt="movie.title" />
    <div class="card-body">
      <h5 class="card-title">{{ movie.title }}</h5>
      <p class="card-text">{{ movie.overview }}</p>
      <button @click="addToMyMovies" class="btn btn-primary">Add Movie</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use '../assets/main' as *;

.card{
    position: relative;
}

.btn-primary {
      width: 80%;
      margin: auto;
      margin-left: 0.4vw;
      text-align: center;
      margin-top: 1vh;
      bottom: 10px;
      position: absolute;
}

.card-title{
    display: flex;
    justify-content: center;
    text-align: center;
}

.card-text{
    display: flex;
    justify-content: center;
    text-align: justify;
    max-height: 100px;
    overflow: hidden;
    margin-bottom: 40px;
}
</style>