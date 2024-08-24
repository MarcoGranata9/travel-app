<script>
import Header from './components/Header.vue'
import jsonData from "./jsonData.json"

export default {
  data() {
    return {

    };
  },
  components: {Header},
  beforeCreate() {
    if(localStorage.getItem("data") === null) {
      localStorage.setItem("data", JSON.stringify(jsonData))
    }
  }
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
