<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
<template >
  
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg bg-light border">
        <div class="container-fluid separate-container">
          <h1 class="navbar-brand" href="#">Movie DB</h1>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <RouterLink class="nav-link" to="/">Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/about">About</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/about">Contact</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

 
</template>
<style lang="scss" scoped>
@use '../assets/main' as *;

.navbar-brand{
  font-size: large;
  margin-left: 15%;
}
.separate-container{
    @include FlexDisplay(row, space-between, center, 100%, auto);
}

.border{
  border: 1px solid;
}

.navbar-nav{
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-left: auto;
      font-size: large;
      margin-right: 16%;
}

.nav-link {
  margin-right: 20px;
}



</style>