<script>
import Header from './components/Header.vue'

export default {
  data() {
    return {

    };
  },
  components: {Header},
}

</script>

<template>
  <Header></Header>
  
  <router-view></router-view>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
