<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
<template >
  
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg bg-light border">
        <div class="container-fluid separate-container">
          <h1 class="navbar-brand" href="#">Movie RM</h1>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              
              <li class="nav-item">
                <RouterLink class="nav-link" to="/home">Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/mymovies">My Movies</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/">Login</RouterLink>
              </li>
            </ul>
            <form class="form-inline">
      <div class="input-group">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <div class="input-group-append">
          <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
        </div>
      </div>
    </form>
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
      justify-content: flex-end;
      align-items: center;
      margin-left: auto;
      font-size: large;
      margin-right: 9%;
   
}

.nav-link {
  margin-right: 20px;
}

.nav-link:hover {
  background-color: #007bff;
  color: #fff;
}

.form-inline{
  display: flex;
  margin-right: 18%;
}

</style>