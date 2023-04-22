<script setup>

</script>
<template>
    <div class="card">
        <img src="../assets/avatar.jpeg" class="card-img-top " alt="avatar">
        <div class="card-body">
            <h5 class="card-title">Movie title</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, mine consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <a href="#" class="btn btn-primary"> Add Movie</a>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/main' as *;

.btn-primary {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: auto;
      text-align: center;
      margin-top: 1vh;
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
}
</style>