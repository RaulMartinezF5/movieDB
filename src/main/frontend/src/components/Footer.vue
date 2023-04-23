<script setup>

</script>

<template>
    <div class="footer">
      <h5>Copyright © Movie RM, inc 2023</h5>
      <div class="email">
        <h5>info@movierm.com</h5>
      </div>
    </div> 
</template>

<style lang="scss" scoped>
@use '../assets/main' as *;

.footer{
    @include FlexDisplay(row, flex-start, center, 100%, auto);
    border-top: 1px solid;
    height: 3vh;
    h5{
      padding: 2%;
      display: flex;
      text-align: center;
    }
    .email{
      display: flex;
      justify-content: flex-end;
      margin-left: 40vw;
    }

}
</style>