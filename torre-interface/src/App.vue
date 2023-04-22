<script setup>
import { RouterView } from 'vue-router';
import TorreHeader from './components/TorreHeader.vue';
</script>

<template>
  <TorreHeader/>
  <RouterView />
</template>

<style lang="scss">

*{
  background-color: #27292d;
}

    @import url("https://use.typekit.net/jmq5unc.css");

//Muli Regular
*{
  font-family: "muli", sans-serif;
font-weight: 400;
font-style: normal;
}

</style>
