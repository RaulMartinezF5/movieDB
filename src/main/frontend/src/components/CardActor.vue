<template>
    <div class="card card-display">
        <img src="../assets/actor.jpg" class="card-img-top circle-card" alt="actor">
        <div class="card-body">
          <h5 class="card-title">Actor Name</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/main' as *;
.card-display{
          @include FlexDisplay(column, normal, center, 100%, auto);
          border: none;
        }
        .circle-card{
          border-radius: 50%;
          width: 30%;
          height: 30%
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