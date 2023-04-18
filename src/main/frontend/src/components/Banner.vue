<script setup></script>
<template>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner limit">
            <div class="carousel-item active">
                <img src="../assets/avatar.jpeg" class="d-block w-100" alt="avatar">
            </div>
            <div class="carousel-item">
                <img src="../assets/avatar.jpeg" class="d-block w-100" alt="avatar">
            </div>
            <div class="carousel-item">
                <img src="../assets/avatar.jpeg" class="d-block w-100" alt="avatar">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>
<style lang="scss" scoped>

    #carouselExampleControls{
        height: 30vh;
    }
    .limit{
        height: 30vh;
    }
</style>