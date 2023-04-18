<script setup>

</script>

<template>
     <h5>© Movie DB, inc 2023</h5>
</template>

<style lang="scss" scoped>
@use '../assets/main' as *;

footer{
    @include FlexDisplay(row, flex-start, center, 100%, auto);
    border-top: 1px solid;
    h5{
      padding: 2%;

    }
}
</style>